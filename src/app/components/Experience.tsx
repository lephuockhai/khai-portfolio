
'use client';
import { useLanguage } from "./LanguageContext";

const workExperience = {
  en: [
    {
      company: "GPet Trading Service Co., Ltd",
      role: "Fullstack Developer",
      period: "05/2024 – Present",
      projects: [
        {
          name: "GPET Project",
          period: "11/2024 – Present",
          description: "GPET is a software solution for veterinary clinics to manage sales, medical history, vaccination records, and products/services. The system serves clinic staff and administrators.",
          tasks: [
            "Built APIs and interfaces for user and shipper management (CRUD).",
            "Developed new features such as order reviews.",
            "Collaborated with colleagues to build the employee timekeeping setup interface.",
            "Collaborated with colleagues to build the boarding management interface for pets staying at the clinic for treatment."
          ],
          technologies: ["ReactJS", "Redux", "JavaScript", "NodeJS", "GraphQL", "MongoDB", "Git", "GitLab"],
          link: undefined
        },
        {
          name: "Flash Web Project",
          period: "08/2024 – 11/2024",
          description: "An internal project linked with YumYum Web to manage and track delivery statuses. Users include shippers and administrators.",
          tasks: [
            "Built APIs and interfaces for user and shipper management (CRUD).",
            "Built APIs integrated with YumYum Web to synchronize orders and delivery statuses."
          ],
          technologies: ["ReactJS", "TypeScript", "NestJS", "RESTful APIs", "PostgreSQL", "JWT", "Git", "GitLab"],
          link: undefined
        },
        {
          name: "YumYum Web Project",
          period: "05/2024 – 08/2024",
          description: "An internal website for managing orders, customers, products, and revenue analysis reports, used by administrators and internal staff.",
          tasks: [
            "Designed and developed APIs using ExpressJS (RESTful) for revenue, order, and best-selling product statistics.",
            "Wrote web interfaces with ReactJS for pages like reports and loyalty point settings."
          ],
          technologies: ["ReactJS", "TypeScript", "Node.js (ExpressJS)", "RESTful APIs", "Redis", "PostgreSQL", "GitHub", "GitLab"],
          link: undefined
        }
      ]
    },
    {
      company: "BUBOBOT Co., Ltd",
      role: "Freelancer Fullstack Developer",
      period: "11/2024 – Present",
      projects: [
        {
          name: "BUBOBOT Web Project",
          period: "11/2024 – Present",
          description: "Bubobot is a web application that allows users to monitor the operational status of websites via URL. The system checks responses from registered URLs and automatically sends alerts to administrators and developers if issues are detected or no response is received.",
          tasks: [
            "Implemented and improved the feature for inviting members to a team.",
            "Developed a push notification feature using Firebase.",
            "Upgraded the alert notification feature for when a website is unresponsive.",
            "Integrated alert notifications with platforms like Grafana, Bitrix24, etc.",
            "Updated the system as required."
          ],
          technologies: ["VueJS", "Javascript", "NodeJS", "WebSocket", "MySQL", "Firebase", "Git", "GitLab"],
          link: "https://app.bubobot.com/"
        }
      ]
    },
    {
      company: "Viet Dynamic JSC",
      role: "Automation Engineer",
      period: "11/2021 – 07/2023",
      description: "Participated in designing electrical drawings and programming PLCs for automated control systems, as well as constructing and maintaining electrical and control systems in automated production lines.",
      projects: []
    }
  ],
  vi: [
    {
      company: "Công ty TNHH thương mại dịch vụ GPet",
      role: "Fullstack Developer",
      period: "05/2024 – Hiện tại",
      projects: [
        {
          name: "Dự án GPET",
          period: "11/2024 – hiện tại",
          description: "GPET là phần mềm hỗ trợ phòng khám thú y quản lý bán hàng, lưu trữ lịch sử khám bệnh và tiêm chủng và quản lý sản phẩm, dịch vụ, …. Hệ thống phục vụ cho nhân viên và quản trị viên phòng khám.",
          tasks: [
            "Xây dựng API và giao diện quản lý người dùng và shipper (CRUD).",
            "Phát triển thêm các tính năng mới như: đánh giá đơn hàng.",
            "Phối hợp với đồng nghiệp xây dựng giao diện cài đặt chấm công cho nhân viên.",
            "Phối hợp với đồng nghiệp xây dựng giao diện trang lưu chuồng – nơi quản lý thông tin thú cưng lưu trú lại phòng khám để điều trị."
          ],
          technologies: ["ReactJS", "Redux", "JavaScript", "NodeJS", "GraphQL", "MongoDB", "Git", "GitLab"],
          link: undefined
        },
        {
          name: "Dự án Flash web",
          period: "08/2024 – 11/2024",
          description: "Là dự án nội bộ, liên kết với YumYum Web để quản lý và theo dõi trạng thái giao hàng. Người dùng gồm shipper và quản trị viên.",
          tasks: [
            "Xây dựng API và giao diện quản lý người dùng và shipper (CRUD).",
            "Xây dựng API tích hợp với YumYum Web để đồng bộ đơn hàng và trạng thái giao vận."
          ],
          technologies: ["ReactJS", "TypeScript", "NestJS", "RESTful APIs", "PostgreSQL", "JWT", "Git", "GitLab"],
          link: undefined
        },
        {
          name: "Dự án YumYum web",
          period: "05/2024 – 08/2024",
          description: "Là trang web nội bộ phục vụ quản lý đơn hàng, khách hàng, sản phẩm, báo cáo phân tích doanh thu,…. được sử dụng bởi quản trị viên và nhân viên nội bộ.",
          tasks: [
            "Thiết kế và phát triển API dùng ExpressJS (RESTful) như API thống kê doanh thu, đơn hàng và sản phẩm bán chạy.",
            "Viết giao diện web với ReactJS như: trang báo cáo, cài đặt tích điểm,…."
          ],
          technologies: ["ReactJS", "TypeScript", "Node.js (ExpressJS)", "RESTful APIs", "Redis", "PostgreSQL", "GitHub", "GitLab"],
          link: undefined
        }
      ]
    },
    {
      company: "Công ty TNHH BUBOBOT",
      role: "Freelancer Developer Fullstack",
      period: "11/2024 – Hiện tại",
      projects: [
        {
          name: "Dự án BUBOBOT web",
          period: "11/2024 – Hiện tại",
          description: "Bubobot là một ứng dụng web cho phép người dùng theo dõi trạng thái hoạt động của các website thông qua URL. Hệ thống sẽ kiểm tra phản hồi từ các URL đã đăng ký và tự động gửi cảnh báo đến quản trị viên và lập trình viên nếu phát hiện sự cố hoặc không nhận được phản hồi.",
          tasks: [
            "Triển khai và cải tiến tính năng mời thành viên vào team.",
            "Phát triển tính năng gửi thông báo đẩy dùng Firebase.",
            "Nâng cấp tính năng gửi thông báo cảnh báo khi website không phản hồi.",
            "Tích hợp gửi cảnh báo đến các nền tảng như Grafana, Bitrix24,...",
            "Cập nhật hệ thống theo yêu cầu."
          ],
          technologies: ["VueJS", "Javascript", "NodeJS", "WebSocket", "MySQL", "Firebase", "Git", "GitLab"],
          link: "https://app.bubobot.com/"
        }
      ]
    },
    {
      company: "Công ty cổ phần Viet Dynamic",
      role: "Kĩ sư tự động hoá",
      period: "11/2021 – 07/2023",
      description: "Tham gia thiết kế bản vẻ điện và lập trình PLC cho hệ thống điều khiển tự động, thi công và bảo trì hệ thống điện và điều khiển trong các dây chuyền sản xuất tự động",
      projects: []
    }
  ]
};

