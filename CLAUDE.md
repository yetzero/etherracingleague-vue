# Ether Racing League - Vue Site Clone

## Project Objective

Completely replicate the existing WordPress site at [etherracingleague.com](https://etherracingleague.com) into a new Vue.js version with correct content for all pages.

## Project Setup

- **Framework**: Vue 3 with Vite
- **Router**: Vue Router
- **Location**: `/Users/luissantander/Repos/etherracingleague.com/vue-site/`
- **Original Site Reference**: `/Users/luissantander/Repos/etherracingleague.com/original-site/` (saved HTML/CSS/JS)

## Project Structure

```
vue-site/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css          # Global styles
│   │   └── images/
│   │       ├── characters/        # Character portrait images (12 files)
│   │       ├── courses/           # Course/track images (10 files)
│   │       ├── databank/          # Databank article images (49 files)
│   │       └── *.webp             # Bike images, backgrounds, logos
│   ├── components/
│   │   ├── SiteHeader.vue
│   │   └── SiteFooter.vue
│   ├── data/
│   │   ├── characterDetails.js    # All 12 character data with bios
│   │   ├── articleTypes.js        # 49 databank articles metadata
│   │   ├── articleDetails.js      # Full databank article content
│   │   ├── courseDetails.js       # Course/track details
│   │   └── blogPosts.js           # Blog post data
│   ├── views/
│   │   ├── HomePage.vue
│   │   ├── CharactersPage.vue
│   │   ├── CharacterDetailPage.vue
│   │   ├── CoursesPage.vue
│   │   ├── CourseDetailPage.vue
│   │   ├── DatabankPage.vue
│   │   ├── ArticleTypePage.vue
│   │   ├── ArticleDetailPage.vue
│   │   ├── BlogPage.vue
│   │   └── BlogPostPage.vue
│   ├── router/
│   │   └── index.js               # All routes configured
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## Pages Status

### Completed Pages

| Page | Route | Component | Status |
|------|-------|-----------|--------|
| Home | `/` | HomePage.vue | Complete |
| Characters List | `/characters` | CharactersPage.vue | Complete |
| Character Detail | `/character/:slug` | CharacterDetailPage.vue | Complete (all 12 characters) |
| Courses List | `/courses` | CoursesPage.vue | Complete |
| Course Detail | `/course/:slug` | CourseDetailPage.vue | Complete |
| Databank | `/databank` | DatabankPage.vue | Complete (49 articles) |
| Article Type | `/databank/:type` | ArticleTypePage.vue | Complete |
| Article Detail | `/databank/:type/:slug` | ArticleDetailPage.vue | Complete |
| Blog | `/blog` | BlogPage.vue | Complete |
| Blog Post | `/blog/:slug` | BlogPostPage.vue | Complete |

## Characters Data

All 12 characters have been added with correct data from the original site:

| Character | Origin | Ether Bike | Background Image |
|-----------|--------|------------|------------------|
| Blu Zaremi | Kaaru | Azure Comet | kaaru-mining-facilities.webp |
| Raziya Kael | Veltora | Magma Surge | obsidian-peaks-concept.webp |
| Cix Volaris | Ellyndor | Iron Fury | ellyndor-gauntlet.webp |
| Kaela D'Sol | Solarae | Celestial Serenade | solarae-temple.webp |
| Nix Zephyr | Nakrozel | Gravity Jolt | nakrozel-concept-2.webp |
| Xarellia the Swift | Xanara | Aerial Swordfish | xanara-concept-2.webp |
| Qaria Bolt | Valendor | Mercury Flash | valendor-factory.webp |
| Luna Lumina | Phobetra | Stardust Glide | phobetra-concept-2.webp |
| Lira Skywhisper | Mytheann | Nebula Drifter | mytheann-nebula.webp |
| Sylva Tyris | Korravan | Emerald Whisper | korravan-concept-2.webp |
| Yanna Starstrider | Oryxxon | Phoenix Flare | oryxxon-concept-5.webp |
| Rhea Vex | Outland Belt | Scarlet Shadow | planet-outland-belt.webp |

Each character entry in `characterDetails.js` includes:
- name, age, origin, occupation, etherBike
- image (character portrait)
- bikeImage (ether bike image)
- backgroundImage (hero section background)
- content (full HTML bio)
- prevCharacter / nextCharacter (navigation)

## Databank Articles

49 articles across 8 categories in `articleTypes.js`:
- Characters (supporting characters, not racers)
- Creatures
- Locations
- Organizations
- Planets
- Species
- Substances
- Technology

## Images Downloaded

### Character Portraits (`src/assets/images/characters/`)
- blu-zaremi.webp, raziya-kael.webp, cix-volaris.webp, kaela-dsol.webp
- nix-zephyr.webp, xarellia-the-swift.webp, qaria-bolt.webp, luna-lumina.webp
- lira-skywhisper.webp, sylva-tyris.webp, yanna-starstrider.webp, rhea-vex.webp

### Bike Images (`src/assets/images/`)
- azure-comet.webp, magma-surge-concept.webp, iron-fury-concept.webp
- Celestial-Serenade.webp (in databank/), Gravity-Jolt.webp (in databank/)
- aerial-swordfish-concept.webp, mercury-flash-concept.webp
- stardust-glide-concept.webp, nebula-drifter-concept.webp (in databank/)
- emerald-whisper.webp, Phoenix-Flare.webp (in databank/), scarlet-shadow.webp

### Character Background Images (`src/assets/images/`)
- kaaru-mining-facilities.webp, obsidian-peaks-concept.webp
- ellyndor-gauntlet.webp (in courses/), solarae-temple.webp
- nakrozel-concept-2.webp, xanara-concept-2.webp, valendor-factory.webp
- phobetra-concept-2.webp, mytheann-nebula.webp (in courses/)
- korravan-concept-2.webp, oryxxon-concept-5.webp, planet-outland-belt.webp

### Course Images (`src/assets/images/courses/`)
- kaaru-desert.webp, korravan-circuit.webp, solarae-ancient-temple.webp
- valendor-robot-factory.webp, xanara-waterways.webp, mytheann-nebula.webp
- oryxxon-skyway.webp, quinox-prime-battleground.webp, ellyndor-gauntlet.webp
- veltora-volcano.webp

### Databank Images (`src/assets/images/databank/`)
49 article images for all databank entries

## Technical Implementation Notes

### Dynamic Image Loading

The project uses Vite's `import.meta.glob` for dynamic image imports:

```javascript
// Example from CharacterDetailPage.vue
const characterImages = import.meta.glob('@/assets/images/characters/*.webp', { eager: true })
const mainImages = import.meta.glob('@/assets/images/*.webp', { eager: true })
const databankImages = import.meta.glob('@/assets/images/databank/*.webp', { eager: true })
const coursesImages = import.meta.glob('@/assets/images/courses/*.webp', { eager: true })
```

Images are loaded from multiple folders with fallback:
```javascript
const getImage = (filename) => {
  // Check main images folder first
  const mainPath = `/src/assets/images/${filename}`
  if (mainImages[mainPath]?.default) return mainImages[mainPath].default
  // Then check databank folder
  const databankPath = `/src/assets/images/databank/${filename}`
  if (databankImages[databankPath]?.default) return databankImages[databankPath].default
  // Then check courses folder
  const coursesPath = `/src/assets/images/courses/${filename}`
  if (coursesImages[coursesPath]?.default) return coursesImages[coursesPath].default
  return ''
}
```

### CSS Background Images

Hero sections use CSS custom properties for backgrounds:
```vue
<section
  class="racer-intro cc-sct cc-ovrl"
  :style="{ '--background-image': `url(${getImage(character.backgroundImage)})` }"
>
```

## Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## What Still Needs to Be Done

### Content Verification
- [ ] Verify all character bios match original site exactly
- [ ] Verify all databank article content matches original
- [ ] Verify course details match original
- [ ] Verify blog posts match original

### Styling
- [ ] Compare styling with original site for pixel-perfect match
- [ ] Verify responsive design matches original
- [ ] Check hover effects and animations
- [ ] Verify navigation menu styling

### Functionality
- [ ] Test all navigation links
- [ ] Test character prev/next navigation
- [ ] Test databank category filtering
- [ ] Verify all images load correctly

### Missing Features (if any on original site)
- [ ] Check for any interactive features on original site
- [ ] Check for any animations/transitions
- [ ] Check for any forms or user interactions

## How to Continue Work

1. Run `npm run dev` to start the development server
2. Compare each page with the original site (use Wayback Machine if site is down: `https://web.archive.org/web/2024/https://www.etherracingleague.com/`)
3. Use browser dev tools to inspect original site styling
4. Update Vue components and CSS to match

## Fetching Original Site Data

The original site may redirect. Use Wayback Machine for reference:
```bash
# Example: Get character page background
curl -sL "https://web.archive.org/web/2024/https://www.etherracingleague.com/character/blu-zaremi/" | grep -oE 'background-image:url\([^)]+\)'
```

## Notes

- Original site saved to `/Users/luissantander/Repos/etherracingleague.com/original-site/`
- CSS files in `original-site/css/` contain original styling
- HTML files in `original-site/html/` contain page structure examples
- The site uses the "Rajdhani" and "Oswald" fonts from Google Fonts
