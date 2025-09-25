import { Container } from "./styles";
import { motion, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

// Example experience data
const experiences = [
  {
    title: "Laboratory Assistant",
    company: "Forum Asisten Amikom Yogyakarta University",
    period: "Agustus 2024 - January 2025",
    description:
      "As a laboratory assistant, my job is to assist the lecturer during the practicum session. Sometimes, I was also assigned to fill in for the lecturers when they were absent. In this role, I am required to facilitate effective communication between the lecturer and other students and be able to help provide understanding of the material being taught.",
    skills: ["Laravel", "C#", "C", "CSS"],
  },
  {
    title: "Fullstack Developer HMIF",
    company: "Himpunan Mahasiswa Informatika",
    period: "Maret 2024 - July 2024",
    description: "Built responsive user interfaces for web applications. The web application was developed using Laravel and Bootstrap.",
    skills: ["Laravel", "JavaScript", "CSS", "Bootstrap"],
  },
  {
    title: "System Analyst Intern",
    company: "PT Dahana Subang",
    period: "September 2024 - Desember 2024",
    description:
      "Conducted requirement gathering and system analysis to support business processes. Designed use case diagrams, data flow diagrams, and prepared system documentation. Assisted in testing, evaluating, and providing recommendations for system improvements while collaborating with developers and end-users.",
    skills: [
      "Requirement Analysis",
      "Business Process Modeling (DFD, Use Case)",
      "Database Design (ERD, SQL)",
      "System Documentation (SRS, BRD, User Manual)",
      "UML",
    //   "Software Testing (UAT, Black-box)",
      "Communication & Collaboration",
      "Analytical Thinking",
    ],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  return (
    <Container id="experience">
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
        My Experience
      </motion.h2>

      <motion.div className="timeline-container" ref={containerRef} variants={containerVariants} initial="hidden" animate={controls}>
        <div className="timeline-track"></div>

        <div className="experiences">
          {experiences.map((exp, index) => (
            <motion.div
              className="experience-card"
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(35, 206, 107, 0.2)",
                borderColor: "#23ce6b",
              }}
            >
              <div className="timeline-dot"></div>
              <div className="experience-period">
                <motion.span whileHover={{ scale: 1.1, color: "#fff" }} transition={{ type: "spring", stiffness: 300 }}>
                  {exp.period}
                </motion.span>
              </div>
              <motion.div className="experience-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 * index }}>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="skills">
                  {exp.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="skill-tag"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(35, 206, 107, 0.3)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
