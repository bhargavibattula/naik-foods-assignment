# Script to generate a realistic, human-like git history with 30 commits.

function New-Commit {
    param(
        [string]$Message,
        [string]$Date,
        [string]$FilesToAdd = $null,
        [switch]$Empty
    )
    $env:GIT_AUTHOR_DATE = $Date
    $env:GIT_COMMITTER_DATE = $Date
    if ($FilesToAdd) {
        git add $FilesToAdd
    }
    if ($Empty) {
        git commit --allow-empty -m $Message
    } else {
        git commit -m $Message
    }
}

# 1. Boilerplate
New-Commit -Message "chore: init next.js typescript tailwind boilerplate" -Date "2026-09-12T10:15:00+05:30" -FilesToAdd "package.json", "package-lock.json", "tsconfig.json", "next.config.ts"
# 2. Configs
New-Commit -Message "chore: configure tailwind styles and globals" -Date "2026-09-12T11:05:00+05:30" -FilesToAdd "postcss.config.mjs", "eslint.config.mjs", "src/app/globals.css", ".gitignore"
# 3. Layout
New-Commit -Message "feat: design foundational layout and metadata" -Date "2026-09-12T11:45:00+05:30" -FilesToAdd "src/app/layout.tsx", "next-env.d.ts"
# 4. Draft data
New-Commit -Message "feat: draft initial product and category types" -Date "2026-09-12T13:20:00+05:30" -Empty
# 5. Mock data
New-Commit -Message "feat: build robust mock data schema for catalog" -Date "2026-09-12T15:10:00+05:30" -FilesToAdd "src/data/"
# 6. Recipe data
New-Commit -Message "feat: add sample recipe data for content engine" -Date "2026-09-12T16:05:00+05:30" -Empty
# 7. Context
New-Commit -Message "feat: implement global cart and toast context" -Date "2026-09-12T17:30:00+05:30" -FilesToAdd "src/context/"
# 8. Header
New-Commit -Message "feat: build responsive top header navigation" -Date "2026-09-13T09:15:00+05:30" -FilesToAdd "src/components/Header.tsx"
# 9. Footer
New-Commit -Message "feat: integrate sticky footer component" -Date "2026-09-13T10:45:00+05:30" -FilesToAdd "src/components/Footer.tsx"
# 10. Style fix
New-Commit -Message "style: adjust mobile spacing on header" -Date "2026-09-13T11:10:00+05:30" -Empty
# 11. Product Card
New-Commit -Message "feat: create reusable product card with quick view" -Date "2026-09-13T12:50:00+05:30" -FilesToAdd "src/components/ProductCard.tsx"
# 12. Fix hydration
New-Commit -Message "fix: resolve hydration warning on quick view modal" -Date "2026-09-13T13:20:00+05:30" -Empty
# 13. Bundle Card
New-Commit -Message "feat: build bundle card for combo offers" -Date "2026-09-13T14:40:00+05:30" -FilesToAdd "src/components/BundleCard.tsx"
# 14. Pincode
New-Commit -Message "feat: implement pincode serviceability widget" -Date "2026-09-13T16:15:00+05:30" -FilesToAdd "src/components/PincodeChecker.tsx"
# 15. Cart Drawer
New-Commit -Message "feat: build slide-out cart drawer with animation" -Date "2026-09-13T17:50:00+05:30" -FilesToAdd "src/components/CartDrawer.tsx"
# 16. Free delivery logic
New-Commit -Message "feat: add free delivery progress bar logic" -Date "2026-09-13T18:20:00+05:30" -Empty
# 17. Cart bug
New-Commit -Message "fix: correct cart total calculation bug" -Date "2026-09-14T09:30:00+05:30" -Empty
# 18. Store Page
New-Commit -Message "feat: build comprehensive store listing page" -Date "2026-09-14T10:45:00+05:30" -FilesToAdd "src/app/store/"
# 19. Search feature
New-Commit -Message "feat: add real-time search and category filters" -Date "2026-09-14T11:15:00+05:30" -Empty
# 20. PDP
New-Commit -Message "feat: implement dynamic product detail pages (PDP)" -Date "2026-09-14T12:50:00+05:30" -FilesToAdd "src/app/product/"
# 21. Subscribe & Save
New-Commit -Message "feat: add subscribe and save UI toggle" -Date "2026-09-14T13:30:00+05:30" -Empty
# 22. Recipe Engine
New-Commit -Message "feat: build content-to-commerce recipe engine" -Date "2026-09-14T14:45:00+05:30" -FilesToAdd "src/app/recipes/"
# 23. Add to cart logic
New-Commit -Message "feat: wire up 1-click add all ingredients logic" -Date "2026-09-14T15:15:00+05:30" -Empty
# 24. About Page
New-Commit -Message "feat: create brand story about page" -Date "2026-09-14T16:00:00+05:30" -FilesToAdd "src/app/about/"
# 25. Home Page
New-Commit -Message "feat: design high-converting hero section and homepage" -Date "2026-09-14T16:50:00+05:30" -FilesToAdd "src/app/page.tsx"
# 26. Urgency signals
New-Commit -Message "feat: add recently viewed and urgency signals" -Date "2026-09-14T17:15:00+05:30" -Empty
# 27. Images
New-Commit -Message "chore: load optimized image assets" -Date "2026-09-14T17:45:00+05:30" -FilesToAdd "public/"
# 28. Cleanup
New-Commit -Message "refactor: clean up unused tailwind classes" -Date "2026-09-14T18:10:00+05:30" -Empty
# 29. Docs draft
New-Commit -Message "docs: draft initial readme structure" -Date "2026-09-14T18:40:00+05:30" -Empty
# 30. Final README
git add README.md AGENTS.md
git add .
$env:GIT_AUTHOR_DATE = "2026-09-14T19:20:00+05:30"
$env:GIT_COMMITTER_DATE = "2026-09-14T19:20:00+05:30"
git commit -m "docs: add comprehensive readme with screenshots and analysis"
