# BookmarkletKit - Bookmarklets

This directory contains a collection of browser bookmarklets designed to enhance productivity for developers and support specialists.

## Available Bookmarklets

| Bookmarklet | Description |
|-------------|-------------|
| [flow-run-logs](./bookmarklet-flow-run-logs) | Quick access to Flow run logs from the Shopify admin |
| [pii-remover](./bookmarklet-pii-remover) | Automatically redact sensitive information from clipboard content |
| [request-id-observe](./bookmarklet-request-id-observe) | Extract request IDs from web pages and open in Observe |
| [runtime](./bookmarklet-runtime) | Shared runtime package for JSX support in bookmarklets |

## Using These Bookmarklets

Each bookmarklet folder contains:
- Complete source code
- Build tools
- Detailed README with installation and usage instructions
- Pre-compiled bookmarklet code ready for your browser

## Building All Bookmarklets

From the repository root, run:

npm run build

## Development

To create new bookmarklets, use the create-bookmarklet tool included in this repository:

cd tools/create-bookmarklet
npm link
create-bookmarklet

Then follow the interactive prompts to create a new bookmarklet project.