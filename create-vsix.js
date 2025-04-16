const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create a .vsixmanifest file for the extension
const packageJsonPath = path.join('extension-package', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

console.log('Extension is ready for packaging.');
console.log('To create a VSIX file, you would normally use:');
console.log('  cd extension-package');
console.log('  vsce package');
console.log('\nHowever, this requires the vsce tool which we might not have installed.');
console.log('\nAlternatively, you can:');
console.log('1. Install this extension for development:');
console.log('   - Copy the "extension-package" directory to your VS Code extensions directory:');
console.log('     * Windows: %USERPROFILE%\\.vscode\\extensions');
console.log('     * macOS: ~/.vscode/extensions');
console.log('     * Linux: ~/.vscode/extensions');
console.log('   - Restart VS Code');
console.log('\n2. Or create a ZIP file to distribute:');
console.log('   - Compress the "extension-package" directory');
console.log('   - Rename the resulting archive to "copy-with-timestamp-1.0.1.vsix"');
console.log('   - Share this file with others to install manually via:');
console.log('     Extensions View > "..." menu > "Install from VSIX..."');

// Output the final steps
console.log('\nExtension details:');
console.log('- Name:', packageJson.displayName);
console.log('- Version:', packageJson.version);
console.log('- Main file:', packageJson.main);
console.log('- Commands:', packageJson.contributes.commands.map(cmd => cmd.command).join(', '));