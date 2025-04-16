# VS Code Extension Structure

This document outlines the structure and components of the "Copy File with Timestamp" VS Code extension.

## Project Structure

```
/
├── src/                    # Source code
│   └── extension.ts        # Main extension code
├── out/                    # Compiled JavaScript code
│   ├── extension.js        # Compiled from extension.ts
│   └── extension.js.map    # Source map
├── extension-package/      # Packaged extension ready for distribution
│   ├── out/                # Compiled code for distribution
│   ├── package.json        # Extension manifest
│   ├── README.md           # Extension documentation
│   └── .vscodeignore       # Files to exclude from package
├── demo-files/             # Sample files for testing
│   ├── document.txt        # Sample text file
│   └── code.js             # Sample code file
├── .vscode/                # VS Code configuration
│   ├── launch.json         # Debugging configuration
│   └── tasks.json          # Build tasks
├── package.json            # Project configuration
├── tsconfig.json           # TypeScript configuration
├── create-vsix.js          # Packaging info script
├── package-extension.js    # Extension packaging script
├── copy-with-timestamp-1.0.0.vsix  # Version 1.0.0 of the packaged extension
├── copy-with-timestamp-1.0.1.vsix  # Version 1.0.1 of the packaged extension
├── manual-test-steps.md    # Testing instructions
└── vscode-extension-structure.md  # This file
```

## Key Components

### 1. Extension Logic (`src/extension.ts`)
- **activate()**: Entry point that registers the extension command
- **copyWithTimestamp**: Main command implementation that:
  - Gets the selected file or active editor file
  - Retrieves file modification time
  - Formats the timestamp as `_yyyymmdd-hhmm`
  - Creates a copy of the file with the timestamp in the filename
  - Handles intelligent replacement of existing timestamps

### 2. Extension Manifest (`extension-package/package.json`)
- **name, displayName, description**: Extension identity
- **version**: Extension version (1.0.1)
- **engines**: Compatible VS Code versions (^1.60.0+)
- **activationEvents**: Triggers extension activation (`onCommand:copyWithTimestamp`)
- **contributes**: 
  - **commands**: Defines the `copyWithTimestamp` command
  - **menus**: Adds command to explorer context menu in the "7_modification" group

### 3. Packaging Scripts
- **create-vsix.js**: Displays packaging information and instructions
- **package-extension.js**: Creates the VSIX package for distribution

## User Interface
- **Context Menu**: File Explorer right-click menu shows "Copy File with Timestamp"
- **Command Palette**: Command available through Ctrl+Shift+P (Cmd+Shift+P on Mac)
- **Feedback**: Information and error messages displayed after operations, confirming successful file copying

## Error Handling
- Validates input is a file, not a directory
- Handles common error cases (permissions, file not found, etc.)
- Provides helpful error messages with context

## Installation Methods
1. **VSIX Installation**: Via "Install from VSIX..." in VS Code Extensions view
2. **Development Installation**: Copying extension folder to VS Code extensions directory