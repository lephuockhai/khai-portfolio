
'use client';
import { useLanguage } from "./LanguageContext";

const projects = {
  en: [
    {
      name: "Trello Web Project",
      period: "Feb 2024 – May 2024",
      description: "A web application for project management, similar to Trello, allowing users to create boards, lists, and cards to organize their tasks and workflows.",
      link: "https://github.com/lephuockkai/trello-web-project"
    },
    {
      name: "E-commerce Web Project",
      period: "Oct 2023 – Jan 2024",
      description: "A full-featured e-commerce website with a product catalog, shopping cart, user authentication, and order management system.",
      link: "https://github.com/lephuockkai/ecommerce-web-project"
    }
  ],
  vi: [
    {
      name: "Dự án Web Trello",
      period: "02/2024 – 05/2024",
      description: "Một ứng dụng web để quản lý dự án, tương tự như Trello, cho phép người dùng tạo bảng, danh sách và thẻ để tổ chức công việc và quy trình làm việc của họ.",
      link: "https://github.com/lephuockkai/trello-web-project"
    },
    {
      name: "Dự án Web Thương mại điện tử",
      period: "10/2023 – 01/2024",
      description: "Một trang web thương mại điện tử đầy đủ tính năng với danh mục sản phẩm, giỏ hàng, xác thực người dùng và hệ thống quản lý đơn hàng.",
      link: "https://github.com/lephuockkai/ecommerce-web-project"
    }
  ]
};

const Projects = () => {
  const { language } = useLanguage();
  const currentProjects = projects[language];

  return (
    <section id="projects" className="max-w-3xl mx-auto py-10 px-2 sm:py-16 sm:px-4">
      <h2 className="section-title text-center">{language === 'en' ? 'Personal Projects' : 'Dự án cá nhân'}</h2>
      <div className="space-y-8">
        {currentProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="text-xl font-semibold text-green-300 mb-2">{project.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.period}</p>
            <p className="text-base text-gray-300 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              {language === 'en' ? 'View on GitHub' : 'Xem trên GitHub'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
