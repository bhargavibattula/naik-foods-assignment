const fs = require('fs');

const files = [
  'README.md',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/app/page.tsx',
  'src/app/layout.tsx',
  'src/app/about/page.tsx',
  'src/components/PincodeChecker.tsx',
  'src/app/product/[slug]/page.tsx',
  'src/data/products.ts',
  'src/data/recipes.ts'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Tagline replacements
    content = content.replace(/Authentic Alibag Delicacies/gi, 'Authentic flavors from Vidarbha & Konkan');
    
    // Brand name replacements
    content = content.replace(/Naik Konkan Foods/g, 'Naik Foods');
    
    // Physical store replacements
    content = content.replace(/Alibag, Raigad District, Maharashtra, India/g, 'Shukrawar Peth, Pune, Maharashtra, India');
    content = content.replace(/Alibag, Maharashtra/g, 'Pune, Maharashtra');
    
    // Title replacement
    content = content.replace(/Naik Foods - Authentic flavors from Vidarbha & Konkan/g, 'Naik Foods — Authentic Maharashtrian Delicacies & Masalas');
    
    // Other small mentions of Alibag
    content = content.replace(/Made in Alibag/g, 'Made in Pune');
    content = content.replace(/Alibag Made/g, 'Pune Made');
    content = content.replace(/Alibag household/g, 'Maharashtrian household');
    content = content.replace(/Alibag coast/g, 'Konkan coast');
    content = content.replace(/Alibag papads/g, 'Maharashtrian papads');
    content = content.replace(/Alibag taste/g, 'Maharashtrian taste');
    content = content.replace(/Alibag's food culture/g, "Maharashtra's food culture");
    content = content.replace(/childhood in Alibag/g, 'childhood in Vidarbha');
    
    fs.writeFileSync(file, content);
  }
});

let productsContent = fs.readFileSync('src/data/products.ts', 'utf8');
productsContent = productsContent.replace(/export const categories = \[([\s\S]*?)\];/m, 
`export const categories = [
  { id: "c1", name: "Snacks & Namkeen", slug: "snacks-namkeen", emoji: "🥨" },
  { id: "c2", name: "Pickles & Condiments", slug: "pickles-condiments", emoji: "🥭" },
  { id: "c3", name: "Sweets & Bakery", slug: "sweets-bakery", emoji: "🍪" },
  { id: "c4", name: "Dairy & Beverages", slug: "dairy-beverages", emoji: "🥛" },
  { id: "c5", name: "Mukhvas & Digestives", slug: "mukhvas-digestives", emoji: "🌿" },
  { id: "c6", name: "Confectionery", slug: "confectionery", emoji: "🍬" },
  { id: "c7", name: "Spices & Masalas", slug: "spices-masalas", emoji: "🌶️" },
  { id: "c8", name: "Dry/Instant Grocery", slug: "dry-instant-grocery", emoji: "🌾" }
];`);
productsContent = productsContent.replace(/(name: "Shahi Mukhwas",[\s\S]*?price:\s*)\d+,/g, '$10,');
fs.writeFileSync('src/data/products.ts', productsContent);

let readmeContent = fs.readFileSync('README.md', 'utf8');
readmeContent = readmeContent.replace(/10 categories/g, '8 categories');
readmeContent = readmeContent.replace(/"Aaswad Mitha Paan" shows ₹0/g, '"Aaswad Mitha Paan" and "Shahi Mukhwas" show ₹0');
readmeContent = readmeContent.replace(/Aaswad Mitha Paan shows ₹0/g, '"Aaswad Mitha Paan" and "Shahi Mukhwas" show ₹0');

const extraAnalysis = `
### 16. ♿ Accessibility & UX Enhancements
**Problem:** The live site suffers from a few citable UX and accessibility bugs:
1. **Viewport Meta Tag:** Sets \`maximum-scale=1, user-scalable=no\`, completely disabling pinch-to-zoom (critical accessibility bug for a food/ingredient site).
2. **Generic Testimonials:** Features placeholder/stock avatars with mismatched names, which damages brand trust.
3. **Newsletter Form:** Has no visible confirmation state upon signup.
4. **Pagination vs Filtering:** Store paginates 12 products per page across 10 pages but restricts sorting to "Newest first" only, reinforcing the urgent need for the robust search/filter/sort system implemented in this prototype.
5. **Store Locator Scaling:** Only lists a single Shukrawar Peth, Pune address under "Visit Our Store", lacking a scalable locator for future expansion.
**Solution:** Prototype implements accessible meta tags, provides real product-level reviews instead of fake global testimonials, and overhauls the store UX.
`;
readmeContent = readmeContent.replace(/---([\s\S]*?)## 🛠 Tech Stack/, extraAnalysis + '\n---\n\n## 🛠 Tech Stack');
fs.writeFileSync('README.md', readmeContent);

console.log('Update complete');
