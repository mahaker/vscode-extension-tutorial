import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('findfilefromselection.find', () => {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.commands.executeCommand('workbench.action.quickOpen');
			return;
		}

		const { start, end } = editor.selection;
		const selectedText = editor.document.getText(new vscode.Range(start, end));

		// Open quickOpen dialog. The placeholder is selected text.
		vscode.commands.executeCommand('workbench.action.quickOpen', selectedText);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
