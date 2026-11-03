import type {
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  ServiceItem,
  Testimonial,
  Certificate,
  StatItem,
} from "@/types";

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 98, years: "5y" },
      { name: "CSS3", level: 96, years: "5y" },
      { name: "JavaScript", level: 96, years: "5y" },
      { name: "TypeScript", level: 94, years: "3y" },
      { name: "React", level: 97, years: "5y" },
      { name: "Next.js", level: 93, years: "5y" },
      { name: "Redux Toolkit", level: 90, years: "5y" },
      { name: "Tailwind CSS", level: 96, years: "4y" },
      { name: "Bootstrap", level: 88, years: "5y" },
      { name: "Material UI", level: 87, years: "4y" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 92, years: "6y" },
      { name: "Express.js", level: 90, years: "6y" },
      { name: "REST APIs", level: 93, years: "7y" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "Firebase", level: 89, years: "5y" },
      { name: "MongoDB", level: 88, years: "5y" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 95, years: "8y" },
      { name: "GitHub", level: 95, years: "8y" },
      { name: "VS Code", level: 97, years: "8y" },
      { name: "Figma", level: 85, years: "4y" },
      { name: "Postman", level: 92, years: "6y" },
      { name: "Vercel", level: 91, years: "4y" },
      { name: "Netlify", level: 88, years: "4y" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "apple-ecommerce",
    title: "Apple eCommerce Website",
    description:
      "A modern Apple-inspired eCommerce website built with React and Redux Toolkit — featuring secure Firebase authentication, product browsing, a persistent shopping cart, and a smooth, responsive user experience.",
    category: "Full Stack",
    status: "Live",
    tech: ["React.js", "Redux Toolkit", "React Router", "Firebase", "Tailwind CSS"],
    features: ["User Authentication", "Product Catalog", "Shopping Cart", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img1.png",
    demo: "https://apple-e-commerce-website-f9s3.vercel.app/",
  },
  {
    id: "diet-soda",
    title: "Diet Soda",
    description:
      "A striking product landing page for Diet Soda, built with Next.js and shadcn/ui — anchored by a fully interactive 3D hero section that lets visitors spin and explore the product up close, paired with crisp, minimal design throughout.",
    category: "Landing",
    status: "Live",
    tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    features: ["Interactive 3D Hero", "Product Showcase", "Responsive Design", "SEO Optimized"],
    thumbnail: "/project-thumbnail/project-img8.png",
    demo: "https://diet-soda-landing-page.vercel.app/index.html",
  },
  {
    id: "aura-commerce",
    title: "Aura Commerce",
    description:
      "A polished, modern eCommerce storefront built with Next.js and React 19 — featuring a custom shadcn/ui component system, dark mode, smooth carousels, and form-driven checkout flows validated with React Hook Form and Zod.",
    category: "Frontend",
    status: "Live",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod"],
    features: ["Custom UI Components", "Dark Mode", "Form Validation", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img3.png",
    demo: "https://boty-ecommerce-template-eta-three.vercel.app/",
  },
  {
    id: "nova-commerce",
    title: "Nova Commerce",
    description:
      "A full-featured eCommerce platform built with TanStack Start and Supabase — featuring a custom shadcn/ui component system, Zustand state management, and smooth Framer Motion animations throughout the shopping experience.",
    category: "Full Stack",
    status: "Live",
    tech: [
      "TanStack Start",
      "React",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    features: ["Supabase Backend", "Product Catalog", "State Management", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img4.png",
    demo: "https://nova-commerce-platform.vercel.app/",
  },
  {
    id: "momo-x",
    title: "Momo X",
    description:
      "An award-worthy marketing landing page built with Next.js and Framer Motion — featuring a striking scroll-driven hero section, a custom shadcn/ui component system, and buttery-smooth animations tuned for top-tier performance.",
    category: "Landing",
    status: "Live",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
    features: ["Scroll Animations", "Custom Hero Section", "SEO Optimized", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img5.png",
    demo: "https://apple-style-scroll-animation-3-pi.vercel.app/",
  },
  {
    id: "crystal-horizon",
    title: "Crystal Horizon",
    description:
      "A visually striking 3D landing page built with Next.js and React Three Fiber — featuring an immersive white-crystal hero scene, smooth camera-driven interactions, and a polished shadcn/ui component system.",
    category: "Landing",
    status: "Live",
    tech: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS", "shadcn/ui"],
    features: ["3D Hero Scene", "Interactive Camera", "SEO Optimized", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img6.png",
    demo: "https://agentic-build-orchestrate-a-mu-two.vercel.app/",
  },
  {
    id: "sky-high-dreams",
    title: "Sky High Dreams",
    description:
      "An elegant aviation-themed landing page built with TanStack Start and Framer Motion — featuring smooth scroll-triggered animations, a custom shadcn/ui component system, and a polished, cinematic feel throughout.",
    category: "Landing",
    status: "Live",
    tech: ["TanStack Start", "React", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
    features: ["Scroll Animations", "Custom Hero Section", "Responsive Design", "SEO Optimized"],
    thumbnail: "/project-thumbnail/project-img7.png",
    demo: "https://sky-high-dreams.vercel.app/",
  },
  {
    id: "wild-haven",
    title: "Wild Haven",
    description:
      "A beautifully designed camping and outdoor retreat website built with Next.js and shadcn/ui — featuring a seamless booking and reservation system, immersive visuals, and a clean, nature-inspired design throughout.",
    category: "Frontend",
    status: "Live",
    tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    features: ["Booking System", "Photo Gallery", "Responsive Design", "SEO Optimized"],
    thumbnail: "/project-thumbnail/project-img9.png",
    demo: "https://remix-of-wild-haven.vercel.app/",
  },
];

export const PROJECT_CATEGORIES = ["All", "Full Stack", "Frontend", "Landing"];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Eplanet Global",
    role: "Frontend Developer",
    duration: "Present",
    location: "Karachi, Sindh, Pakistan",
    points: [
      "Build responsive, production-ready user interfaces using React, JavaScript, and TypeScript.",
      "Translate design mockups into clean, reusable, cross-browser compatible components.",
      "Collaborate with designers and backend engineers to deliver smooth user experiences.",
    ],
    achievements: [
      "Focused on performance, accessibility, and maintainable frontend architecture.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institute: "Iqra University",
    degree: "University Studies",
    duration: "Karachi, Pakistan",
    description:
      "Studied at Iqra University, Karachi, building a strong foundation for a career in frontend web development.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Frontend Development",
    description: "Pixel-perfect, accessible UI built with React, Next.js, and Tailwind.",
    icon: "Layout",
  },
  {
    title: "MERN Stack Development",
    description: "End-to-end products with robust APIs, databases, and clean architecture.",
    icon: "Layers",
  },
  {
    title: "Responsive Web Design",
    description: "Flawless experiences across every device, breakpoint, and orientation.",
    icon: "Smartphone",
  },
  {
    title: "Landing Page Development",
    description: "High-converting, animated landing pages that load in milliseconds.",
    icon: "Rocket",
  },
  {
    title: "API Integration",
    description: "Seamless third-party and custom REST integrations with error resilience.",
    icon: "Plug",
  },
  {
    title: "Website Optimization",
    description: "Lighthouse 95+ performance, SEO, and Core Web Vitals tuning.",
    icon: "Gauge",
  },
  {
    title: "Bug Fixing",
    description: "Rapid diagnosis and fixes for tricky production and cross-browser issues.",
    icon: "Bug",
  },
  {
    title: "Firebase Development",
    description: "Realtime databases, auth, cloud functions, and serverless backends.",
    icon: "Flame",
  },
  {
    title: "Portfolio Development",
    description: "Premium personal brands and portfolios that convert visitors to clients.",
    icon: "Sparkles",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Product Director",
    company: "Olive Digital ",
    rating: 5,
    feedback:
      "Syed delivered beyond expectations. The attention to detail and performance obsession is world-class — our conversion jumped 32% after launch.",
    initials: "SM",
  },
  {
    name: "David Chen",
    role: "CTO",
    company: "Nimbus Studio",
    rating: 5,
    feedback:
      "One of the most reliable engineers I've worked with. Clean architecture, great communication, and always ships on time.",
    initials: "DC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Aura Commerce",
    rating: 5,
    feedback:
      "Our storefront finally feels premium. Syed turned a rough idea into a polished, blazing-fast product our customers love.",
    initials: "ER",
  },
  {
    name: "James Okoro",
    role: "Engineering Manager",
    company: "Bright Pixel",
    rating: 5,
    feedback:
      "A true craftsman. The design system Syed built became the foundation for everything we ship today.",
    initials: "JO",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Web and Mobile App Development",
    org: "Saylani Mass IT Training Program",
    year: "2024",
    url: "https://example.com",
    achievement: "/certificates/web_app_development.png",
  },
  {
    name: "WordPress Development",
    org: "DigiSkills",
    year: "2022",
    url: "https://example.com",
    achievement: "/certificates/wordpress_digi_skills.png",
  },
  {
    name: "Freelancing Essentials",
    org: "DigiSkills",
    year: "2022",
    url: "https://example.com",
    achievement: "/certificates/freelancing_digi_skills.png",
  },
  {
    name: "Front End Web Development",
    org: "Aptech Computer Education",
    year: "2019",
    url: "https://example.com",
    achievement: "/certificates/frontend_web_development.png",
  },
  {
    name: "Office Automation",
    org: "Aptech Computer Education",
    year: "2019",
    url: "https://example.com",
    achievement: "/certificates/office_automation.png",
  },
];

export const STATS: StatItem[] = [
  { label: "Projects Completed", value: 120, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 65, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
];
