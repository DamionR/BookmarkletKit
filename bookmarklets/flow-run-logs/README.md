# @bookmarkletkit/flow-run-logs

[![Bookmarklet Status](https://img.shields.io/badge/status-ready-brightgreen.svg)](https://shields.io/)

This bookmarklet provides one-click access to the Flow run logs page for the *current* Flow activity you're viewing in the Shopify admin. It eliminates the need to manually navigate through the support tools.

## Usage

1. **Navigate** to a Flow activity page within the Shopify admin. This is the page where you see the details of a specific Flow run.
2. **Click** the "Flow Run Logs" bookmarklet in your browser's bookmarks bar.
3. **Instant Access:** The corresponding Flow run logs page on `flow.shopifycloud.com` will open in a new tab, giving you immediate access to the detailed logs.

## How it Works

The bookmarklet works by:

1. **Extracting the Run ID:** It intelligently extracts the unique `run_id` from the current page's URL.
2. **Constructing the Logs URL:** It uses the extracted `run_id` to build the correct URL for the Flow run logs page.
3. **Opening in a New Tab:** It opens the constructed URL in a new tab, keeping your current Flow activity page open.

## Installation

1. **Copy the Minified Code:** The ready-to-use bookmarklet code is in `dist/index.min.js`.
2. **Create a New Bookmark:** In your web browser, create a new bookmark.
3. **Paste the Code:** In the "URL" field of the new bookmark, paste the minified code.
4. **Name the Bookmark:** Give your bookmark a descriptive name, such as "Flow Run Logs".
5. **Save:** Save the bookmark.

## Building from Source

This package is part of the BookmarkletKit monorepo. You can build it individually:

```bash
cd /Users/damionrashford/BookmarkletKit/bookmarklets/flow-run-logs
npm install
npm run build
```

This will regenerate both unminified and minified versions in the `dist` directory.

## Contributing

If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/DamionR/BookmarkletKit).

## License

This project is licensed under the MIT License.
