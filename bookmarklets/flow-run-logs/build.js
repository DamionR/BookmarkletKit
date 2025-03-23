const fs = require('fs-extra');
const { minify } = require('terser');
const path = require('path');

async function build() {
  try {
    // Ensure dist directory exists
    await fs.ensureDir('./dist');
    
    // Read source file
    const source = await fs.readFile('./src/index.js', 'utf-8');
    
    // Write unminified version
    await fs.writeFile('./dist/index.js', source);
    
    // Minify for production
    const { code: minified } = await minify(source, {
      compress: {
        drop_console: true,
        dead_code: true
      },
      mangle: true,
      format: {
        comments: false
      }
    });
    
    // Write minified version
    await fs.writeFile('./dist/index.min.js', minified);
    
    console.log('✅ Flow run logs bookmarklet built successfully!');
    console.log(`📦 Minified size: ${Buffer.byteLength(minified)} bytes`);
  } catch (err) {
    console.error('Error building bookmarklet:', err);
    process.exit(1);
  }
}

// Run build if called directly
if (require.main === module) {
  build();
} else {
  module.exports = build;
}