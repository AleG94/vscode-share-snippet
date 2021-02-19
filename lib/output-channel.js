const vscode = require('vscode');

const outputChannel = vscode.window.createOutputChannel('Share Snippet');

exports.log = value => outputChannel.appendLine(value);
