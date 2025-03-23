# @bookmarklet-maker/runtime

This package provides the minimal runtime support needed for React/JSX-based bookmarklets. It's a lightweight alternative to including the full React runtime, optimized specifically for the constraints of bookmarklets.

## Features

* **Minimal JSX Support**: Provides the core functionality needed to use JSX in bookmarklets
* **Tiny Footprint**: Dramatically smaller than including React itself
* **No Dependencies**: Standalone implementation with no external requirements
* **Browser Compatibility**: Works in all modern browsers

## Usage

### In a React Bookmarklet

This runtime is automatically included when you create a React bookmarklet using the `create-bookmarklet` tool:

import React from 'react';  // This actually imports from the runtime

function MyBookmarklet() {
  return (
    <div>
      <h1>Hello from JSX!</h1>
      <button onClick={() => alert('Clicked!')}>Click Me</button>
    </div>
  );
}

### Direct Usage

You can also use the runtime directly:

import { jsx, Fragment } from '@bookmarklet-maker/runtime';

const element = jsx('div', {
  children: [
    jsx('h1', { children: 'Hello from JSX!' }),
    jsx('button', { 
      onClick: () => alert('Clicked!'),
      children: 'Click Me'
    })
  ]
});

## Installation

For development:

npm install @bookmarklet-maker/runtime

## Implementation

The runtime provides a minimal JSX factory implementation:

// Minimal JSX runtime for React bookmarklets
export function jsx(type, props, key) {
    const { children = [], ...rest } = props || {};
    return {
        $$typeof: Symbol.for('react.element'),
        type,
        props: { ...rest, children: Array.isArray(children) ? children : [children] },
        key: key ?? null,
        ref: null,
    };
}

export const jsxs = jsx; // For multiple children
export const Fragment = 'fragment'; // Simple fragment support

## Contributing

This is an internal package used by BookmarkletKit. If you find issues or have suggestions, please open an issue in the main repository.

## License

MIT License