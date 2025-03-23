const fs = require('fs-extra');
const path = require('path');

async function generateBookmarkletCatalog() {
  const bookmarkletBasePath = path.resolve(__dirname, '../bookmarklets');
  const catalogPath = path.resolve(__dirname, '../tools/bookmarklet-packager/src/data/bookmarklets.json');

  try {
    // Read all items in the bookmarklets directory
    const items = await fs.readdir(bookmarkletBasePath, { withFileTypes: true });

    // Filter for directories only
    const bookmarkletFolders = items
      .filter(item => item.isDirectory())
      .map(item => item.name)
      .filter(folder => fs.existsSync(path.join(bookmarkletBasePath, folder, 'dist', 'index.min.js')));

    const catalog = [];

    for (const folder of bookmarkletFolders) {
      const bookmarkletPath = path.join(bookmarkletBasePath, folder);
      const packageJsonPath = path.join(bookmarkletPath, 'package.json');
      const readmePath = path.join(bookmarkletPath, 'README.md');
      const distPath = path.join(bookmarkletPath, 'dist', 'index.min.js');

      try {
        const packageJson = await fs.readJSON(packageJsonPath);
        const readmeContent = await fs.readFile(readmePath, 'utf8');
        const bookmarkletCode = await fs.readFile(distPath, 'utf8');

        catalog.push({
          id: folder,
          name: packageJson.name.replace('@bookmarkletkit/', '').replace(/-/g, ' '),
          description: packageJson.description || 'A custom bookmarklet',
          category: determineCategory(packageJson.name, readmeContent),
          code: bookmarkletCode,
          repository: packageJson.repository?.url || '',
          readme: readmeContent
        });
      } catch (error) {
        console.error(`Error processing bookmarklet ${folder}:`, error);
      }
    }

    await fs.ensureDir(path.dirname(catalogPath));
    await fs.writeJSON(catalogPath, catalog, { spaces: 2 });
    console.log('Bookmarklet catalog generated successfully');
    console.log(`Generated catalog with ${catalog.length} bookmarklets`);
  } catch (error) {
    console.error('Error generating bookmarklet catalog:', error);
    process.exit(1); // Exit with error code to indicate failure
  }
}

function determineCategory(name, readme) {
  const lowerName = name.toLowerCase();
  const lowerReadme = readme.toLowerCase();
  if (lowerName.includes('security') || lowerReadme.includes('privacy')) return 'security';
  if (lowerName.includes('debug') || lowerName.includes('dev') || lowerReadme.includes('development')) return 'debugging';
  return 'productivity';
}

generateBookmarkletCatalog();