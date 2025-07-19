import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91,220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <section className="heroSection" style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        {/* Title Block */}
        <div className="title" style={{ flex: "1", minWidth: "300px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Find a job that suits</h1>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>your interests and skills</h1>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Discover opportunities that align with your passion and potential.
             Whether you're a fresh graduate or an experienced professional, 
             we help you connect with companies that value your unique skills and 
             career goals.
          </p>
        </div>

        <div className="image" style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
          <iframe
            src="/cube.html"
            width="90%"
            height="300"
            title="3D Cube"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>

      <div className="details" style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {details.map((element) => (
          <div
            className="card"
            key={element.id}
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              minWidth: "180px",
              textAlign: "center",
            }}
          >
            <div className="icon" style={{ fontSize: "2rem", color: "#007bff", marginBottom: "0.5rem" }}>
              {element.icon}
            </div>
            <div className="content">
              <p style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0" }}>{element.title}</p>
              <p style={{ color: "#777", margin: "0.25rem 0 0" }}>{element.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
