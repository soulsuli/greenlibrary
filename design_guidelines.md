# Design Guidelines: المكتبة الخضراء (Green Plant Library)

## Design Approach

**Reference-Based Hybrid:** Drawing inspiration from Airbnb's photography-forward cards + Notion's clean information hierarchy. This plant care library needs visual richness to showcase plants while maintaining excellent Arabic RTL readability and educational clarity.

**Core Principles:**
- Nature-first visual language with authentic plant photography
- Clear information hierarchy for care instructions
- Welcoming, accessible design that encourages plant care learning
- RTL-optimized layouts with proper Arabic typography flow

## Typography

**Font Selection:** Use Google Fonts Arabic-optimized typefaces
- **Primary:** 'Tajawal' for body text and UI (highly readable, modern Arabic font)
- **Display:** 'Cairo' for headers and emphasis (bold, friendly character)

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Subsections: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Small Text: text-sm

**RTL Considerations:** All text alignment set to `text-right`, proper Arabic letter spacing, generous line-height (1.8-2.0) for readability

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Component padding: p-4 to p-8
- Section spacing: py-12 md:py-20 lg:py-24
- Card gaps: gap-6 md:gap-8
- Container max-width: max-w-7xl

**Grid System:**
- Plant cards: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Featured plants: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Care detail sections: Single column max-w-3xl for reading comfort

## Component Library

**Navigation:**
- Fixed RTL header with logo right-aligned, navigation items left-aligned
- Search bar prominently centered
- Mobile: Hamburger menu on left side (RTL reversed)

**Hero Section:**
- Full-width image background with large plant photography
- Centered Arabic headline overlaid with semi-transparent backdrop-blur panel
- Primary CTA button with blurred background treatment
- Subtitle: "اهتم بنبتتك، واكتشف كيف تصنع فرقًا!"

**Plant Cards (Circular Menu Evolution):**
- Upgrade circular design to rounded-2xl cards with image backgrounds
- Each card: Plant photo, Arabic name overlay, hover scale effect
- 2-column mobile, 3-column tablet, 4-column desktop
- Border radius: rounded-2xl, shadow: shadow-md hover:shadow-xl

**Plant Detail Pages:**
- Hero image of the specific plant (full-width, h-96)
- Care information grid: 2-column layout for care attributes (water/light/soil)
- Icon + text pairs for quick reference
- Seasonal care timeline component (horizontal scrolling cards)
- "Common Issues" accordion section

**Care Attribute Cards:**
- Icon-first design with large visual indicators
- Rounded-xl containers with subtle borders
- White background with green accent highlights
- Each card: Icon (large), Label, Description, Tips

**Search & Filter:**
- Sticky search bar with filter chips below
- Filter categories: Water needs, Light requirements, Plant type, Difficulty level
- Active filters shown as dismissible chips

**Footer:**
- Newsletter signup: "احصل على نصائح العناية الشهرية"
- Quick links to plant categories
- Social media icons
- Contact information
- "صُنع بحب للنباتات" tagline

## Images

**Critical Image Placements:**

1. **Hero Section:** Large, inspiring image of a lush indoor garden or hands tending plants (warm, inviting atmosphere). Image should span full viewport width, height: 60-70vh

2. **Plant Cards:** Each of the 16 plants needs authentic photography:
   - Ivy (اللبلاب), Tradescantia (المكحلة), Basil (الريحان), Tomato (البندورة), etc.
   - Images should be close-up shots showing plant details
   - Square aspect ratio (1:1) or slightly vertical (4:5)
   - Natural lighting, green backgrounds preferred

3. **Plant Detail Hero:** Individual hero image for each plant variety (landscape format, 16:9 or 2:1)

4. **Care Guide Icons:** Use Heroicons for care attributes (water drop, sun, thermometer, calendar)

5. **Background Accents:** Subtle botanical line drawings or watercolor textures for section dividers

**Image Treatment:** All plant photography should feel bright, natural, and optimistic. Avoid overly processed or dark imagery. Use high-quality photos that showcase plant health and beauty.