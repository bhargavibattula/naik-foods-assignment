const fs = require('fs');
let content = fs.readFileSync('README.md', 'utf8');

// Brand replacement
content = content.replace(/Naik Konkan Foods/g, 'Naik Foods');
content = content.replace(/Authentic Alibag Delicacies/gi, 'Authentic flavors from Vidarbha & Konkan');

// 10 categories to 8 categories
content = content.replace(/10 categories/g, '8 categories');

// Price Bug Fix text
content = content.replace(/"Aaswad Mitha Paan" shows ₹0 on the live site/g, '"Aaswad Mitha Paan" and "Shahi Mukhwas" show ₹0 on the live site');

// Add Accessibility Section right before ## Tech Stack
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

content = content.replace(/---\s*## 🛠 Tech Stack/, extraAnalysis + '\n---\n\n## 🛠 Tech Stack');

fs.writeFileSync('README.md', content);
console.log('README safely updated.');
