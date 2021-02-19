const vscode = require('vscode');
const Pastie = require('../pastie');
const outputChannel = require('../output-channel');
const messages = require('../messages');

module.exports = {
  name: 'share-snippet.shareFile',
  handler: async () => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      vscode.window.showErrorMessage(messages.NO_OPEN_EDITOR);
      return;
    }

    const text = editor.document.getText();
    const language = vscode.window.activeTextEditor.document.languageId;

    try {
      const pasteURL = await Pastie.createPaste(language, text);

      vscode.env.clipboard.writeText(pasteURL);
      vscode.window.showInformationMessage(messages.SNIPPET_URL_COPIED_TO_CLIPBOARD);
    } catch (err) {
      outputChannel.log(err);
      vscode.window.showErrorMessage(messages.UNKNOWN_ERROR);
    }
  },
};
