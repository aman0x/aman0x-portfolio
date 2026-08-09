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
## VP of Technology | Engineering Leader

11+ years building and scaling commercially successful products from scratch.
Expert in full-stack development, backend systems, and API integrations.

### Core Competencies
- **Technical Leadership**: Built and led teams of 40+ engineers
- **Architecture Design**: Multi-tenant platforms, microservices, distributed systems
- **Product Development**: End-to-end product lifecycle management
- **AI/ML Integration**: MLflow, computer vision, 3D rendering pipelines

### Industries
FinTech • EdTech • Travel Tech • Interior Design • OTT Streaming • E-commerce

### Education
B.E. Information Technology - Kanpur Institute of Technology (2013)
`,
  },

  'experience.json': {
    name: 'experience.json',
    language: 'json',
    content: `{
  "experience": [
    {
      "role": "Senior Full Stack Engineer",
      "company": "Cloudastra Technologies",
      "period": "Nov 2023 - Present",
      "location": "Noida",
      "projects": [
        {
          "name": "Key Ward",
          "desc": "AI-Ready Engineering Data Platform for automotive/aerospace",
          "contributions": [
            "Multi-tenant DLT pipelines with custom transformers",
            "Data versioning with LakeFS",
            "MLflow for experiment tracking",
            "Apache Superset custom React/TS plugins",
            "BFF proxy pattern for security"
          ],
          "stack": ["React", "TypeScript", "Python", "Flask", "Spark", "PostgreSQL", "GKE", "Docker", "MLflow", "LakeFS"]
        },
        {
          "name": "Taffi",
          "desc": "Fashion discovery and stylist-matching app",
          "contributions": ["Led backend/frontend planning", "Team coordination"]
        },
        {
          "name": "Volo Health TPA",
          "desc": "IRDA-licensed health insurance claims platform",
          "contributions": ["Claims status", "Registration workflows", "Grievance handling"]
        },
        {
          "name": "Saarathi Finance",
          "desc": "NBFC digital lending for MSMEs",
          "stack": ["Django", "PostgreSQL", "Temporal.io", "Keycloak"]
        },
        {
          "name": "WiseYatra",
          "desc": "Travel booking platform",
          "stack": ["Next.js", "React", "TypeScript", "Tailwind", "Zustand", "Google Maps"]
        }
      ]
    },
    {
      "role": "VP Technology",
      "company": "Siloho",
      "period": "Sep 2021 - Oct 2023",
      "location": "Goa",
      "highlights": [
        "Defined strategic roadmap for AI-powered interior design platform",
        "Built 12+ member engineering team",
        "Integrated Blender/Unity for real-time 3D renders",
        "Vue.js + Django scalable architecture"
      ],
      "stack": ["Python", "Django", "Vue.js", "PostgreSQL", "Elasticsearch", "Redis", "Blender", "Unity"]
    },
    {
      "role": "VP Technology",
      "company": "ftcash (Nomisma Mobile Solutions)",
      "period": "Oct 2019 - Sep 2021",
      "location": "Mumbai",
      "highlights": [
        "Full product lifecycle for digital payments & lending",
        "Scaled team to 40+ engineers",
        "RESTful billing engine with Razorpay/ICICI integration",
        "Daily-DPD loan management system"
      ]
    },
    {
      "role": "Senior Software Developer",
      "company": "Eros Now",
      "period": "Nov 2018 - Oct 2019",
      "location": "Mumbai",
      "highlights": [
        "OTT video streaming platform",
        "PHP to Python migration",
        "RabbitMQ + MongoDB for bulk transactions"
      ]
    },
    {
      "role": "Senior Software Engineer",
      "company": "Mswipe Technologies",
      "period": "Jan 2016 - Oct 2018",
      "location": "Mumbai",
      "highlights": [
        "Mventry/Mventry Offline POS platform",
        "Enterprise clients: CCD, Vistara, Jet Airways",
        "Offline transaction sync queue system"
      ]
    },
    {
      "role": "Software Engineer",
      "company": "Qtriangle Infotech",
      "period": "Jan 2014 - Jan 2016",
      "location": "Noida",
      "highlights": [
        "E-commerce platforms",
        "Clients: Common Floor, Naaptol, Supporthjelpen"
      ]
    }
  ]
}`,
  },

  'skills.json': {
    name: 'skills.json',
    language: 'json',
    content: `{
  "programming_languages": {
    "expert": ["Python", "TypeScript", "JavaScript"],
    "proficient": ["PHP", "SQL", "Java"],
    "years": "11+"
  },
  "frontend": {
    "frameworks": ["React", "Next.js", "Vue.js"],
    "languages": ["TypeScript", "JavaScript", "HTML5", "CSS3"],
    "styling": ["Tailwind CSS", "SASS", "Styled Components"],
    "visualization": ["ECharts", "D3.js", "Three.js", "Babylon.js"],
    "state": ["Redux", "Zustand", "Vuex"]
  },
  "backend": {
    "frameworks": ["Django", "Flask", "Node.js", "Express"],
    "api": ["REST", "GraphQL", "WebSocket"],
    "auth": ["Keycloak", "OAuth2", "JWT"],
    "queue": ["Celery", "RabbitMQ", "Redis Queue"]
  },
  "databases": {
    "relational": ["PostgreSQL", "MySQL"],
    "nosql": ["MongoDB", "Redis", "Elasticsearch"],
    "data_versioning": ["LakeFS"]
  },
  "data_engineering": {
    "etl": ["Airbyte", "DLT Pipelines", "Apache Spark"],
    "ml_ops": ["MLflow", "Model Registry"],
    "visualization": ["Apache Superset", "Custom Dashboards"],
    "workflow": ["Temporal.io", "Celery", "Airflow"]
  },
  "devops": {
    "cloud": ["GCP (GKE, Cloud Run)", "AWS (EC2, S3, Lambda)"],
    "containers": ["Docker", "Kubernetes", "Helm"],
    "ci_cd": ["ArgoCD", "GitHub Actions", "Jenkins"],
    "monitoring": ["SonarQube", "Prometheus", "Grafana"]
  },
  "3d_graphics": {
    "engines": ["Blender (Python API)", "Unity", "Three.js"],
    "realtime": ["WebSocket sync", "Realityserver"],
    "formats": ["glTF", "FBX", "OBJ"]
  },
  "tools": {
    "version_control": ["Git", "GitHub", "GitLab"],
    "project": ["Jira", "Redmine", "Linear"],
    "communication": ["Slack", "Teams"],
    "design": ["Figma", "Blender"]
  },
  "leadership": {
    "team_size": "40+ engineers",
    "roles": ["VP Technology", "Tech Lead", "Architect"],
    "practices": ["Agile", "Scrum", "Code Reviews", "Mentoring"]
  }
}`,
  },

  'projects/keyward.md': {
    name: 'projects/keyward.md',
    language: 'md',
    content: `# Key Ward - AI-Ready Engineering Data Platform

