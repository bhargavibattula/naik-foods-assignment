const fs = require('fs');

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/naikfoods\.com/g, 'naikfoods.co.in');
footer = footer.replace(/konkanfoodbazar\/?/g, 'naikfoods_/');
footer = footer.replace(/naikkonkanfoodbazar/g, 'naikfoods_');
fs.writeFileSync('src/components/Footer.tsx', footer);

let header = fs.readFileSync('src/components/Header.tsx', 'utf8');
header = header.replace(/100% Authentic Konkan Products/g, '100% Authentic flavors from Vidarbha & Konkan');
header = header.replace(/\+919876543210/g, '+919730046247');
header = header.replace(/konkanfoodbazar\/?/g, 'naikfoods_/');
fs.writeFileSync('src/components/Header.tsx', header);

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
layout = layout.replace(/heart of Konkan/g, 'heart of Vidarbha & Konkan');
layout = layout.replace(/alibag, konkan/gi, 'vidarbha, konkan');
fs.writeFileSync('src/app/layout.tsx', layout);

let page = fs.readFileSync('src/app/page.tsx', 'utf8');
page = page.replace(/The True Taste of Konkan/gi, 'The True Taste of Vidarbha & Konkan');
page = page.replace(/Konkan-sourced/gi, 'Authentic-sourced');
fs.writeFileSync('src/app/page.tsx', page);

let readme = fs.readFileSync('README.md', 'utf8');
const note = `> **Note on Categories:** Category taxonomy in this prototype is illustrative; a production build would map directly to the live site's 8 categories.`;
readme = readme.replace(/(## 📊 Analysis Summary)/, '$1\n\n' + note);
fs.writeFileSync('README.md', readme);

console.log('done');
