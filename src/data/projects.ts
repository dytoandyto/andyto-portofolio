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
  problem?: string;
  goals?: string[];
  contribution?: string;
  decisions?: ProjectDecision[];
  challenges?: string[];
  outcomes?: string[];
  lessons?: string[];
  coverGradient: {
    from: string;
    to: string;
    accent: string;
  };
  mockupType: "dashboard" | "kanban" | "portal";
  coverImage?: string;
  repositoryUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "classhub",
    title: "ClassHub",
    subtitle: "Academic Timetable & Cohort Hub",
    category: ["Full-Stack", "Frontend", "UI/UX"],
    status: "prototype",
    statusLabel: "Functional Prototype",
    year: "2025 – 2026",
    role: [
      "Frontend Architecture",
      "UI/UX Implementation",
      "Academic Workflow Modeling",
    ],
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "Vercel",
    ],
    summary:
      "A centralized academic portal for Telkom University Jakarta cohort JS1SI-26-REG-05, consolidating daily lecture timetables, assignment deadlines, campus portal access, and cohort resources into an accessible digital hub.",
    featured: true,
    problem:
      "University class cohorts coordinate academic updates across fragmented messaging chats, drive folders, and ad-hoc spreadsheets. Lecture room changes get lost between periods, assignment deadlines lack unified urgency tracking, and shared learning resources are difficult to locate on mobile devices.",
    goals: [
      "Consolidate daily and weekly lecture timetables with fast mobile-friendly lookup.",
      "Track active assignments, course deadlines, and urgent project submissions.",
      "Provide quick-access launchers to essential Telkom University systems (MyTelU, LMS Tel-U CeLOE, iGracias).",
      "Organize educational articles, course materials, lecture notes, and cohort directory.",
    ],
    contribution:
      "Engineered the responsive Next.js web application, implemented the high-contrast dark academic interface with Tailwind CSS, and structured timetable, assignment, and resource navigation.",
    decisions: [
      {
        title: "Immediate Lecture Information Hierarchy",
        explanation:
          "Organized the homepage view to immediately surface today's active lectures and nearest assignment deadlines before secondary navigational resources.",
      },
      {
        title: "Integrated Campus Portal Ecosystem",
        explanation:
          "Designed direct launch pathways to core Telkom University portals (MyTelU, LMS CeLOE, and iGracias) to minimize context switching for daily academic routines.",
      },
    ],
    challenges: [
      "Designing a responsive timetable grid and deadline reminder system that remains completely readable and touch-friendly on narrow mobile screens (360px–390px).",
    ],
    outcomes: [
      "Built and deployed a functioning academic class hub unifying weekly timetables, active assignments, and campus portal gateways.",
      "Established an accessible digital home for class JS1SI-26-REG-05 deployed live on Vercel.",
    ],
    lessons: [
      "Academic productivity tools require zero visual friction—students checking room numbers or assignment deadlines between classes need immediate, high-contrast clarity.",
    ],
    coverGradient: {
      from: "#1A231C",
      to: "#0F1611",
      accent: "#72E58A",
    },
    mockupType: "portal",
    coverImage: "/images/projects/classhub-cover.webp",
    liveUrl: "https://tuj-si-2605.vercel.app/",
    // Note: Public source repository is not published; omitted to preserve content integrity.
  },
  {
    slug: "suarasiswa",
    title: "SuaraSiswa",
    subtitle: "AI-Powered Student Helpdesk & Report Management System",
    category: ["Full-Stack", "Product", "UI/UX"],
    status: "prototype",
    statusLabel: "Functional Prototype",
    year: "2025",
    role: [
      "Full-Stack Engineering",
      "AI Integration",
      "Database Architecture",
    ],
    technologies: [
      "Laravel 12",
      "React 19",
      "Inertia.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Google Gemini API",
      "Lucide Icons",
    ],
    summary:
      "An AI-integrated student helpdesk and report management platform connecting students, administration, and school departments. Features automated grievance routing and consultation powered by Google Gemini 1.5 Flash.",
    featured: true,
    problem:
      "School student grievances and facility reports are commonly handled through informal messaging or paper forms with zero status tracking, resulting in unresolved issues, administrative opacity, and lack of accountability between school divisions.",
    goals: [
      "Integrate an AI Assistant powered by Google Gemini 1.5 Flash for instant school consultation and automated report classification.",
      "Establish strict Role-Based Access Control (RBAC) separating Siswa (students), Admin, and Staff Divisions (Sarpras, Hubin, SIMS, Kesiswaan, Kurikulum).",
      "Provide dynamic real-time triage dashboards with status workflows (Masuk, Proses, Selesai).",
      "Ensure database-level integrity for status updates through custom MySQL Stored Procedures.",
      "Enable transparent student feedback with star ratings and official report generation (PDF and Excel).",
    ],
    contribution:
      "Built the full-stack system using Laravel 12 and React 19 via Inertia.js. Integrated the Google Gemini 1.5 Flash API for chatbot consultation and auto-routing. Authored the database schema with MySQL Stored Procedures for report state transitions, and built the responsive Tailwind CSS dashboard.",
    decisions: [
      {
        title: "Google Gemini 1.5 Flash for Intelligent Helpdesk Triage",
        explanation:
          "Integrated Gemini via API to analyze student complaint text, determine the relevant school division automatically (Sarpras, Kurikulum, etc.), and provide 24/7 conversational assistance.",
      },
      {
        title: "Inertia.js Full-Stack Architecture",
        explanation:
          "Coupled Laravel 12 backend security and ORM capabilities directly to React 19 client components without the operational overhead of a separate decoupled API gateway.",
      },
      {
        title: "Database Stored Procedures for Status Integrity",
        explanation:
          "Implemented SQL-level stored procedures for report status transitions to enforce atomic, tamper-resistant audit trails directly at the database layer.",
      },
    ],
    challenges: [
      "Prompt-engineering the Gemini assistant to accurately categorize edge-case student complaints and format structured division dispatch payloads.",
      "Designing granular role-based authorization so division staff can only modify tickets assigned to their specific department.",
    ],
    outcomes: [
      "Successfully engineered and demonstrated a functioning multi-role student helpdesk platform with automated Gemini AI dispatching.",
      "Implemented student feedback loops with rating reviews and official school PDF/Excel report exports.",
    ],
    lessons: [
      "Combining LLM capabilities with traditional relational databases requires strict JSON schema guards at the API boundary to prevent unpredictable model responses from corrupting structured records.",
    ],
    coverGradient: {
      from: "#1E1A29",
      to: "#120F1C",
      accent: "#B89BFF",
    },
    mockupType: "dashboard",
    repositoryUrl:
      "https://github.com/dytoandyto/SuaraSiswa-AI-Powered-Student-Helpdesk-Aspiration-System",
    // Note: Live cloud deployment is not currently hosted; omitted to preserve content integrity.
  },
];
