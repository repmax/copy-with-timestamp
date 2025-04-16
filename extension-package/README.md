# Copy File with Timestamp

This VS Code extension adds a context menu item to create a copy of a file with its last modification date/time appended to the filename in the format `_yyyymmdd-hhmm`.

## Features

- Right-click on a file in the explorer to see the "Copy File with Timestamp" option
- Automatically creates a copy of the file with the modification date/time in the format `_yyyymmdd-hhmm`
- Preserves the original file
- Works with all file types
- Preserves file extensions
- Shows status notifications

## Usage

1. Right-click on a file in the VS Code file explorer
2. Select "Copy File with Timestamp"
3. A copy of the file will be created with its modification date/time appended to the filename
4. The original file remains unchanged

For example, a file named `document.txt` will result in a new file named `document_20230601-1432.txt` while the original `document.txt` is preserved

## Requirements

- VS Code 1.60.0 or higher

## Extension Settings

This extension does not contribute any settings.

## Known Issues

None at this time.

## Release Notes

### 1.0.1

- Changed functionality to create a copy of the file instead of renaming it
- Renamed extension to "Copy File with Timestamp" to better reflect its function
- Updated command names and descriptions for clarity

### 1.0.0

Initial release of the Append Modification Date/Time extension.
