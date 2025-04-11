import React, { useState } from "react";
import "./Projects.css"; // Özel stiller için (gerekirse)
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import edildiğinden emin olun

// Proje Verileri (Aynı kalabilir)
const initialProjectsData = [
  {
    id: 4,
    title: "Restoran Sipariş Sitesi (React-Next JS)",
    shortSummary:
      "React ve Next.js kullanarak geliştirilen fast food restoranı web sitesi",
    detailedDescription:
      "Kullanıcıların sipariş vermesini ve yöneticilerin ürünleri yönetmesini sağlıyor.Tailwind CSS ile duyarlı tasarım oluşturulurken, Formik ve Yup ile formdoğrulaması uygulandı. Redux Toolkit ile durum yönetimi sağlandı, veri tabanı işlemleri MongoDB ile gerçekleştirildi ve kimlik doğrulama Next.jsüzerinde geliştirildi. Bu proje, kullanıcı deneyimini ön planda tutarak hızlı ve etkili bir sipariş süreci sunuyor.",
    images: [
      "/images/Ekran görüntüsü 2024-12-06 153619.png",
      "/images/Ekran görüntüsü 2024-12-06 153714.png",
      "/images/Ekran görüntüsü 2024-12-06 153737.png",
      "/images/Ekran görüntüsü 2024-12-06 153854.png",
      "/images/Ekran görüntüsü 2024-12-06 154052.png",
      "/images/Ekran görüntüsü 2024-12-06 154228.png",
      "/images/Ekran görüntüsü 2024-12-06 210236.png",
    ],
    technologies: [
      "React",
      "Next Js",
      "CSS",
      " MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
    repoLink: "https://github.com/ercanMZR/NextJs-FoodOrdering.git",
    thumbnail: "/images/Ekran görüntüsü 2024-12-06 153619.png",
  },
  {
    id: 2,
    title: "Blog Platformu -MVC Projesi",
    shortSummary:
      "ProjesiKullanıcıların blog paylaşabildiği, yorum yapabildiği ve mesajlaşabildiği,Admin ve Yazar panellerine sahip bir platform geliştirdim.",
    detailedDescription:
      "Kimlik doğrulama & rol bazlı yetkilendirme | Blog yönetimi, yorum,beğeni, mesajlaşma | CRUD işlemleri, arama ve profil yönetimi |FluentValidation ile veri doğrulama | Şifremi Unuttum özelliği Sistem, N Katmanlı Mimari ve Repository Pattern ile geliştirildi. ",
    images: [
      "/images/blogwebfoto/2.jpg",
      "/images/blogwebfoto/3.jpg",
      "/images/blogwebfoto/4.jpg",
      "/images/blogwebfoto/5.jpg",
      "/images/blogwebfoto/6.jpg",
      "/images/blogwebfoto/7.jpg",
      "/images/blogwebfoto/9.jpg",
    ],
    technologies: [
      ".NET Core",
      "Entity Framework",
      "SQL Server",
      "Next.js",
      "HTML",
      "JavaScript",
      "CSS",
      "Bootstrap",
    ],
    repoLink: "https://github.com/ercanMZR/MVC_BlogProject_Camp.git",
    thumbnail: "/images/blogwebfoto/3.jpg",
  },
  {
    id: 5,
    title: "Library Management System",
    shortSummary:
      "Bu proje, bir Kütüphane Yönetim Sistemi geliştirilmesi amacıyla tasarlanmıştır.",
    detailedDescription:
      "Projede, kitap bilgilerini yönetmek için bir ASP.NET Core Web API geliştirilmiştir. Proje, modern yazılım geliştirme prensipleri olan Katmanlı Mimari, Generic Repository, Unit of Work ve Result Pattern kullanılarak yapılandırılmıştır. Bu bir backedend uygulamasıdır ve kullanıcı arayüzü için bir frontend uygulaması geliştirilmemiştir.",
    images: ["/david-gavi-Ijx8OxvKrgM-unsplash.jpg"],
    technologies: ["Asp.Net Core", "WebApi", "C#", "SQL Server"],
    repoLink:
      "https://github.com/ercanMZR/Library-Management-YMYP-ASSESSMENT_1-.git",
    thumbnail: "/david-gavi-Ijx8OxvKrgM-unsplash.jpg",
  },
  {
    id: 6,
    title: "Ürün Tanıtım Projesi",
    shortSummary:
      "Projesi.JWT ile güvenli kimlik doğrulama sağlayan bu ürün tanıtım uygulaması,",
    detailedDescription:
      "JWT ile güvenli kimlik doğrulama sağlayan bu ürün tanıtım uygulaması,ürün listesi, ürün detayları, arama, kullanıcı listesi, kullanıcı detayları vebeğeniler gibi sayfalardan oluşan bir frontend uygulamasıdır. Proje, kullanıcıların ürünleri görüntülemesine, arama yapmasına ve beğenmesine olanak tanırken, yöneticilerin kullanıcıları yönetmesini sağlar. Kullanıcı dostu arayüzü ve modern tasarımı ile dikkat çeker.",
    images: [
      "/images/tpescriptlogin.png",
      "/images/typescriptdetails.png",
      "/images/typescriptporducts.png",
    ],
    technologies: ["React", "Typescript", "Bootstrap"],
    repoLink: "https://github.com/ercanMZR/2025_ReactProject.git",
    thumbnail: "/images/typescriptdetails.png",
  },
  {
    id: 1,
    title: "Portfolyo Web Sitesi",
    shortSummary:
      "Kişisel projelerimi sergilediğim modern ve responsive portfolyo sitesi.",
    detailedDescription:
      "React ve Bootstrap kullanarak geliştirdiğim bu portfolyo sitesi, projelerimi, yeteneklerimi ve hakkımdaki bilgileri içeriyor. Responsive tasarımı sayesinde tüm cihazlarda sorunsuz görüntülenir.",
    images: ["Ekran görüntüsü 2025-04-07 004554.png"],
    technologies: ["React", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    projectLink: "https://example.com/portfolio",
    repoLink: "https://github.com/kullanici/portfolio",
    thumbnail: "Ekran görüntüsü 2025-04-07 004554.png",
  },

  {
    id: 3,
    title: "Kurs Satış Platformu",
    shortSummary:
      "ASP.NET Core API ve MVC kullanarak kurs yönetimi, sipariş ve ödeme süreçlerini yönettik.",
    detailedDescription:
      "ASP.NET Core API ve MVC kullanarak kurs yönetimi, sipariş ve ödeme süreçlerini yönettik. JWT tabanlı kimlik doğrulama veyetkilendirme sağladık. Mesajlaşma & Önbellekleme: RabbitMQ ile sipariş ve bildirim süreçlerini yönettik, Redis ile performansı artırdık. Veritabanı: SQL Server ve MongoDB kullanarak hibrit veri yönetimi sağladık.",
    images: ["/david-gavi-Ijx8OxvKrgM-unsplash.jpg"],
    technologies: [
      ".NET Core",
      "C#",
      "Html",
      "Bootstrap",
      "RabbitMQ",
      "Redis",
      "SQL Server",
    ],
    repoLink: "https://github.com/ercanMZR/Udemy.Web.git",
    thumbnail: "/david-gavi-Ijx8OxvKrgM-unsplash.jpg",
  },
  {
    id: 7,
    title: "Etkinlik Konser Bilet Sitesi",
    shortSummary:
      "Bu proje, kullanıcıların etkinlikleri listeleyebileceği, detaylarını görüntüleyebileceği ve filtreleme yapabileceği bir etkinlik yönetim sistemidir. Proje, modern web teknolojileri kullanılarak geliştirilmiştir ve güvenli kullanıcı işlemleri için JSON Web Token (JWT) ile güvenlik önlemleri sağlanmıştır.",
    detailedDescription:
      "Etkinlik Yönetim Sistemi projesinde, kullanıcıların etkinlikleri kategorilere göre listeleyebileceği, detaylarını görüntüleyebileceği ve filtreleyebileceği bir platform geliştirdim. Projede, her etkinlik için tarih, tür, mekan ve şehir gibi filtreleme seçenekleri sunulmuş ve etkinlikler Google Maps entegrasyonu ile harita üzerinde gösterilmiştir. .NET teknolojileri kullanılarak API geliştirilmiş ve JSON Web Token (JWT) ile güvenli kullanıcı doğrulama işlemleri yapılmıştır. Ayrıca, etkinliklerin kategorilere göre düzenlenmesi, veri doğrulama (validation) ve backend/frontend entegrasyon testleri gibi özellikler eklenmiştir.",
    images: ["Yazılım Yaşam Döngüsü.jpg"],
    technologies: [
      "C #",
      "ASP.NET Core",
      "Web API",
      "Entity Framework",
      "SQL Server",
      "HTML",
      "CSS",
      "JWT",
    ],
    repoLink: "https://github.com/ercanMZR/EventProjectAPI.git",
    thumbnail: "Yazılım Yaşam Döngüsü.jpg",
  },
  {
    id: 8,
    title: "Restoran web Sayfası ",
    shortSummary:
      "Html, CSS ve JavaScript kullanarak geliştirilen fast food restoranı web sitesi ,Responsive tasarım ve kullanıcı dostu arayüz ile dikkat çekiyor.",
    detailedDescription:
      "HTML semantiği ve yapısal öğelerin kullanımı.CSS seçicileri ve özelliklerinin etkin kullanımı.Temel web tasarımı ve kullanıcı arayüzü prensipleri",
    images: [
      "hamburger1.png",
      "hamburger2.png",
      "hamburger3.png",
      "hamburger4.png",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/ercanMZR/HTML-CSS_RESTAURANTWEBPAGE.git",
    thumbnail: "hamburger1.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsData] = useState(initialProjectsData);

  const renderModalContent = (project) => {
    if (!project) return null;

    return (
      <div
        className="modal fade show"
        style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{project.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setSelectedProject(null)}
              ></button>
            </div>
            <div className="modal-body">
              {project.images && project.images.length > 0 && (
                <div
                  id={`projectCarousel-${project.id}`}
                  className="carousel slide mb-3"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {project.images.map((imgUrl, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={imgUrl}
                          className="d-block w-100"
                          alt={`${project.title} - Resim ${index + 1}`}
                          style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#projectCarousel-${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#projectCarousel-${project.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>
              )}
              <p>{project.detailedDescription}</p>
              <div className="mb-3">
                <h5>Kullanılan Teknolojiler:</h5>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="badge bg-primary me-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2"
                  >
                    Projeyi Gör
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Kodu Gör
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Projelerim</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col">
              <div
                className="card h-100 project-card"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={
                    project.thumbnail ||
                    "https://via.placeholder.com/400x250?text=Proje"
                  }
                  className="card-img-top"
                  alt={`${project.title} Proje Resmi`}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.shortSummary}</p>
                  <div>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-muted ms-1">...</span>
                    )}
                  </div>
                  <button className="btn btn-primary mt-3">
                    Detayları Gör
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && renderModalContent(selectedProject)}
    </section>
  );
};

export default Projects;