const Experience = () => {
  const { language } = useLanguage();
  const currentExperience = workExperience[language];

  return (
    <section id="experience" className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="section-title text-center">{language === 'en' ? 'Work Experience' : 'Kinh nghiệm làm việc'}</h2>
      <div className="relative mt-12">
        <div className="timeline-connector absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
        {currentExperience.map((job, jobIndex) => (
          <div key={jobIndex} className={`flex items-center w-full mb-8 ${jobIndex % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2"></div>
            <div className={`w-1/2 px-4 ${jobIndex % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <div className="experience-card">
                <div className="timeline-dot"></div>
                <h4 className="text-lg md:text-xl font-bold text-green-300">{job.company}</h4>
                <p className="text-md text-gray-400">{job.role}</p>
                <p className="text-sm text-gray-500 mb-4">{job.period}</p>
                {job.description && (
                  <p className="text-base text-gray-300 mb-4">{job.description}</p>
                )}
                {job.projects.length > 0 && (
                  <div className="space-y-4 mt-4">
                    {job.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="project-card">
                        <h5 className="text-md font-semibold text-green-400 mb-2">{project.name}</h5>
                        <p className="text-xs text-gray-400 mb-2">{project.period}</p>
                        <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                        <div className="mb-3">
                          <h6 className="text-sm font-semibold text-green-400 mb-2">{language === 'en' ? 'Tasks:' : 'Công việc thực hiện:'}</h6>
                          <ul className="list-disc list-inside space-y-1 text-left">
                            {project.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="text-xs text-gray-300">{task}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-2">
                          <h6 className="text-sm font-semibold text-green-400 mb-2">{language === 'en' ? 'Technologies:' : 'Công nghệ:'}</h6>
                          <div className="flex flex-wrap gap-1 justify-start">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-green-800 px-2 py-1 rounded text-xs text-white">{tech}</span>
                            ))}
                          </div>
                        </div>
                        {project.link && (
                          <div className="text-left">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-400 text-xs hover:underline">
                              {language === 'en' ? 'Link:' : 'Link web:'} {project.link}
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
