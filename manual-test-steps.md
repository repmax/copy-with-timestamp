# Manual Testing Guide for Copy File with Timestamp Extension

This guide explains how to test the VS Code extension that creates a copy of a file with its modification date/time appended to the filename.

## Prerequisites

1. Visual Studio Code installed on your computer
2. The extension installed either:
   - For development: from the extension-package directory
   - From a VSIX file: using "Install from VSIX..." option

## Testing Steps

1. **Open Demo Files**
   - Open VS Code
   - Open the demo-files folder containing sample files

2. **Test via Context Menu**
   - Right-click on `document.txt` in the Explorer view
   - Select "Copy File with Timestamp" from the context menu
   - Verify that a new file is created with a name like `document_20250416-1430.txt` with the current date/time
   - Verify that the original `document.txt` file still exists and is unchanged

3. **Test via Command Palette**
   - Open `code.js` in the editor
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette
   - Type "Copy File with Timestamp" and select the command
   - Verify that a new file is created with a name like `code_20250416-1430.js` with the current date/time
   - Verify that the original `code.js` file still exists and is unchanged

4. **Test with Already Timestamped File**
   - Create a copy of one of the files manually with a timestamp in the format `_20250415-1200`
   - Run the extension on this timestamped file
   - Verify that a new file is created with the old timestamp replaced with the current one, rather than adding a second timestamp

5. **Error Handling Tests**
   - Try using the command without selecting a file and without an active editor
   - Try using the command on a folder instead of a file
   - Try using the command on a file for which you don't have write permissions
   - Verify appropriate error messages are displayed

## Expected Results

- New files should be created with the modification date/time appended in the format `_yyyymmdd-hhmm`
- Original files should remain unchanged
- When copying already timestamped files, existing timestamps in the same format should be replaced, not duplicated
- Appropriate error messages should appear when errors occur
- The extension should work both from the context menu and the command palette

## Troubleshooting

If the extension doesn't appear in the context menu:
- Ensure the extension is properly installed
- Try restarting VS Code
- Check the VS Code Developer Tools console for any error messages (Help > Toggle Developer Tools)