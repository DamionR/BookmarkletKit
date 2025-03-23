# BookmarkletKit

[![GitHub stars](https://img.shields.io/github/stars/DamionR/BookmarkletKit)](https://github.com/DamionR/BookmarkletKit/stargazers)
[![GitHub license](https://img.shields.io/github/license/DamionR/BookmarkletKit)](https://github.com/DamionR/BookmarkletKit/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/bookmarklet-kit.svg)](https://www.npmjs.com/package/bookmarklet-kit)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/DamionR/BookmarkletKit/blob/main/CONTRIBUTING.md)

A toolkit for creating, managing, and distributing browser bookmarklets. Enhance your browser with lightweight, portable productivity tools.

![BookmarkletKit Demo](https://raw.githubusercontent.com/DamionR/BookmarkletKit/main/docs/images/demo.png)

## Features

* **Ready-to-Use Bookmarklets:** A collection of powerful, pre-built productivity tools:
  * **PII Redactor:** Automatically remove sensitive information from copied text
  * **Flow Run Logs:** Instant access to Shopify Flow run logs
  * **Request ID Observer:** Extract and open request IDs in Observe

* **Multi-Language Support:** Create bookmarklets in multiple languages:
  * JavaScript (ES6+)
  * TypeScript
  * React (with minimal runtime)
  * Python (via Brython)
  * Ruby (via Opal)

* **Developer Tooling:**
  * CLI generator for scaffolding new projects
  * Optimized build processes for each language
  * Bundling and minification

* **Extensible Architecture:**
  * Shared runtime for React bookmarklets
  * Consistent build configuration
  * Well-documented templates

## Installation

```bash
# Clone the repository
git clone https://github.com/DamionR/BookmarkletKit.git
cd BookmarkletKit

# Install dependencies
npm install

# Build all bookmarklets
npm run build
```

## Using the Bookmarklets

Each bookmarklet is located in its own directory under `bookmarklets/`:

1. Navigate to the bookmarklet directory
2. Read the README.md for specific instructions
3. Find the ready-to-use code in `dist/index.min.js`
4. Create a new browser bookmark and paste the code in the URL field

See [the bookmarklets directory](https://github.com/DamionR/BookmarkletKit/tree/main/bookmarklets) for a full list of available bookmarklets.

## Creating New Bookmarklets

Use the included CLI tool to generate new bookmarklet projects:

```bash
# Install the CLI tool
cd tools/create-bookmarklet
npm link

# Create a new bookmarklet
create-bookmarklet

# Follow the interactive prompts
```

The CLI will create a new directory with everything you need:

```
my-bookmarklet/
├── src/            # Source code
├── build.js        # Build configuration
├── package.json    # Dependencies
└── README.md       # Documentation
```

After creating your bookmarklet:

```bash
cd my-bookmarklet
npm install
npm run build
```

Your bookmarklet code will be available in `dist/index.min.js`.

## Project Structure

```
BookmarkletKit/
├── bookmarklets/                # Ready-to-use bookmarklets
│   ├── bookmarklet-flow-run-logs/
│   ├── bookmarklet-pii-remover/
│   ├── bookmarklet-request-id-observe/
│   └── bookmarklet-runtime/     # Shared runtime code
├── tools/                       # Development tools
│   └── create-bookmarklet/      # CLI generator tool
├── docs/                        # Documentation
└── examples/                    # Example projects
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

See [CONTRIBUTING.md](https://github.com/DamionR/BookmarkletKit/blob/main/CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/DamionR/BookmarkletKit/blob/main/LICENSE) file for details.

## Acknowledgments

* Inspired by developer productivity
* Uses modern build tools like esbuild and terser
* Community contributions welcome

---

Made with ❤️ by [Damion Rashford](https://github.com/DamionR)
