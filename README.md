# Erlang Lsx

原作者已经不再维护 Erlang LS。树影接手这个项目，在原有代码上继续更新，并把它作为独立插件 **Erlang Lsx** 发布。扩展 id 是 `shuying2244.erlang-lsx`，版本 `0.0.47`。它可以和市场上的 Erlang LS 一起安装，不会把原来的插件替换掉。

语言服务来自 [shuying2244/erlang_ls](https://github.com/shuying2244/erlang_ls) 的 `1.1.6`。调试适配器来自 [shuying2244/els_dap](https://github.com/shuying2244/els_dap)。语法高亮继续使用上游 [grammar](https://github.com/erlang-ls/grammar)。

项目配置文件仍然是 `erlang_ls.config`。这个插件在编辑器里的设置以 `erlang_lsx` 开头。原项目文档仍可作为功能说明：https://erlang-ls.github.io

The Erlang Lsx extension for VS Code. Project behaviour can be customized with an `erlang_ls.config` file. [Learn how](https://erlang-ls.github.io/configuration/).

## Available Features

### Code Completion

Get context-aware code completions for function names, macros,
records, variable names and more.

![Code Completion](https://github.com/erlang-ls/docs/raw/master/png/vscode/01-code-completion.png)

### Go To Definition

Navigate to the definition of a function, macro, record or type.

### Go To Implementation for OTP Behaviours

Hovering a `gen_server:start_link` call? Jump to the respective `init`
function with a single keystroke.

### Signature Suggestions

Never remember the order of the `lists:keytake/3` function? You are
not alone. We got you covered.

### Compiler Diagnostics

Display warnings and errors from the compiler inline.

![Compiler Diagnostics](https://github.com/erlang-ls/docs/raw/master/png/vscode/05-compiler-diagnostics.png)

### Dialyzer Diagnostics

It has never been so easy to make Dialyzer happy.

### Elvis Diagnostics

Display [Elvis](https://github.com/inaka/elvis) style suggestions
inline. No more nit-picking comments from colleagues!

### Edoc

Hover a local or remote function to see its `edoc`. You will miss this
feature so much when edocs are not available that you will start
writing them!

### Navigation for Included Files

Navigate to included files with a single click.

### Find/Peek References

Who is calling this function? Figure it out without leaving the
current context.

![Peek References](https://github.com/erlang-ls/docs/raw/master/png/vscode/11-peek-references.png)

### Outline

Get a nice outline of your module on the side and jump between
functions.

![Outline](https://github.com/erlang-ls/docs/raw/master/png/vscode/12-outline.png)

### Workspace Symbols

Jump to the module you're looking for, in no time.

### Folding

Focus on what's important, fold the rest.
