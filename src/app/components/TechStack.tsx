
'use client';
import clsx from "clsx";
import { useLanguage } from "./LanguageContext";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiNestjs,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiGitlab,
  SiAntdesign,
  SiGraphql,
  SiExpress,
} from "react-icons/si";

const techStackList = [
  { title: "Javascript", icon: <SiJavascript className="text-yellow-400" />, glowClass: "tech-glow-js" },
  { title: "Typescript", icon: <SiTypescript className="text-blue-500" />, glowClass: "tech-glow-ts" },
  { title: "Python", icon: <SiPython className="text-blue-400" />, glowClass: "tech-glow-py" },
  { title: "ReactJS", icon: <SiReact className="text-cyan-400" />, glowClass: "tech-glow-re" },
  { title: "Redux", icon: <SiRedux className="text-purple-500" />, glowClass: "tech-glow-rdx" },
  { title: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, glowClass: "tech-glow-tw" },
  { title: "VueJS", icon: <SiVuedotjs className="text-green-400" />, glowClass: "tech-glow-vue" },
  { title: "Node.js (ExpressJS)", icon: <SiNodedotjs className="text-green-600" />, glowClass: "tech-glow-node" },
  { title: "NestJS", icon: <SiNestjs className="text-red-500" />, glowClass: "tech-glow-nest" },
  { title: "Django", icon: <SiDjango className="text-gray-800" />, glowClass: "tech-glow-dj" },
  { title: "RESTful APIs", icon: <SiExpress className="text-gray-400" />, glowClass: "tech-glow-rest" },
  { title: "GraphQL", icon: <SiGraphql className="text-pink-500" />, glowClass: "tech-glow-gql" },
  { title: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, glowClass: "tech-glow-pg" },
  { title: "MongoDB", icon: <SiMongodb className="text-green-700" />, glowClass: "tech-glow-mongo" },
  { title: "Redis", icon: <SiRedis className="text-red-600" />, glowClass: "tech-glow-redis" },
  { title: "JWT", icon: <SiJsonwebtokens className="text-yellow-500" />, glowClass: "tech-glow-jwt" },
  { title: "Git", icon: <SiGit className="text-orange-500" />, glowClass: "tech-glow-git" },
  { title: "Github", icon: <SiGithub className="text-gray-200" />, glowClass: "tech-glow-github" },
  { title: "GitLab", icon: <SiGitlab className="text-orange-400" />, glowClass: "tech-glow-gitlab" },
  { title: "Ant Design", icon: <SiAntdesign className="text-blue-400" />, glowClass: "tech-glow-ant" },
];

const TechStack = () => {
  const { language } = useLanguage();
  return (
    <section id="tech" className="max-w-3xl mx-auto py-10 px-2 sm:py-16 sm:px-4">
      <h2 className="section-title text-center">{language === 'en' ? 'Tech Stack' : 'Công nghệ sử dụng'}</h2>
      <ul className="flex flex-wrap gap-2 sm:gap-4">
        {techStackList.map((tech) => (
          <li key={tech.title} className={clsx(
            'bg-green-800 px-2 py-1 sm:px-3 sm:py-1 rounded text-white text-sm sm:text-base flex items-center gap-2 cursor-pointer',
            tech.glowClass
          )}>
            {tech.icon}
            <span>{tech.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TechStack;
