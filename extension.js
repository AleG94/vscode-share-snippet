const vscode = require('vscode');
const shareFileCommand = require('./lib/commands/share-file');
const shareSelectionCommand = require('./lib/commands/share-selection');

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(shareFileCommand.name, shareFileCommand.handler),
    vscode.commands.registerCommand(shareSelectionCommand.name, shareSelectionCommand.handler),
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
