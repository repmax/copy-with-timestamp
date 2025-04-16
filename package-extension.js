const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Package the extension for distribution
console.log('Packaging extension for distribution...');

try {
  // Create a zip file of the extension-package directory
  execSync('zip -r copy-with-timestamp-1.0.1.vsix extension-package', { stdio: 'inherit' });
  
  console.log('\nExtension packaged successfully:');
  console.log('- File: copy-with-timestamp-1.0.1.vsix');
  console.log('- Type: VS Code Extension Package');
  
  console.log('\nInstallation instructions:');
  console.log('1. Open VS Code');
  console.log('2. Go to Extensions view');
  console.log('3. Click "..." menu (top-right of Extensions view)');
  console.log('4. Select "Install from VSIX..."');
  console.log('5. Browse to and select "copy-with-timestamp-1.0.1.vsix"');
  console.log('6. Restart VS Code if prompted');
  
} catch (error) {
  console.error('Failed to package extension:', error.message);
  console.log('\nAlternative manual installation:');
  console.log('1. Copy the "extension-package" folder to your VS Code extensions directory:');
  console.log('   - Windows: %USERPROFILE%\\.vscode\\extensions\\copy-with-timestamp');
  console.log('   - macOS: ~/.vscode/extensions/copy-with-timestamp');
  console.log('   - Linux: ~/.vscode/extensions/copy-with-timestamp');
  console.log('2. Restart VS Code');
}