
'use client';
import { useLanguage } from "./LanguageContext";

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
    </section>
  );
};

export default Contact;
