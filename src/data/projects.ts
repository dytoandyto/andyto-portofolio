export interface ProjectDecision {
  title: string;
  explanation: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: ("Full-Stack" | "Frontend" | "UI/UX" | "Product")[];
  status: "completed" | "in-progress" | "prototype" | "concept";
  statusLabel: string;
  year: string;
  role: string[];
  technologies: string[];
  summary: string;
  featured: boolean;
  problem: string;
  goals: string[];
  contribution: string;
  decisions: ProjectDecision[];
  challenges: string[];
  outcomes: string[];
  lessons: string[];
  coverGradient: {
    from: string;
    to: string;
    accent: string;
  };
  mockupType: "dashboard" | "kanban" | "portal";
  repositoryUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "classhub",
    title: "ClassHub",
    subtitle: "Modern Academic Cohort & Schedule Portal",
    category: ["Full-Stack", "Frontend", "UI/UX"],
    status: "in-progress",
    statusLabel: "Active Development",
    year: "2025 – 2026",
    role: [
      "Frontend Architecture",
      "UI/UX Implementation",
      "Full-Stack Integration",
    ],
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "TipTap",
      "Lucide Icons",
    ],
    summary:
      "A centralized academic platform unifying class schedules, assignment deadlines, student directory, and rich shared learning resources in an accessible, high-performance interface.",
    featured: true,
    problem:
      "University class cohorts typically scatter vital academic updates across disjointed instant messaging groups, drive folders, and ad-hoc spreadsheets. Deadlines get lost, class locations are hard to find on mobile between lectures, and collaborative achievements lack a dedicated home.",
    goals: [
      "Consolidate daily and weekly lecture timetables with rapid mobile lookup.",
      "Provide transparent assignment tracking with urgency and completion filters.",
      "Establish an authentic student directory featuring personal goals and project links.",
      "Deliver a rich-text announcement and article publisher for class leadership.",
    ],
    contribution:
      "Spearheaded the frontend component architecture, responsive layout design, and relational database schema modeling. Implemented the weekly timetable views, student showcase directory, and integration with PostgreSQL via Prisma.",
    decisions: [
      {
        title: "Hybrid Server Components with Client Interactivity",
        explanation:
          "Kept the public directory and timetable SSR-first for instant page loads and zero layout shift, isolating client state only to interactive filters and rich-text editing modules.",
      },
      {
        title: "Rigorous Image & Document Validation Pipeline",
        explanation:
          "Implemented binary magic-byte inspection on upload handlers to prevent file extension spoofing before persisting student avatars and gallery media to Supabase storage.",
      },
      {
        title: "TipTap Modular Editor Integration",
        explanation:
          "Structured announcement publishing around TipTap extensions to allow structured headings, code snippets, and callouts without exposing raw HTML injection vulnerabilities.",
      },
    ],
    challenges: [
      "Handling dynamic time zone calculations across varied student devices while keeping server-rendered timetable schedules strictly deterministic.",
      "Optimizing complex student directory filter combinations without triggering redundant database roundtrips.",
    ],
    outcomes: [
      "Unified all recurring weekly schedules, room allocations, and lecturer contacts in a single-tap responsive UI.",
      "Eliminated deadline ambiguity with clear, time-weighted task status states.",
      "Engineered an extensible Prisma schema accommodating profiles, achievements, and rich announcements.",
    ],
    lessons: [
      "Deepened understanding of strict type safety between Prisma queries and Next.js Server Component boundaries.",
      "Reinforced the value of fluid mobile design for students walking across campus needing immediate class room numbers.",
    ],
    coverGradient: {
      from: "#1A231C",
      to: "#0F1611",
      accent: "#72E58A",
    },
    mockupType: "portal",
  },
  {
    slug: "sada-taskly",
    title: "Sada-Taskly",
    subtitle: "Contextual Team Workflow & Task Operations Engine",
    category: ["Full-Stack", "Frontend", "Product"],
    status: "in-progress",
    statusLabel: "In Development",
    year: "2025",
    role: [
      "Frontend Systems",
      "Component Architecture",
      "Inertia.js Integration",
    ],
    technologies: [
      "Laravel",
      "Inertia.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
    ],
    summary:
      "A work management application focused on structured task delegation, role-based workflows, workspace coordination, and high-clarity operational dashboards.",
    featured: true,
    problem:
      "Modern project management tools often suffer from feature bloat, confusing multi-tier hierarchies, and sluggish drag-and-drop interfaces that distract teams from shipping core deliverables.",
    goals: [
      "Build a frictionless task creation and assignment loop with minimal input friction.",
      "Implement role-governed workspace permissions separating admins, managers, and contributors.",
      "Provide clean operational metrics covering task velocity, backlog bottlenecks, and status distributions.",
    ],
    contribution:
      "Designed the React frontend layer connected seamlessly to Laravel through Inertia.js. Authored the reusable design tokens, modal overlays, workspace switcher, and optimistic UI updates for task status transitions.",
    decisions: [
      {
        title: "Inertia.js Monolith over Decoupled Micro-services",
        explanation:
          "Chose Inertia.js to maintain the rapid prototyping speed and security of Laravel controllers while delivering the snappy, client-rendered experience of a React single-page app without the overhead of client-side OAuth tokens.",
      },
      {
        title: "Optimistic State Mutation for Task Cards",
        explanation:
          "Implemented instant visual feedback on column changes and completion toggles, reconciling asynchronously with backend validation to eliminate UI lag.",
      },
    ],
    challenges: [
      "Balancing client-side optimism with transactional database consistency during rapid concurrent task reassignments.",
      "Maintaining clean TypeScript definitions mirroring Laravel Eloquent model transformations.",
    ],
    outcomes: [
      "Achieved sub-100ms perceived transition speeds for task status updates through Inertia partial reloads.",
      "Built a cohesive, high-contrast dark dashboard theme engineered for long hours of project triage.",
    ],
    lessons: [
      "Inertia.js offers tremendous productivity for full-stack developers when strict data contracts are enforced with TypeScript interfaces.",
    ],
    coverGradient: {
      from: "#221C18",
      to: "#14100D",
      accent: "#FFAE5E",
    },
    mockupType: "kanban",
  },
  {
    slug: "suarasiswa",
    title: "SuaraSiswa",
    subtitle: "Structured Campus Voice & Grievance Routing Engine",
    category: ["Product", "UI/UX", "Frontend"],
    status: "prototype",
    statusLabel: "Functional Prototype",
    year: "2025",
    role: [
      "Product Strategy",
      "Information Architecture",
      "Frontend Engineering",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Framer Motion",
    ],
    summary:
      "A transparent campus feedback and grievance triage platform allowing students to submit verifiable academic concerns, track institutional resolution steps, and view public accountability metrics.",
    featured: true,
    problem:
      "Campus student complaints regarding campus facilities, academic administration, and course scheduling are frequently dropped into black-hole email inboxes with zero resolution tracking, resulting in student disengagement and administrative opacity.",
    goals: [
      "Design a confidential yet verifiable submission workflow categorized by department.",
      "Provide a public timeline for issue status: Received, Under Review, In Progress, and Resolved.",
      "Introduce an administrative triage interface with priority tagging and public resolution logs.",
    ],
    contribution:
      "Conceived the information hierarchy, conducted problem interviews, developed interactive prototypes, and built the accessible submission form wizard with client and server schema validation.",
    decisions: [
      {
        title: "Multi-Step Progressive Disclosure Wizard",
        explanation:
          "Broke down complex reporting into digestible, guided phases (Category -> Context -> Evidence -> Review) to reduce drop-off rates and improve report quality.",
      },
      {
        title: "Privacy-Preserving Verification",
        explanation:
          "Structured the submission protocol to authenticate student validity while allowing identity masking on public department dashboards.",
      },
    ],
    challenges: [
      "Designing an unbiased administrative priority scoring system that prevents spam reports while surfacing critical safety and educational blockers.",
    ],
    outcomes: [
      "Created a high-fidelity interactive prototype demonstrating the complete end-to-end reporting and department review cycle.",
      "Validated the user journey with fellow students, confirming significant clarity improvements over unstructured forms.",
    ],
    lessons: [
      "Designing for civic/academic communication requires extreme clarity in typography and status semantics — every state change carries emotional weight.",
    ],
    coverGradient: {
      from: "#1E1A29",
      to: "#120F1C",
      accent: "#B89BFF",
    },
    mockupType: "dashboard",
  },
];
