# create-bookmarklet

[![npm version](https://img.shields.io/npm/v/create-bookmarklet-tool.svg)](https://www.npmjs.com/package/create-bookmarklet-tool)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A command-line tool to generate new bookmarklet projects with different language options. This tool scaffolds a complete, ready-to-build bookmarklet project with all necessary configuration files.

## Features

* **Multiple Language Templates**:
  * JavaScript
  * TypeScript
  * React
  * Python (via Brython)
  * Ruby (via Opal)

* **Complete Project Structure**:
  * Source directories
  * Build scripts
  * Configuration files
  * README templates

* **Built-in Best Practices**:
  * Optimized build configurations
  * Minification setup
  * Proper dependencies

## Installation

### Global Installation

Install the tool globally to use it from anywhere:

npm install -g create-bookmarklet-tool

### Local Installation

Or use it directly from this repository:

cd /Users/damionrashford/BookmarkletKit/tools/create-bookmarklet
npm link

## Usage

Run the tool and follow the interactive prompts:

create-bookmarklet

You'll be asked to provide:
1. Project name
2. Programming language (JavaScript, TypeScript, React, Python, or Ruby)
3. Project description (optional)
4. Author name (optional) 
5. License (optional)

## Generated Project Structure

The generated project will have this structure (example for JavaScript):

my-bookmarklet/
├── src/
│   ├── features/
│   │   └── hello.js
│   └── main.js
├── bookmarklet.config.js
├── build.js
├── package.json
└── README.md

## Building a Generated Bookmarklet

After creating a new bookmarklet project:

cd your-project-name
npm install
npm run build

This will generate the bookmarklet code in the dist/ directory.

## Template Details

### JavaScript Template
Standard JavaScript with modern ES6+ features

### TypeScript Template
Type-safe development with full TypeScript support

### React Template
JSX support via the BookmarkletKit runtime

### Python Template
Python code compiled to JavaScript using Brython

### Ruby Template
Ruby code compiled to JavaScript using Opal

## Development

If you want to modify or extend the create-bookmarklet tool:

1. Clone the BookmarkletKit repository
2. Navigate to the create-bookmarklet directory
3. Make your changes
4. Test your changes with `npm link` and `create-bookmarklet`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.