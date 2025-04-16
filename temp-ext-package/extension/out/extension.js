"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
// This method is called when your extension is activated
// Your extension is activated the first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    console.log('Extension "append-modification-date" is now active');
    // Register the command to append modification date to filename
    let disposable = vscode.commands.registerCommand('appendModificationDate', async (fileUri) => {
        // If command was called from command palette instead of context menu
        if (!fileUri) {
            // Try to get active editor's file
            const activeEditor = vscode.window.activeTextEditor;
            if (activeEditor) {
                fileUri = activeEditor.document.uri;
            }
            else {
                vscode.window.showErrorMessage('Please use this command from the file explorer context menu or with an open file.');
                return;
            }
        }
        try {
            // Get the file stats to check if it's a file (not a directory) and to get the modification time
            const fileStat = fs.statSync(fileUri.fsPath);
            // Check if it's a file
            if (!fileStat.isFile()) {
                vscode.window.showErrorMessage('This command only works on files, not directories.');
                return;
            }
            // Get the modification time
            const modTime = fileStat.mtime;
            // Format the date/time as "_yyyymmdd-hhmm"
            const year = modTime.getFullYear();
            const month = (modTime.getMonth() + 1).toString().padStart(2, '0');
            const day = modTime.getDate().toString().padStart(2, '0');
            const hours = modTime.getHours().toString().padStart(2, '0');
            const minutes = modTime.getMinutes().toString().padStart(2, '0');
            const dateTimeSuffix = `_${year}${month}${day}-${hours}${minutes}`;
            // Get file info
            const dirName = path.dirname(fileUri.fsPath);
            const baseName = path.basename(fileUri.fsPath);
            const extName = path.extname(baseName);
            const nameWithoutExt = baseName.slice(0, baseName.length - extName.length);
            // Check if the file already has a date pattern at the end
            const datePattern = /_\d{8}-\d{4}$/;
            const alreadyHasDate = datePattern.test(nameWithoutExt);
            let newName;
            if (alreadyHasDate) {
                // Replace the existing date pattern
                newName = nameWithoutExt.replace(datePattern, dateTimeSuffix) + extName;
            }
            else {
                // Append the new date pattern
                newName = nameWithoutExt + dateTimeSuffix + extName;
            }
            const newPath = path.join(dirName, newName);
            // Copy the file instead of renaming it
            fs.copyFileSync(fileUri.fsPath, newPath);
            vscode.window.showInformationMessage(`File copied to: ${newName}`);
        }
        catch (error) {
            let errorMessage = 'Failed to copy file. ';
            if (error instanceof Error) {
                // Add specific error message
                errorMessage += error.message;
                // Add more helpful context based on common errors
                if (error.message.includes('permission denied')) {
                    errorMessage += ' (You may not have permission to access this file)';
                }
                else if (error.message.includes('no such file')) {
                    errorMessage += ' (The file may have been moved or deleted)';
                }
                else if (error.message.includes('file already exists')) {
                    errorMessage += ' (A file with the target name already exists)';
                }
            }
            vscode.window.showErrorMessage(errorMessage);
        }
    });
    context.subscriptions.push(disposable);
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map