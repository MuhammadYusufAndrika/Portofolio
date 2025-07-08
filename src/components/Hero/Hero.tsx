import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ShinyText } from "./ShinyText";
import { Container } from "./styles";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <Container id="home">
      <motion.div className="hero-text" initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, type: "spring", stiffness: 60, damping: 14 }}>
        <motion.p initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 70, damping: 12 }}>
          Hello <motion.img src={Hello} alt="Hello" width="20px" style={{ display: "inline-block", verticalAlign: "middle" }} animate={{ rotate: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} /> I'm
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 60, damping: 13 }}>
          <ShinyText>Muhammad Yusuf Andrika</ShinyText>
        </motion.h1>
        <motion.h3 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 60, damping: 13 }}>
          Web Developer
        </motion.h3>
        <motion.p className="small-resume" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 60, damping: 13 }}>
          Student at Amikom Yogyakarta University
        </motion.p>
        <BrowserRouter>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 60, damping: 13 }}>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </motion.div>
        </BrowserRouter>
        <motion.div className="social-media" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7, type: "spring", stiffness: 60, damping: 13 }}>
          <motion.a href="https://www.linkedin.com/in/muhammadyusufandrika/" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2 }}>
            <img src={linkedin} alt="Linkedin" />
          </motion.a>
          <motion.a href="https://github.com/MuhammadYusufAndrika" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2 }}>
            <img src={githubIcon} alt="GitHub" />
          </motion.a>
          <motion.a href="https://api.whatsapp.com/send/?phone=%2B6285669812501&text=Hello+Yusuf" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2 }}>
            <img src={whatsapp} alt="Whatsapp" />
          </motion.a>
          <motion.a href="https://t.me/Yusufandrika" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2 }}>
            <img src={telegram} alt="telegram" />
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className="hero-image" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, duration: 1, type: "spring", stiffness: 60, damping: 13 }}>
        <motion.img src={Illustration} alt="Ilustração" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 1, type: "spring", stiffness: 60, damping: 13 }} />
      </motion.div>
    </Container>
  );
}
