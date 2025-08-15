'use client';
import clsx from "clsx";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const timeline = {
  en: [
    { company: "GPet Trading Service Co., Ltd", role: "Fullstack Developer", period: "05/2024 – Present" },
    { company: "BUBOBOT Co., Ltd", role: "Fullstack Developer", period: "11/2024 – Present" },
    { company: "Viet Dynamic JSC", role: "Automation engineer", period: "11/2021 – 07/2023" },
  ],
  vi: [
    { company: "Công ty TNHH thương mại dịch vụ GPet", role: "Fullstack Developer", period: "05/2024 – Hiện tại" },
    { company: "Công ty TNHH BUBOBOT", role: "Fullstack Developer", period: "11/2024 – Hiện tại" },
    { company: "Công ty cổ phần Viet Dynamic", role: "Automation engineer", period: "11/2021 – 07/2023" },
  ],
};

const About = () => {
  const { language } = useLanguage();
  const nameClass = clsx(
    "text-4xl md:text-5xl font-extrabold tracking-wider",
    "text-green-900 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400",
  );

  return (
    <section id="about" className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <Image
            src={"/avatar-removebg.png"}
            width={180}
            height={180}
            className="rounded-full border-4 border-green-400 shadow-xl object-cover tech-glow"
            alt="avatar"
          />
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <span className={nameClass}>Lê Phước Khải</span>
          <p className="text-lg text-gray-200 max-w-xl">
            {language === 'en' 
              ? "Hello! I'm Khai, a full-stack developer specializing in ReactJS for the frontend and NestJS/NodeJS for the backend. I have experience building modern web systems, efficient APIs, and user-friendly UIs. Always ready to learn and optimize solutions. My goal is to become a great software engineer in system architecture."
              : "Xin chào! Tôi là Khải, một lập trình viên fullstack, chuyên về ReactJS ở frontend và NestJS/NodeJS ở backend. Tôi có kinh nghiệm xây dựng hệ thống web hiện đại, API hiệu quả và UI thân thiện với người dùng. Luôn sẵn sàng học hỏi và tối ưu giải pháp. Mục tiêu của tôi là trở thành kỹ sư phần mềm giỏi về kiến trúc hệ thống."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-green-300 text-base font-semibold mt-2">
            <span>{language === 'en' ? '👨‍💻 3 Companies' : '👨‍💻 3 Công ty'}</span>
            <span>{language === 'en' ? '⏳ 1+ Year Experience in Web development' : '⏳ 1+ Năm kinh nghiệm về phát triển Web'}</span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 text-center">{language === 'en' ? 'Timeline' : 'Mốc thời gian'}</h3>
        <div className="w-full">
          {/* Horizontal timeline for md+ screens */}
          <div className="hidden md:flex relative items-center justify-between w-full pt-8 pb-4 px-2">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-700 z-0" style={{transform: 'translateY(-50%)'}}></div>
            {timeline[language].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center z-10 w-1/3 px-2 pt-5">
                <div className="w-6 h-6 bg-green-400 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-green-900">{idx+1}</span>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-base font-semibold text-green-200">{item.company}</div>
                  <div className="text-sm text-gray-300">{item.role}</div>
                  <div className="text-xs text-gray-400">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Vertical timeline for smaller screens */}
          <div className="md:hidden flex flex-col relative pt-4 pb-2 pl-4">
            <div className="absolute left-6 top-8 bottom-0 w-1 bg-green-700 z-0"></div>
            {timeline[language].map((item, idx) => (
              <div key={idx} className="relative flex items-start mb-8 z-10">
                <div className="w-6 h-6 bg-green-400 border-4 border-white rounded-full flex items-center justify-center shadow-lg absolute -left-3 top-0">
                  <span className="text-xs font-bold text-green-900">{idx+1}</span>
                </div>
                <div className="ml-8 pt-10">
                  <div className="text-base font-semibold text-green-200">{item.company}</div>
                  <div className="text-sm text-gray-300">{item.role}</div>
                  <div className="text-xs text-gray-400">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;