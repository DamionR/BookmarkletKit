# BookmarkletKit - Tools

This directory contains development tools used to create and manage bookmarklets.

## Available Tools

| Tool | Description |
|------|-------------|
| [create-bookmarklet](./create-bookmarklet) | CLI tool for scaffolding new bookmarklet projects |

## Using create-bookmarklet

The create-bookmarklet tool lets you quickly generate new bookmarklet projects with the correct structure, build configuration, and dependencies.

To use it:

1. Install the tool globally:

npm link ./create-bookmarklet

2. Run the tool:

create-bookmarklet

3. Follow the interactive prompts to specify:
   - Project name
   - Programming language
   - Description
   - Author
   - License

The tool will generate a complete, ready-to-build bookmarklet project.

## Adding New Tools

When adding new tools to this directory, make sure to:

1. Follow the structure of existing tools
2. Update this README to include your new tool
3. Provide detailed documentation within the tool's directory