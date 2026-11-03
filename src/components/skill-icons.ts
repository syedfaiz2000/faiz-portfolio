import type { ComponentType } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { Code2, Server } from "lucide-react";
import type { IconType } from "react-icons";

type AnyIcon = IconType | ComponentType<{ className?: string }>;

export const SKILL_ICONS: Record<string, AnyIcon> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Redux Toolkit": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Material UI": SiMui,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": Server,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": Code2,
  Figma: SiFigma,
  Postman: SiPostman,
  Vercel: SiVercel,
  Netlify: SiNetlify,
};
