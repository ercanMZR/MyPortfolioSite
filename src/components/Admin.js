import React, { useState, useEffect } from "react";

function Admin() {
  const [adminData, setAdminData] = useState({
    projects: [],
    skills: [],
  });

  useEffect(() => {
    const storedData = localStorage.getItem("adminData");
    if (storedData) {
      setAdminData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }, [adminData]);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tech: "",
    link: "",
  });

  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 0,
  });

  const handleInputChange = (e, itemType) => {
    const { name, value } = e.target;
    if (itemType === "project") {
      setNewProject({ ...newProject, [name]: value });
    } else {
      setNewSkill({ ...newSkill, [name]: value });
    }
  };

  const handleSubmit = (e, itemType) => {
    e.preventDefault();
    if (itemType === "project") {
      setAdminData({
        ...adminData,
        projects: [...adminData.projects, { ...newProject, id: Date.now() }],
      });
      setNewProject({
        title: "",
        description: "",
        imageUrl: "",
        tech: "",
        link: "",
      });
    } else {
      setAdminData({
        ...adminData,
        skills: [...adminData.skills, { ...newSkill, id: Date.now() }],
      });
      setNewSkill({ name: "", level: 0 });
    }
  };

  const handleDelete = (id, itemType) => {
    setAdminData({
      ...adminData,
      [itemType]: adminData[itemType].filter((item) => item.id !== id),
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Proje Ekleme Formu */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Proje Ekle</h2>
        <form
          onSubmit={(e) => handleSubmit(e, "projects")}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Proje Başlığı"
            value={newProject.title}
            onChange={(e) => handleInputChange(e, "project")}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Resim URL"
            value={newProject.imageUrl}
            onChange={(e) => handleInputChange(e, "project")}
            className="border p-2"
          />
          <textarea
            name="description"
            placeholder="Açıklama"
            value={newProject.description}
            onChange={(e) => handleInputChange(e, "project")}
            className="border p-2"
            rows="3"
            required
          />
          <input
            type="text"
            name="tech"
            placeholder="Teknolojiler (virgülle ayırın)"
            value={newProject.tech}
            onChange={(e) => handleInputChange(e, "project")}
            className="border p-2"
          />
          <input
            type="url"
            name="link"
            placeholder="Proje Linki"
            value={newProject.link}
            onChange={(e) => handleInputChange(e, "project")}
            className="border p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Proje Ekle
          </button>
        </form>
      </div>

      {/* Yetenek Ekleme Formu */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Yetenek Ekle</h2>
        <form
          onSubmit={(e) => handleSubmit(e, "skills")}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Yetenek Adı"
            value={newSkill.name}
            onChange={(e) => handleInputChange(e, "skill")}
            className="border p-2"
            required
          />
          <input
            type="number"
            name="level"
            placeholder="Seviye (0-100)"
            value={newSkill.level}
            onChange={(e) => handleInputChange(e, "skill")}
            className="border p-2"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Yetenek Ekle
          </button>
        </form>
      </div>

      {/* Proje Listesi */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Projeler</h2>
        <ul>
          {adminData.projects.map((project) => (
            <li
              key={project.id}
              className="mb-2 p-2 border rounded flex justify-between items-center"
            >
              <div>
                <strong>{project.title}</strong> - {project.description}
              </div>
              <button
                onClick={() => handleDelete(project.id, "projects")}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Yetenek Listesi */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Yetenekler</h2>
        <ul>
          {adminData.skills.map((skill) => (
            <li
              key={skill.id}
              className="mb-2 p-2 border rounded flex justify-between items-center"
            >
              <div>
                <strong>{skill.name}</strong> - Seviye: {skill.level}
              </div>
              <button
                onClick={() => handleDelete(skill.id, "skills")}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
