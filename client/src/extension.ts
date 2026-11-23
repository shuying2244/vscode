import * as path from 'path';
import { commands, ExtensionContext, window, workspace } from 'vscode';


import {
    LanguageClient,
} from 'vscode-languageclient/node';

import { get_client } from './client';
import { registerDebugAdapterDescriptorFactory } from './debugger';

let client: LanguageClient;
let restarting = false;

async function restartServer(): Promise<void> {
    if (!client || restarting) {
        return;
    }
    restarting = true;
    try {
        if (client.needsStop()) {
            await client.stop();
        }
        client.start();
        await client.onReady();
        window.showInformationMessage('Erlang 语言服务已重启');
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        window.showErrorMessage('重启 Erlang 语言服务失败: ' + message);
    } finally {
        restarting = false;
    }
}

export async function activate(context: ExtensionContext) {

    context.subscriptions.push(registerDebugAdapterDescriptorFactory(context));
    context.subscriptions.push(commands.registerCommand('erlang_lsx.restartServer', restartServer));

    client = await get_client(context),
    client.start();
    context.subscriptions.push(workspace.onDidChangeConfiguration(event => {
        if (!event.affectsConfiguration('erlang_lsx.upperCaseId')) {
            return;
        }
        const upperCaseId = workspace.getConfiguration('erlang_lsx').get<boolean>('upperCaseId', true);
        // 启动完成前 sendNotification 会抛错，等语言服务就绪后再发
        client.onReady().then(() => {
            client.sendNotification('workspace/didChangeConfiguration', {
                settings: { upperCaseId }
            });
        }).then(undefined, () => undefined);
    }));
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
