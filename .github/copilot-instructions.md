# Copilot Instructions for Franni Card Art Website

## Project Overview

Franni Card Art is a portfolio website for card art work, deployed as a GitHub Pages site. It's a static site combining vanilla HTML/CSS/JavaScript with Tailwind CSS for styling.

**Repository:** `franziska-haaf.github.io` (GitHub Pages auto-deployment enabled via CNAME)

## Architecture & Key Components

### Project Structure
- **`src/index.html`** - Main landing page with navigation and layout foundation
- **`src/style.css`** - Empty placeholder; actual styles come from generated Tailwind output
- **`src/output.css`** - Generated Tailwind CSS file (222 lines, auto-generated via watch task)
- **`src/methods.js`** - Empty placeholder for future JavaScript functionality
- **`src/public/images/`** - Image assets organized by section (about-me/, altering/, progress-images/)
- **`CNAME`** - GitHub Pages custom domain configuration

### Styling Architecture

**Tailwind CSS v4.1.18** is the primary styling system:
- Configuration uses Tailwind's default theme with custom variables
- Font: Inter (variable font) loaded from rsms.me CDN
- Uses layer-based architecture: theme, base, components, utilities
- Custom CSS variables: `--font-sans`, `--font-mono`, `--text-3xl`, `--font-weight-bold`

**Current Usage Pattern:**
- HTML uses Tailwind utility classes directly (e.g., `text-3xl`, `font-bold`, `underline`)
- `style.css` is currently unused (only contains empty `* {}` selector)
- All output generated in `output.css`

## Developer Workflows

### Build/Watch Process

**Tailwind CSS Compilation (Active):**
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
- Watches input file changes and auto-compiles to `output.css`
- Terminal: `node` session (note: previous exit code 130 = interrupted via Ctrl+C)
- **Important:** This must remain running during development for live style updates

**First-Time Setup:**
- Install Tailwind CLI if needed: `npm install -D @tailwindcss/cli @tailwindcss/postcss`
- Ensure `src/input.css` exists (should contain Tailwind directives: `@import "tailwindcss"`)

### File Structure Pattern

No build step beyond Tailwind compilation—HTML and JavaScript are served as-is to GitHub Pages.

## Coding Conventions & Patterns

### HTML Structure
- **Navigation:** Spans within `<header><nav>` with inline `.active` class for current page
- **Buttons:** Use `onclick` event handlers (inline, not event listeners yet)
- **TODO Comments:** File search shows `<!-- todo dieser button ist null beschrieben-->` - indicates incomplete descriptions in button markup
- **Language:** Meta `lang="english"` attribute set in `<html>` tag

### Styling Classes
- Prefer Tailwind utility classes in HTML over custom CSS
- Font sizes: `text-3xl` for headings
- Font weights: `font-bold` for emphasis
- Text layout: `centered-text`, `label-large` (likely custom utility or planned additions)
- Navigation: `.nav-closed` class suggests collapsible menu state management (not yet implemented in `methods.js`)

### JavaScript
- `methods.js` is currently empty—reserved for future interactivity
- Event handlers use inline `onclick` attributes (no delegation yet)
- Back-to-top button structure exists but uses `.hidden` utility (functionality not yet implemented)

## External Dependencies & Integration

### CDN Resources
- **Font:** Inter Variable Font from `https://rsms.me/inter/inter.css`
- **Styling:** Tailwind CSS v4.1.18 (compiled locally)

### GitHub Integration
- Custom domain via CNAME: Maps to `franziska-haaf.github.io`
- Static deployment—no server-side processing

## Known Issues & WIP Sections

1. **Empty Functionality:**
   - `methods.js` has no implementations—back-to-top button visible but non-functional
   - Navigation menu has `.nav-closed` state but toggle logic missing

2. **Incomplete Content:**
   - TODO comment on back-to-top button: "dieser button ist null beschrieben" (this button is not described)
   - Main heading text is placeholder: "Title"
   - Button text is placeholder: "Button"

3. **Unused CSS:**
   - `style.css` is imported but empty; consolidate into Tailwind workflow

## Recommendations for Contributors

- **Styling:** Always use Tailwind utility classes; avoid adding rules to `style.css`
- **Images:** Place assets in `src/public/images/` organized by feature/section
- **JavaScript:** Add implementations to `methods.js` with proper event delegation when interactivity needed
- **Build:** Keep Tailwind watch task running in separate terminal during development
- **Documentation:** Replace placeholder text and complete TODO comments before merging PRs

## Quick Reference: Common Tasks

| Task | File | Notes |
|------|------|-------|
| Add a new page | Create `.html` in `src/` | Link from navigation in all pages |
| Add styling | Modify `.html`, use Tailwind classes | No need to edit `style.css` or `output.css` |
| Add interactivity | Edit `methods.js` | Link functions in HTML `onX` attributes |
| Add images | Place in `src/public/images/` + organize | Reference in HTML with relative paths |
| Deploy | Auto via Git push | GitHub Pages reads `src/` folder |
