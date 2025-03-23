import bookmarkletData from '../data/bookmarklets.json';

export const bookmarkletCategories = [
  { id: 'productivity', name: 'Productivity Tools', icon: '🚀' },
  { id: 'debugging', name: 'Debugging & Development', icon: '🛠️' },
  { id: 'security', name: 'Security & Privacy', icon: '🔒' }
];

export async function loadBookmarkletData() {
  const enhancedBookmarklets = bookmarkletData.map(bookmarklet => ({
    ...bookmarklet,
    category: determineCategory(bookmarklet.name, bookmarklet.readme || ''),
    icon: determineIcon(determineCategory(bookmarklet.name, bookmarklet.readme || '')),
    usage: extractUsage(bookmarklet.readme || '')
  }));

  return Promise.resolve(enhancedBookmarklets);
}

function determineCategory(name, readme) {
  const lowerName = name.toLowerCase();
  const lowerReadme = readme.toLowerCase();
  if (lowerName.includes('security') || lowerReadme.includes('privacy')) return 'security';
  if (lowerName.includes('debug') || lowerName.includes('dev') || lowerReadme.includes('development')) return 'debugging';
  return 'productivity';
}

function determineIcon(category) {
  switch (category) {
    case 'security':
      return '🔒';
    case 'debugging':
      return '🛠️';
    default:
      return '🚀';
  }
}

function extractUsage(readme) {
  const usageSection = readme.match(/## How it Works([\s\S]*?)##/);
  return usageSection ? usageSection[1].trim().replace(/\n/g, ' ').substring(0, 200) : 'No usage details available.';
}

export function searchBookmarklets(query, bookmarklets) {
  return bookmarklets.filter(bookmarklet =>
    bookmarklet.name.toLowerCase().includes(query.toLowerCase()) ||
    bookmarklet.description.toLowerCase().includes(query.toLowerCase()) ||
    bookmarklet.category.toLowerCase().includes(query.toLowerCase())
  );
}