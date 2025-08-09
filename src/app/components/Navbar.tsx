'use client'
import { FaUserAstronaut, FaCode, FaLanguage } from "react-icons/fa";
import clsx from "clsx";
import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { RiFolderZipFill } from "react-icons/ri";
import { GiTechnoHeart } from "react-icons/gi";
import { LuContact } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navList = [
    { id: "about", title: language === 'en' ? "About" : "Về tôi", icon: <FaUserAstronaut size={20} /> },
    { id: "projects", title: language === 'en' ? "Projects" : "Dự án", icon: <FaCode size={20} /> },
    { id: "experience", title: language === 'en' ? "Experience" : "Kinh nghiệm", icon: <RiFolderZipFill size={20} /> },
    { id: "tech", title: language === 'en' ? "Tech Stack" : "Công nghệ", icon: <GiTechnoHeart size={20} /> },
    { id: "contact", title: language === 'en' ? "Contact" : "Liên hệ", icon: <LuContact size={20} /> },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounceDelay1"></div>
              <div className="w-3 h-3 bg-lime-400 rounded-full animate-bounceDelay2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounceDelay3"></div>
              <p className="text-sm sm:text-lg">lephuockhai@portfolio:~$</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navList.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-green-700/50 duration-300"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              ))}
              <button onClick={toggleLanguage} className="text-white p-2 rounded-md hover:bg-green-700/50">
                <FaLanguage size={20} />
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navList.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700/50 block"
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
            <button onClick={toggleLanguage} className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700/50">
              <FaLanguage size={20} />
              <span>{language === 'en' ? 'Tiếng Việt' : 'English'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;