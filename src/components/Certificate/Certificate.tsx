import React from "react";
// import styled from "styled-components"; // Uncomment if you want to use styled-components
// import { Container } from "./Style"; // Uncomment if you add styles

// Example certificate data
const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "Coursera",
    date: "June 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/EXAMPLE1",
  },
  {
    title: "Frontend Web Development",
    issuer: "Dicoding",
    date: "May 2024",
    link: "https://www.dicoding.com/certificates/EXAMPLE2",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "April 2024",
    link: "https://freecodecamp.org/certification/EXAMPLE3",
  },
];

export function Certificate() {
  return (
    <section id="certificate" style={{ margin: "4rem 0 0 0", padding: "2rem 0", background: "#101a2b", borderRadius: "2rem", boxShadow: "0 4px 24px 0 rgba(35, 206, 107, 0.10)" }}>
      <h2 style={{ textAlign: "center", color: "#23ce6b", marginBottom: "2rem" }}>Certificates</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              minWidth: 260,
              maxWidth: 320,
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              color: "#fff",
              borderRadius: "1.2rem",
              padding: "2rem 1.5rem",
              textDecoration: "none",
              boxShadow: "0 2px 12px 0 rgba(35, 206, 107, 0.10)",
              transition: "transform 0.2s, box-shadow 0.2s",
              border: "1.5px solid #23ce6b",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ color: "#23ce6b", marginBottom: "0.5rem" }}>{cert.title}</h3>
            <p style={{ margin: 0, fontWeight: 500 }}>{cert.issuer}</p>
            <p style={{ margin: 0, fontSize: "1.2rem", color: "#b2c2d6" }}>{cert.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
