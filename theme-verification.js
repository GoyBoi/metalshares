// Theme Verification Script
// This script verifies that all components have proper dark mode implementations

const fs = require('fs');
const path = require('path');

// List of UI components to verify
const componentsToCheck = [
  'button.tsx',
  'input.tsx',
  'card.tsx',
  'checkbox.tsx',
  'dialog.tsx',
  'dropdown-menu.tsx',
  'label.tsx',
  'popover.tsx',
  'radio-group.tsx',
  'select.tsx',
  'separator.tsx',
  'switch.tsx',
  'tabs.tsx',
  'textarea.tsx',
  'theme-toggle.tsx',
  'tooltip.tsx',
  'sonner.tsx'
];

// Look for the components directory
const componentsDir = path.join(__dirname, 'components', 'ui');

console.log("Verifying dark mode implementation for UI components...\n");

let allPassed = true;

componentsToCheck.forEach(component => {
  const componentPath = path.join(componentsDir, component);
  
  if (fs.existsSync(componentPath)) {
    const content = fs.readFileSync(componentPath, 'utf8');
    
    // Check for dark mode classes
    const hasDarkClasses = /dark:/.test(content);
    
    if (hasDarkClasses) {
      console.log(`✅ ${component} - Has dark mode classes`);
    } else {
      console.log(`❌ ${component} - Missing dark mode classes`);
      allPassed = false;
    }
  } else {
    console.log(`⚠️  ${component} - File not found`);
    allPassed = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 All components have proper dark mode implementations!');
} else {
  console.log('⚠️  Some components are missing dark mode implementations.');
}

console.log('Theme verification complete!');