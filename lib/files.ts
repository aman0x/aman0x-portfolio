export interface FileContent {
  name: string;
  content: string;
  language: string;
}

export const files: Record<string, FileContent> = {
  'about.md': {
    name: 'about.md',
    language: 'md',
    content: `# Aman Singh Chandel

## About Me

I'm a **technology leader** with 11+ years of experience building and scaling
commercially successful products from the ground up.

### What I Do

- **Full-Stack Development**: React, Next.js, Vue.js, Django, Flask, Node.js
- **Backend Systems**: API design, microservices, distributed systems
- **Data Platforms**: DLT pipelines, MLflow, Apache Superset, LakeFS
- **3D & AI/ML**: Blender integration, Three.js, computer vision

### Current Focus

Building **ModelCraft V3** - an AI-powered 3D design platform featuring:
- AI detection of architectural elements from floor plans
- Real-time Blender ↔ Three.js synchronization
- 2D/3D editing capabilities
- Production-quality rendering

### Philosophy

I believe in building products that are:
- **Scalable** from day one
- **User-centric** in design
- **Maintainable** for the long term

> "Code is poetry, architecture is the canvas."
`,
  },

  'experience.json': {
    name: 'experience.json',
    language: 'json',
    content: `{
  "professional_experience": [
    {
      "role": "Senior Full Stack Engineer",
      "company": "Cloudastra",
      "location": "Noida, UP",
      "period": "Nov 2023 - Present",
      "highlights": [
        "Key Ward - AI-Ready Engineering Data Platform",
        "Multi-tenant DLT pipelines with custom transformers",
        "MLflow integration for ML experiment tracking",
        "Apache Superset custom plugins"
      ]
    },
    {
      "role": "VP Technology",
      "company": "Siloho",
      "location": "Panjim, Goa",
      "period": "Sep 2021 - Oct 2023",
      "highlights": [
        "Built 12+ member engineering team",
        "AI-powered interior design platform",
        "Blender/Unity real-time 3D rendering",
        "Vue.js + Django architecture"
      ]
    },
    {
      "role": "VP Technology",
      "company": "ftcash",
      "location": "Mumbai",
      "period": "Oct 2019 - Sep 2021",
      "highlights": [
        "Scaled team to 40+ engineers",
        "Digital payments & lending platform",
        "Payment gateway integrations",
        "Loan management system"
      ]
    },
    {
      "role": "Senior Software Developer",
      "company": "Eros Now",
      "location": "Mumbai",
      "period": "Nov 2018 - Oct 2019",
      "highlights": [
        "OTT video streaming platform",
        "PHP to Python migration",
        "RabbitMQ + MongoDB architecture"
      ]
    },
    {
      "role": "Senior Software Engineer",
      "company": "Mswipe Technologies",
      "location": "Mumbai",
      "period": "Jan 2016 - Oct 2018",
      "highlights": [
        "POS solutions for enterprise clients",
        "Offline transaction processing",
        "Airline clients: CCD, Vistara, Jet Airways"
      ]
    }
  ]
}`,
  },

  'skills.json': {
    name: 'skills.json',
    language: 'json',
    content: `{
  "languages": ["Python", "TypeScript", "JavaScript", "PHP", "SQL"],
  "frontend": {
    "frameworks": ["React", "Next.js", "Vue.js"],
    "styling": ["Tailwind CSS", "CSS3", "SASS"],
    "visualization": ["ECharts", "D3.js", "Three.js", "Babylon.js"]
  },
  "backend": {
    "frameworks": ["Django", "Flask", "Node.js", "Express"],
    "databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "search": ["Elasticsearch"]
  },
  "data_engineering": {
    "tools": ["Apache Superset", "MLflow", "Airbyte", "LakeFS"],
    "processing": ["Apache Spark", "DLT", "Temporal.io", "Celery"]
  },
  "devops": {
    "cloud": ["GKE", "AWS", "Cloud Run"],
    "containers": ["Docker", "Kubernetes", "Helm"],
    "ci_cd": ["ArgoCD", "GitHub Actions"]
  },
  "tools": ["Git", "Jira", "SonarQube", "Keycloak", "Blender"]
}`,
  },

  'projects/saarathi.md': {
    name: 'projects/saarathi.md',
    language: 'md',
    content: `# Saarathi Finance (Inclue)

## Overview

Digital lending platform for an NBFC serving MSMEs (Micro, Small & Medium Enterprises).
Built end-to-end backend and frontend components for streamlined loan processing.

## Key Features

### Credit Bureau Integration
- **CIBIL** - Credit score and report fetching
- **Experian** - Alternative credit data
- **CRIF High Mark** - Additional credit insights

### Loan Management
- Application processing workflow
- Document verification system
- KYC integration (Aadhaar, PAN)
- E-signature integration

### Technical Architecture

\`\`\`
┌─────────────────┐     ┌──────────────────┐
│   React Admin   │────▶│   Django REST    │
│    Dashboard    │     │      API         │
└─────────────────┘     └────────┬─────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        ▼                        ▼                        ▼
┌───────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   Temporal.io │      │   PostgreSQL    │      │    Keycloak     │
│   Workflows   │      │    Database     │      │   Auth Server   │
└───────────────┘      └─────────────────┘      └─────────────────┘
\`\`\`

## Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | React, TypeScript             |
| Backend    | Django, Django REST Framework |
| Database   | PostgreSQL                    |
| Workflows  | Temporal.io                   |
| Auth       | Keycloak                      |
| Queue      | Celery + Redis                |

## Impact

- Processed **500+** loan applications monthly
- Reduced processing time by **60%**
- Automated credit bureau checks
- Streamlined MSME lending workflow
`,
  },

  'projects/wiseyatra.md': {
    name: 'projects/wiseyatra.md',
    language: 'md',
    content: `# WiseYatra - Travel Booking Platform

## Overview

Comprehensive travel booking platform covering flights, hotels, transfers,
and activities. Built the complete frontend application with modern React stack.

## Features

### Flight Booking
- Multi-city search
- Fare comparison
- Seat selection
- Baggage add-ons

### Hotel Reservations
- Real-time availability
- Photo galleries
- Room comparisons
- Guest reviews integration

### Transfers & Activities
- Airport transfers
- Local experiences
- Tour packages
- Activity booking

## Technical Implementation

### Frontend Architecture

\`\`\`
src/
├── components/
│   ├── flights/
│   ├── hotels/
│   ├── transfers/
│   └── common/
├── store/
│   └── zustand/
├── hooks/
├── utils/
└── pages/
\`\`\`

### State Management

Using **Zustand** for lightweight, performant state management:

\`\`\`typescript
interface BookingStore {
  flights: Flight[];
  hotels: Hotel[];
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  checkout: () => Promise<void>;
}
\`\`\`

### Maps Integration

- **Google Maps API** for location services
- Interactive hotel maps
- Transfer route visualization
- Nearby attractions

## Tech Stack

| Technology    | Purpose                    |
|---------------|----------------------------|
| Next.js       | React framework, SSR       |
| TypeScript    | Type safety                |
| Tailwind CSS  | Styling                    |
| Zustand       | State management           |
| Google Maps   | Location services          |
| React Query   | Data fetching              |

## Performance Optimizations

- **Code splitting** for faster initial load
- **Image optimization** with Next.js Image
- **SSR/SSG** for SEO and performance
- **Lazy loading** for below-fold content

## Screenshots

> Travel booking interface with modern, clean design
> Responsive across all device sizes
`,
  },

  'projects/modelcraft.md': {
    name: 'projects/modelcraft.md',
    language: 'md',
    content: `# ModelCraft V3

## AI-Powered 3D Design Platform

An innovative platform for creating 3D interior designs from 2D floor plans
using AI and real-time rendering technologies.

## Core Features

### AI Floor Plan Detection
- Automatic wall detection
- Room identification
- Door/window recognition
- Furniture placement suggestions

### Real-Time 3D Rendering
- Blender ↔ Three.js synchronization
- Live material editing
- Dynamic lighting
- Camera path animations

### Design Tools
- 2D plan editing
- 3D object manipulation
- Material library
- Asset management

## Architecture

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React)                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  2D Editor  │  │  3D Viewer  │  │  Asset Manager  │  │
│  │  (Canvas)   │  │  (Three.js) │  │                 │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└────────────────────────┬────────────────────────────────┘
                         │ WebSocket
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  Backend (Python/Flask)                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  AI Models  │  │  Blender    │  │  Asset Storage  │  │
│  │  (CV/ML)    │  │  Server     │  │  (S3/GCS)       │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
\`\`\`

## GitHub Stats

⭐ **17 stars** on GitHub
🔗 github.com/aman0x/modelcraft

## Tech Stack

- **Frontend**: React, Three.js, TypeScript
- **Backend**: Python, Flask
- **3D Engine**: Blender (headless)
- **AI/ML**: TensorFlow, OpenCV
- **Real-time**: WebSocket
`,
  },

  'contact.md': {
    name: 'contact.md',
    language: 'md',
    content: `# Contact Information

## Get In Touch

I'm always open to discussing new opportunities, interesting projects,
or just having a chat about technology.

## Direct Contact

- **Email**: amanchandel4@gmail.com
- **Phone**: +91 7905400369
- **Location**: Delhi, India

## Online Presence

- **GitHub**: https://github.com/aman0x
- **LinkedIn**: https://linkedin.com/in/aman0x
- **Website**: https://aman0x.com

## Availability

✅ **Open to opportunities**

I'm currently exploring:
- VP/Director of Engineering roles
- Technical Co-founder opportunities
- Consulting for AI/ML and 3D projects
- Advisory positions for startups

## Response Time

I typically respond within **24-48 hours**.

---

> "Let's build something amazing together."
`,
  },

  'README.md': {
    name: 'README.md',
    language: 'md',
    content: `# aman0x

> VP, Technology | Full Stack Engineer | 11+ Years Experience

## Quick Start

\`\`\`bash
$ help          # List all commands
$ about         # About me
$ experience    # Work history
$ skills        # Technical skills
$ projects      # Notable projects
$ contact       # Get in touch
\`\`\`

## View Files

\`\`\`bash
$ cat about.md
$ cat experience.json
$ cat projects/saarathi.md
$ cat projects/wiseyatra.md
$ ls projects/
\`\`\`

## Easter Eggs

Try these commands:
- \`neofetch\`
- \`sudo hire-me\`
- \`matrix\`

## Tech Stack

This portfolio is built with:
- Next.js 14
- TypeScript
- Tailwind CSS
- Terminal UI

---

Made with ☕ by Aman Singh Chandel
`,
  },
};

export const fileList = Object.keys(files);

export function getFile(path: string): FileContent | null {
  const normalized = path.replace(/^\.\//, '').replace(/^\//, '');
  return files[normalized] || null;
}

export function listDirectory(path: string): string[] {
  const normalized = path.replace(/^\.\//, '').replace(/^\//, '').replace(/\/$/, '');

  if (normalized === '' || normalized === '~' || normalized === '.') {
    const items = new Set<string>();
    Object.keys(files).forEach(f => {
      const parts = f.split('/');
      items.add(parts[0] + (parts.length > 1 ? '/' : ''));
    });
    return Array.from(items);
  }

  if (normalized === 'projects') {
    return Object.keys(files)
      .filter(f => f.startsWith('projects/'))
      .map(f => f.replace('projects/', ''));
  }

  return [];
}
