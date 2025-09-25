import React from "react";
// import styled from "styled-components"; // Uncomment if you want to use styled-components
// import { Container } from "./Style"; // Uncomment if you add styles

// Example certificate data
const certificates = [
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    date: "June 2024",
    link: "https://www.linkedin.com/in/muhammadyusufandrika/",
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React - Dicoding",
    issuer: "Dicoding",
    date: "May 2024",
    link: "https://www.linkedin.com/in/muhammadyusufandrika/",
  },
  {
    title: "Machine Learning",
    issuer: "Coursera",
    date: "April 2024",
    link: "https://www.linkedin.com/in/muhammadyusufandrika/",
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
        
        {/* More Certificates Button */}
        <div
          style={{
            display: "flex",
            minWidth: 260,
            maxWidth: 320,
            background: "linear-gradient(135deg, #23ce6b 0%, #1e3c72 100%)",
            color: "#fff",
            borderRadius: "1.2rem",
            padding: "2rem 1.5rem",
            textDecoration: "none",
            boxShadow: "0 2px 12px 0 rgba(35, 206, 107, 0.15)",
            transition: "transform 0.2s, box-shadow 0.2s",
            border: "2px solid #23ce6b",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow = "0 6px 24px 0 rgba(35, 206, 107, 0.25)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 12px 0 rgba(35, 206, 107, 0.15)";
          }}
          onClick={() => window.open("https://www.linkedin.com/in/muhammadyusufandrika/details/certifications/", "_blank")}
        >
          <div>
            <h3 style={{ 
              color: "#fff", 
              marginBottom: "0.5rem",
              background: "linear-gradient(90deg, #fff 0%, #23ce6b 50%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700
            }}>
              View More Certificates
            </h3>
            <p style={{ margin: 0, fontWeight: 500, opacity: 0.9 }}>Click to see all my certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
