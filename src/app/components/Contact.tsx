'use client';
import { useLanguage } from "./LanguageContext";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="max-w-3xl mx-auto py-10 px-2 sm:py-16 sm:px-4 text-center">
      <h2 className="section-title">{language === 'en' ? 'Contact Me' : 'Liên hệ'}</h2>
      <p className="text-base sm:text-lg text-gray-300 mb-4">
        {language === 'en' 
          ? "I'm always open to new opportunities and collaborations. Feel free to reach out to me via email."
          : "Tôi luôn sẵn sàng cho các cơ hội và hợp tác mới. Đừng ngần ngại liên hệ với tôi qua email."}
      </p>
      <a href="mailto:lephuockhai2015@gmail.com" className="contact-button">
        lephuockhai2015@gmail.com
      </a>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://www.facebook.com/khaxilee" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500">
          <FaFacebook size={30} />
        </a>
        <a href="https://github.com/lephuockhai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/le-phuoc-khai-8256641b4/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500">
          <FaLinkedin size={30} />
        </a>
        <a href="tel:+84349495343" className="text-gray-300 hover:text-green-500">
          <FaPhone size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;