## Overview
Enterprise data platform for automotive and aerospace sectors.
Facilitates AI-ready data workflows and scalable engineering solutions.

## Core Contributions
- Architected multi-tenant platform with DLT pipelines
- Custom transformers for SQL, REST APIs, Python connectors
- Data versioning with LakeFS for pipeline rollbacks
- MLflow integration for experiment tracking
- Apache Superset custom React/TypeScript plugins
- BFF proxy pattern for credential management

## Architecture
\`\`\`
┌────────────┐    ┌────────────┐    ┌────────────┐
│  Airbyte   │───▶│    DLT     │───▶│   Spark    │
│  Sources   │    │  Pipelines │    │  Process   │
└────────────┘    └────────────┘    └─────┬──────┘
                                          │
     ┌────────────────────────────────────┼─────┐
     ▼                    ▼               ▼     │
┌─────────┐        ┌──────────┐     ┌─────────┐ │
│ LakeFS  │        │  MLflow  │     │Superset │ │
│Version  │        │   Exp    │     │Dashboard│ │
└─────────┘        └──────────┘     └─────────┘ │
                                                │
                        ┌───────────────────────┘
                        ▼
                 ┌────────────┐
                 │    GKE     │
                 │  Cluster   │
                 └────────────┘
\`\`\`

## Tech Stack
React, TypeScript, Python, Flask, Apache Spark, PostgreSQL,
GKE, Docker, MLflow, LakeFS, Airbyte, Apache Superset
`,
  },

  'projects/saarathi.md': {
    name: 'projects/saarathi.md',
    language: 'md',
    content: `# Saarathi Finance - NBFC Digital Lending Platform

## Overview
Digital lending platform for MSMEs with credit bureau integrations.

## Features
- **Credit Bureau APIs**: CIBIL, Experian, CRIF High Mark
- **Loan Processing**: Application → KYC → Approval → Disbursement
- **Document Management**: Verification, e-signatures
- **Workflow Engine**: Temporal.io for complex loan workflows

## Architecture
\`\`\`
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   React     │────▶│   Django     │────▶│ PostgreSQL  │
│   Admin     │     │   REST API   │     │             │
└─────────────┘     └──────┬───────┘     └─────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Temporal.io │    │  Keycloak   │    │Credit Bureau│
│  Workflows  │    │    Auth     │    │    APIs     │
└─────────────┘    └─────────────┘    └─────────────┘
\`\`\`

## Tech Stack
Django, PostgreSQL, Temporal.io, Keycloak, React, Celery, Redis
`,
  },

  'projects/wiseyatra.md': {
    name: 'projects/wiseyatra.md',
    language: 'md',
    content: `# WiseYatra - Travel Booking Platform

## Overview
Comprehensive travel platform: flights, hotels, transfers, activities.

## Features
- Multi-city flight search with fare comparison
- Hotel booking with real-time availability
- Airport transfers and local experiences
- Interactive maps with Google Maps API

## Tech Stack
Next.js, React, TypeScript, Tailwind CSS, Zustand, Google Maps API

## Frontend Architecture
\`\`\`
src/
├── components/
│   ├── flights/
│   ├── hotels/
│   ├── transfers/
│   └── common/
├── store/ (Zustand)
├── hooks/
└── pages/
\`\`\`
`,
  },

  'projects/siloho.md': {
    name: 'projects/siloho.md',
    language: 'md',
    content: `# Siloho - AI Interior Design Platform

## Overview
AI-powered interior design with real-time 3D renders.
Users design and customize their house with furniture, fittings, colors.

## My Role (VP Technology)
- Defined strategic roadmap and technical vision
- Built 12+ member engineering team
- Integrated Blender/Unity for real-time 3D
- Scalable Vue.js + Django architecture

## Tech Stack
Python, Django, Vue.js, PostgreSQL, Elasticsearch, Redis, Blender, Unity

## 3D Pipeline
\`\`\`
User Input → Vue.js Editor → Django API → Blender Server → 3D Render Output
\`\`\`
`,
  },

  'projects/ftcash.md': {
    name: 'projects/ftcash.md',
    language: 'md',
    content: `# ftcash - Digital Payments & Lending

## Overview
Financial services for micro-merchants and SMEs.
Digital payments and business loans platform.

## My Role (VP Technology)
- Full product lifecycle for payments & lending
- Scaled team to 40+ engineers
- Payment gateway integrations (Razorpay, ICICI)
- Daily-DPD loan management system

## Features
- RESTful billing engine
- Merchant invoicing
- Unsecured/secured business loans
- Credit assessment workflows
`,
  },

  'projects/modelcraft.md': {
    name: 'projects/modelcraft.md',
    language: 'md',
    content: `# ModelCraft V3 - AI 3D Design Platform

## Overview
AI-powered 3D design from 2D floor plans.
Real-time Blender ↔ Three.js synchronization.

## Features
- AI floor plan detection (walls, rooms, doors, windows)
- Real-time 3D rendering
- 2D/3D editing tools
- Material and asset library

## GitHub: ⭐ 17 stars
github.com/aman0x/modelcraft

## Tech Stack
React, Three.js, TypeScript, Python, Flask, Blender, TensorFlow, OpenCV
`,
  },

  'projects/blender-websocket.md': {
    name: 'projects/blender-websocket.md',
    language: 'md',
    content: `# blender-websocket - Real-time 3D Communication

## Overview
WebSocket library for real-time Blender communication.
Enables web apps to control Blender headless server.

## GitHub: ⭐ 9 stars
github.com/aman0x/blender-websocket

## Use Cases
- Real-time 3D rendering from web
- Remote Blender control
- 3D design collaboration

## Tech Stack
Python, WebSocket, Blender Python API
`,
  },

  'contact.md': {
    name: 'contact.md',
    language: 'md',
    content: `# Contact

**Email**: amanchandel4@gmail.com
**Phone**: +91 7905400369
**Location**: Delhi, India

**GitHub**: github.com/aman0x
**LinkedIn**: linkedin.com/in/aman0x

## Open To
- VP/Director Engineering roles
- Technical Co-founder
- AI/ML Consulting
- Advisory positions
`,
  },

  'README.md': {
    name: 'README.md',
    language: 'md',
    content: `# aman0x

VP Technology | 11+ Years | Full Stack | AI/ML | 3D

## Commands
help, about, experience, skills, projects, contact

## Files
ls, cat [file], open [file]

## Projects
cat projects/keyward.md
cat projects/saarathi.md
cat projects/wiseyatra.md
cat projects/siloho.md
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
