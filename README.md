# JoJo's Bizarre Chronology

> **An interactive timeline microsite covering 100,000+ years of JoJo's Bizarre Adventure history across two universes.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Build Tools](https://img.shields.io/badge/Build_Tools-None_Required-green)

---

## 🚀 10 Minutes to Deployment

This project demonstrates a **rapid prototyping methodology** for creating rich, interactive web experiences with AI assistance. From concept to deployed microsite in under 10 minutes.

### The Process

```
Deep Research → Grounding.md → AI-Assisted Development → Inline HTML5 Microsite
```

---

## 🔬 The Grounding Document Technique

### What is a Grounding Document?

A **Grounding Document** (`grounding.md`) is a comprehensive markdown file containing all the factual information, data structures, and content that will power your application. It serves as the "single source of truth" that AI assistants can reference to generate accurate, complete code.

### Why This Works

| Traditional Approach | Grounding Document Approach |
|---------------------|----------------------------|
| Multiple API calls for research | One-time deep research phase |
| Scattered notes and sources | Single authoritative document |
| Context lost between sessions | Persistent, reusable knowledge base |
| AI hallucinations from incomplete data | AI grounded in verified facts |
| Hours of back-and-forth | Minutes to working prototype |

### The Three-Phase Workflow

#### Phase 1: Deep Research 📚
Compile comprehensive information into a structured markdown document:
- Chronological data and timelines
- Character information and relationships
- Key events with dates and details
- Cross-references and connections
- Canon status and source verification

**Example from this project:**
```markdown
# The Complete Joestar Bloodline Timeline

## Part 1: Phantom Blood (1868-1889)
### April 4, 1868
- **Jonathan Joestar born** to George Joestar I and Mary Joestar
- Location: Joestar Mansion, Liverpool, England
...
```

#### Phase 2: AI-Assisted Generation 🤖
With the grounding document as context, instruct AI to:
1. Analyze the data structure
2. Design appropriate UI components
3. Generate semantic HTML
4. Create styled CSS with theming
5. Implement interactive JavaScript

**Key instruction pattern:**
```
"Using the grounding document [filename], create a [type of site]
that displays [specific features] with [visual style]"
```

#### Phase 3: Inline HTML5 Microsite 📦
Output is a self-contained, deployment-ready site:
- **No build tools** required
- **No npm/node** dependencies
- **No framework overhead**
- Pure HTML5 + CSS3 + Vanilla JS
- Open `index.html` and it works

---

## 🎨 Features

### Visual Design
- **Manga/Anime Aesthetic** - Bold colors, halftone patterns, speed lines
- **Part-Specific Theming** - Each JoJo part has unique color identity
- **Menacing Effects** - Animated ゴゴゴ (gogogo) Japanese text
- **Responsive Layout** - Mobile-first, scales to desktop

### Navigation
- **Universe Toggle** - Switch between Original (Parts 1-6) and Steel Ball Run (Parts 7-9)
- **Sticky Navigation** - Always-accessible part links
- **Progress Indicator** - Visual scroll progress with current year display
- **Deep Linking** - URL hash navigation to any part or event

### Content
- **100+ Timeline Events** - From prehistoric Pillar Men to modern JoJoLands
- **Expandable Cards** - Click to reveal detailed information
- **Character Tags** - Visual markers for people, items, locations
- **Reference System** - Cross-linked information architecture

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Reduced motion support
- Skip links

---

## 📁 Project Structure

```
jojo-historu/
├── index.html                 # Main application (semantic HTML)
├── styles.css                 # Design system (CSS custom properties)
├── script.js                  # Interactivity (vanilla JS module)
├── data/
│   └── timeline-data.js       # Structured event data
├── joestar-timeline-grounding.md  # Source grounding document
└── README.md
```

---

## 🛠️ Quick Start

### View Locally
```bash
# Clone the repository
git clone https://github.com/MushroomFleet/JoJos-bizarre-chronology.git

# Open in browser (no server required)
open index.html
# or
start index.html  # Windows
```

### Deploy Anywhere
This is static HTML - deploy to any hosting:
- GitHub Pages
- Netlify (drag & drop)
- Vercel
- Any web server

---

## 🔄 Replicating This Workflow

### For Your Own Projects

1. **Choose Your Subject**
   - Pick a topic with rich, structured data
   - Examples: game lore, historical events, product catalogs, documentation

2. **Create Grounding Document**
   ```markdown
   # [Topic] Complete Reference

   ## Section 1: [Category]
   ### [Date/ID]: [Event/Item Name]
   - Key fact 1
   - Key fact 2
   - Related: [cross-references]
   ```

3. **Prompt AI Assistant**
   ```
   Using [grounding-document.md], create an interactive
   [timeline/catalog/dashboard] with:
   - [Navigation style]
   - [Visual aesthetic]
   - [Key features]

   Output as vanilla HTML/CSS/JS with no build dependencies.
   ```

4. **Iterate and Deploy**
   - Review generated code
   - Request refinements
   - Deploy immediately

### Best Practices

- **Be Comprehensive**: More detail in grounding = better output
- **Structure Consistently**: Use repeating patterns for similar data
- **Include Metadata**: Dates, categories, relationships, tags
- **Verify Sources**: AI can only be as accurate as your grounding document
- **Specify Constraints**: "No build tools", "vanilla JS", "single HTML file"

---

## 🎯 Why This Approach?

### Speed
- Research once, generate infinitely
- 10 minutes from concept to deployment
- No environment setup required

### Quality
- AI grounded in verified facts
- Consistent data structure
- Rich, complete content

### Flexibility
- Change visual style with new prompts
- Add features incrementally
- Repurpose grounding for other formats

### Accessibility
- No coding expertise required to start
- Learn by examining generated code
- Progressively enhance as skills grow

---

## 📊 Technical Specifications

| Aspect | Implementation |
|--------|---------------|
| **Markup** | Semantic HTML5 |
| **Styling** | CSS3 with Custom Properties |
| **Scripting** | Vanilla ES6+ JavaScript |
| **Fonts** | Google Fonts (Bebas Neue, Oswald, Roboto) |
| **Icons** | Unicode symbols |
| **Build** | None required |
| **Dependencies** | Zero |
| **Browser Support** | Modern browsers (ES6+) |

---

## 📚 Citation

### Academic Citation

If you use this codebase in your research or project, please cite:

```bibtex
@software{jojos_bizarre_chronology,
  title = {JoJo's Bizarre Chronology: Interactive Timeline Microsite},
  author = {Drift Johnson},
  year = {2025},
  url = {https://github.com/MushroomFleet/JoJos-bizarre-chronology},
  version = {1.0.0}
}
```

### Donate:

[![Ko-Fi](https://cdn.ko-fi.com/cdn/kofi3.png?v=3)](https://ko-fi.com/driftjohnson)

---

## 📜 License

This project is a fan work. JoJo's Bizarre Adventure is created by Hirohiko Araki and published by Shueisha.

Timeline content represents manga canon interpretation for educational and fan purposes.
