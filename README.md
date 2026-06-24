# Space-Themed Portfolio Application

![Space Portfolio](https://placehold.co/800x400?text=Space+Portfolio)

## Project Overview

This is a modern, responsive portfolio website with a space-inspired design theme built using Next.js, React, and Tailwind CSS. The application features smooth parallax effects, animated star backgrounds, and a clean, professional UI designed to showcase the professional experience and technical expertise of Andrei Prado, a Technical Lead with 10+ years of experience in web development, cloud architecture, and team leadership.

## Features

- 🚀 **Space Theme**: Custom dark color scheme with space-inspired visuals and animations
- ✨ **Star Background Animation**: Dynamic animated starfield that adjusts to the browser window
- 📱 **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- 🔄 **Parallax Effects**: Smooth scrolling parallax sections for enhanced visual depth
- 🧩 **Component-Based Architecture**: Modular, reusable components for consistent styling
- 📝 **Content-Rich Pages**: Dedicated sections for projects, experience, about, and contact
- 🌗 **Custom UI Components**: Project cards, experience timeline, and contact form

## Tech Stack

- **Framework**: [Next.js 15.5.14](https://nextjs.org/) with App Router
- **UI Library**: [React 19.0.0](https://react.dev/) (Release Candidate)
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/)
- **TypeScript**: Type-safe development
- **Animations**: Custom CSS animations and component-based effects
- **Build Tool**: Turbopack

## Project Structure

```
portifolio-app/
├── public/             # Static assets
├── src/
│   ├── app/           # App Router pages and layout
│   │   ├── components/  # Reusable UI components
│   │   │   ├── ExperienceCard.tsx
│   │   │   ├── ParallaxSection.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── StarBackground.tsx
│   │   │   └── ... 
│   │   ├── contato/      # Contact page
│   │   ├── experiencia/  # Experience page
│   │   ├── projetos/     # Projects page
│   │   ├── sobre/        # About page
│   │   ├── fonts/        # Custom font config
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
├── tailwind.config.ts   # Tailwind CSS configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Key Components

### StarBackground

Creates an animated starfield canvas that fills the background of the application, with twinkling stars that respond to browser resize events.

### ParallaxSection

Provides depth through parallax scrolling effects. Sections move at different speeds when scrolling to create an immersive experience.

### ProjectCard & ExperienceCard

Standardized components for displaying project details and work experience with consistent styling.

## Pages

- **Home**: Landing page with hero section and introduction
- **About**: Personal information and background
- **Experience**: Work history and skills
- **Projects**: Portfolio of completed projects with details
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd portifolio-app

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Customization

### Color Theme

The space theme colors are defined in `tailwind.config.ts` and can be adjusted to match your preferences.

### Content

Update the content in the page files to personalize with your information:

- `src/app/page.tsx`: Home page content
- `src/app/sobre/page.tsx`: About page content
- `src/app/experiencia/page.tsx`: Experience details
- `src/app/projetos/page.tsx`: Project showcases
- `src/app/contato/page.tsx`: Contact information

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com), but can be deployed to any platform that supports Next.js applications.

```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build
```

## License

This project is open-source and available under the MIT License.

## Acknowledgements

- Next.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- React team for the UI library
