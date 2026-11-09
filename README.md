# Academic & Professional ePortfolio

A complete, modern, responsive ePortfolio built with **Next.js 16 App Router**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
cd eportfolio
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## ✏️ How to Personalise Your Portfolio

All content is managed from a single folder: **`/data/`**

| File | What to edit |
|------|-------------|
| `data/profile.ts` | Your name, title, email, LinkedIn, GitHub, summary, values, strengths |
| `data/education.ts` | Degrees, universities, courses, certifications |
| `data/experience.ts` | Internships, jobs, projects |
| `data/skills.ts` | All skill categories and individual skills |
| `data/goals.ts` | Career goals, target roles, professional vision |
| `data/documents.ts` | All PPP documents + oral presentation |

Search for `[YOUR` in any file to find every placeholder that needs replacing.

---

## 📁 How to Add Documents (PPP Career Project)

### Step 1 — Add your file
Place your file inside:
```
/public/documents/your-file.pdf
```

### Step 2 — Register it in the config
Open `data/documents.ts` and update the matching entry:

```ts
{
  id: "cv-1",
  title: "Current Professional CV",
  category: "CV",
  description: "My updated professional curriculum vitae.",
  file: "/documents/your-cv.pdf",   // ← add this line
  format: "PDF",
  date: "November 2025",
  language: "English",
  featured: true,
}
```

### Step 3 — Save
The document will immediately appear in the PPP Document Library with Preview and Download buttons.

---

## 🎤 Oral Examination Presentation

To add your PowerPoint presentation:

1. Place your `.pptx` file in `/public/documents/`
2. Export a PDF version and place it in `/public/documents/` as well
3. Optionally add a thumbnail image to `/public/images/presentation-thumbnail.png`
4. Edit `data/documents.ts` — find `oralPresentation` at the bottom:

```ts
export const oralPresentation = {
  title: "My PPP Presentation",
  subtitle: "PPP Oral Examination Presentation",
  description: "A summary of my personal and professional project...",
  slideCount: 8,
  file: "/documents/PPP_Presentation_YourName.pptx",
  pdfPreview: "/documents/PPP_Presentation_YourName_Preview.pdf",
  thumbnail: "/images/presentation-thumbnail.png",
  date: "November 2025",
};
```

---

## 🖼️ How to Add Your Profile Photo

1. Save your photo as `/public/images/profile.jpg`
2. Open `components/sections/Hero.tsx`
3. Replace the placeholder `<div>` inside the photo frame with:

```tsx
<img
  src="/images/profile.jpg"
  alt="[Your Name]"
  className="w-full h-full object-cover"
/>
```

---

## 📂 Project Structure

```
eportfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page — all sections assembled
│   └── globals.css         # Global styles, Tailwind theme tokens
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with active section highlight
│   │   └── Footer.tsx      # Footer with contact links
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # Landing / introduction
│   │   ├── About.tsx       # About me
│   │   ├── Education.tsx   # Academic background + timeline
│   │   ├── Skills.tsx      # Skills & competencies
│   │   ├── Experience.tsx  # Professional experience
│   │   ├── PPPProject.tsx  # PPP Career Project (main section)
│   │   ├── CareerGoals.tsx # Career roadmap
│   │   ├── Reflection.tsx  # Personal development
│   │   └── Contact.tsx     # Contact form
│   │
│   ├── ppp/
│   │   ├── DocumentLibrary.tsx   # Searchable document grid
│   │   ├── DocumentCard.tsx      # Individual document card
│   │   ├── DocumentFilters.tsx   # Search + category filters
│   │   └── PresentationCard.tsx  # Oral presentation card
│   │
│   └── ui/
│       ├── Badge.tsx        # Reusable badge
│       ├── Button.tsx       # Reusable button
│       ├── Card.tsx         # Reusable card
│       └── SectionHeader.tsx # Animated section heading
│
├── data/
│   ├── profile.ts          # Personal info
│   ├── education.ts        # Education data
│   ├── experience.ts       # Experience data
│   ├── skills.ts           # Skills data
│   ├── goals.ts            # Career goals data
│   └── documents.ts        # All PPP documents config
│
├── lib/
│   └── utils.ts            # Utility functions (cn)
│
└── public/
    ├── images/             # Profile photo, presentation thumbnail
    └── documents/          # Your PDFs, DOCX, PPTX files
```

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Navy | `#14213D` |
| Off-white | `#F8F9FC` |
| Accent | `#5B7CFA` |
| Font | Inter (Google Fonts) |

To change the color scheme, edit the `@theme` block in `app/globals.css`.

---

## ✅ Sections Checklist

- [x] Home / Hero with floating badges and CTA buttons
- [x] About Me with values, strengths, and cards
- [x] Academic Background — animated timeline with courses
- [x] Skills & Competencies — categorized skill cards
- [x] Professional Experience — detailed expandable cards
- [x] **PPP Career Project** — document library, filters, search, download
- [x] Oral Examination Presentation card with preview/download
- [x] Career Goals — short/medium/long-term roadmap
- [x] Reflection & Personal Development
- [x] Contact form with validation
- [x] Sticky responsive Navbar
- [x] Professional Footer
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Smooth Framer Motion animations

---

## 📦 Technologies

- [Next.js 16](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
