# @bookmarklet-maker/request-id-observe

[![Bookmarklet Status](https://img.shields.io/badge/status-ready-brightgreen.svg)](https://shields.io/)

This bookmarklet provides a quick and easy way to jump directly to the Observe investigation page for a given Request ID found on *any* webpage. It's particularly useful for debugging and troubleshooting issues within the Shopify ecosystem.

## Usage

1. **Navigate** to a webpage that might contain a Request ID (error page, debugging page, etc.)
2. **Click** the "Request ID Observe" bookmarklet in your browser's bookmarks bar.
3. **Instantly Investigate:** If a Request ID is found, the corresponding Observe investigation page will open in a new tab. If no Request ID is found, you'll see a brief alert message.

## How it Works

The bookmarklet scans the current webpage for a Request ID, checking the following locations in order:

1. **DOM Elements:** Elements with class names or IDs containing "request-id" or "error-details".
2. **Meta Tags:** `<meta>` tags with the `name` attribute set to "request-id" or "RequestId".
3. **Page Content:** As a fallback, it searches the entire text content of the page.

Once a Request ID is found, the bookmarklet constructs the appropriate Observe URL and opens it in a new tab.

## Installation

1. **Copy the Minified Code:** The ready-to-use bookmarklet code is in `dist/index.min.js`.
2. **Create a New Bookmark:** In your web browser, create a new bookmark.
3. **Paste the Code:** In the "URL" field of the new bookmark, paste the minified code.
4. **Name the Bookmark:** Give your bookmark a descriptive name, such as "Request ID Observe".
5. **Save:** Save the bookmark.

## Building from Source

This package is part of the BookmarkletKit monorepo. You can build it individually:

cd /Users/damionrashford/BookmarkletKit/bookmarklets/bookmarklet-request-id-observe
npm install
npm run build

This will regenerate both unminified and minified versions in the `dist` directory.

## Contributing

If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.