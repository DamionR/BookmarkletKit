# @bookmarklet-maker/pii-remover

[![Bookmarklet Status](https://img.shields.io/badge/status-ready-brightgreen.svg)](https://shields.io/)

This bookmarklet automatically redacts Personally Identifiable Information (PII) from your clipboard when you copy text. It's designed to protect sensitive data while you're working, sharing information, or taking screenshots. It features a settings panel for customization and works seamlessly across multiple browser tabs.

## Features

* **Automatic PII Redaction:** Redacts PII from copied text *before* it's placed on your clipboard.
* **Configurable Redaction Levels:** Choose from "Low," "Medium," or "High" redaction levels.
* **Customizable PII Types:** Select which types of PII to redact:
  * Email addresses
  * Phone numbers
  * Credit card numbers
  * Social Security Numbers (SSNs)
  * Addresses
  * Names
* **Settings Panel:** User-friendly settings panel for customization.
* **Real-time Clipboard Monitoring:** Actively monitors clipboard and redacts PII in real time.
* **Multi-Tab Awareness:** Works correctly even with multiple browser tabs open.
* **Visual Indicator:** Discreet indicator shows that PII protection is active.
* **Whitelist:** Built-in whitelist prevents accidental redaction of common terms.
* **Notifications:** Optional alerts when PII is detected and redacted.
* **Cross-browser Compatibility:** Works in Chrome, Firefox and Safari.

## Usage

1. **Activate:** Click the "PII Remover" bookmarklet in your browser's bookmarks bar.
2. **Copy Text:** Copy text from any webpage as you normally would.
3. **Automatic Redaction:** The bookmarklet automatically redacts detected PII.
4. **Paste:** Paste the redacted text wherever you need it.
5. **Settings:** Click the green indicator to customize redaction behavior.

## Installation

1. **Copy the Minified Code:** The ready-to-use bookmarklet code is in `dist/index.min.js`.
2. **Create a New Bookmark:** In your web browser, create a new bookmark.
3. **Paste the Code:** In the "URL" field of the new bookmark, paste the minified code.
4. **Name the Bookmark:** Give your bookmark a descriptive name (e.g., "PII Redactor").
5. **Save:** Save the bookmark.

## Building from Source

This package is part of the BookmarkletKit monorepo. You can build it individually:

cd /Users/damionrashford/BookmarkletKit/bookmarklets/bookmarklet-pii-remover
npm install
npm run build

This regenerates both unminified and minified versions in the `dist` directory.

## Contributing

If you find a bug or have a suggestion, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.