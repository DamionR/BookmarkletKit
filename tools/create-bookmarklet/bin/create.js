#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { execSync } = require('child_process');

// Configuration
const LANGUAGES = ['javascript', 'typescript', 'react', 'python', 'ruby'];
const RESERVED_NAMES = ['bookmarklet', 'kit', 'create', 'tool', 'new'];
const CATEGORY_CHOICES = [
  'Productivity', 
  'Development', 
  'Security', 
  'Utility', 
  'Automation', 
  'Accessibility'
];

// Validate project name
function validateProjectName(input) {
  if (!input.trim()) return 'Project name cannot be empty.';
  if (!/^[a-z0-9-]+$/.test(input)) return 'Use lowercase letters, numbers, and hyphens only.';
  if (RESERVED_NAMES.includes(input.toLowerCase())) return 'This project name is reserved.';
  return true;
}

// Generate detailed README
function generateReadme(answers) {
  return `# ${answers.projectName}

## Description
${answers.description || 'A custom bookmarklet'}

## Category
${answers.category}

## Usage
[Provide specific usage instructions]

## Installation
1. Drag the bookmarklet to your browser's bookmarks bar
2. Click the bookmarklet when needed

## Contributing
Contributions welcome! Please open an issue or submit a pull request.

## License
${answers.license || 'MIT License'}
`;
}

// Main creation function
async function createBookmarklet() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name (lowercase, no spaces):',
        validate: validateProjectName
      },
      {
        type: 'list',
        name: 'language',
        message: 'Choose programming language:',
        choices: LANGUAGES
      },
      {
        type: 'list',
        name: 'category',
        message: 'Select bookmarklet category:',
        choices: CATEGORY_CHOICES
      },
      {
        type: 'input',
        name: 'description',
        message: 'Brief description:'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author name:',
        default: execSync('git config user.name').toString().trim()
      },
      {
        type: 'input',
        name: 'license',
        message: 'License:',
        default: 'MIT'
      }
    ]);

    const projectDir = path.resolve(process.cwd(), `bookmarklets/bookmarklet-${answers.projectName}`);
    const templateDir = path.join(__dirname, '../templates', answers.language);

    // Validate template exists
    if (!await fs.pathExists(templateDir)) {
      console.error(chalk.red(`Template for ${answers.language} not found.`));
      process.exit(1);
    }

    // Handle existing directory
    if (await fs.pathExists(projectDir)) {
      const { overwrite } = await inquirer.prompt([{
        type: 'confirm',
        name: 'overwrite',
        message: 'Directory already exists. Overwrite?',
        default: false
      }]);

      if (!overwrite) {
        console.log(chalk.yellow('Project creation cancelled.'));
        process.exit(0);
      }

      await fs.remove(projectDir);
    }

    // Copy template
    await fs.copy(templateDir, projectDir);

    // Update package.json
    const pkgPath = path.join(projectDir, 'package.json');
    const pkg = await fs.readJSON(pkgPath);
    
    pkg.name = `@bookmarkletkit/bookmarklet-${answers.projectName}`;
    pkg.description = answers.description;
    pkg.author = answers.author;
    pkg.license = answers.license;
    pkg.keywords = [
      'bookmarklet', 
      answers.language, 
      answers.category.toLowerCase()
    ];

    await fs.writeJSON(pkgPath, pkg, { spaces: 2 });

    // Create README
    await fs.writeFile(
      path.join(projectDir, 'README.md'), 
      generateReadme(answers)
    );

    console.log(chalk.green(`
✨ Bookmarklet project created successfully! 
📁 Location: ${projectDir}

Next steps:
  cd ${projectDir}
  npm install
  npm run build
`));

  } catch (error) {
    console.error(chalk.red('Project creation failed:'), error);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error(
    chalk.red('Unhandled Rejection at:'), 
    promise, 
    'reason:', 
    reason
  );
  process.exit(1);
});

createBookmarklet();