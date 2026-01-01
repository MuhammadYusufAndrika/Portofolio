import { Container } from "./styles";
import Yusufandrika from "../../assets/22_11_49011.png";
import wordpressIconUrl from "../../assets/wordpress.svg";
import shopifyIconUrl from "../../assets/shopify.svg";
import htmlIconUrl from "../../assets/html-icon.svg";
import cssIconUrl from "../../assets/css-icon.svg";
import jsIconUrl from "../../assets/js-icon.svg";
import nodeIconUrl from "../../assets/node-icon.svg";
import reactIconUrl from "../../assets/react-icon.svg";
import typescriptIconUrl from "../../assets/typescript-icon.svg";
import vueIconUrl from "../../assets/vue-icon.svg";
import bootstrapIconUrl from "../../assets/bootstrap-icon.svg";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import VariableProximity from "./VariableProximity";

export function About() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);
  const direction = useRef<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        if (window.scrollY > lastScrollY.current) {
          direction.current = "down";
        } else if (window.scrollY < lastScrollY.current) {
          direction.current = "up";
        }
        lastScrollY.current = window.scrollY;
        controls.start(direction.current === "down" ? "visibleDown" : "visibleUp");
      } else {
        controls.start("hidden");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visibleDown: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }, // cubic-bezier
    },
    visibleUp: {
      opacity: 1,
      y: -20,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <Container id="about">
      <motion.div className="about-text" ref={ref} initial="hidden" animate={controls} variants={variants}>
        <h2>About me</h2>
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={`I am an Informatics graduate candidate with a concentration in Database Programming who has completed the thesis defense and is currently awaiting graduation (yudisium). I have strong self-confidence, a high work ethic, and solid experience in web development, particularly in building efficient, scalable, and well-structured web-based systems. With a strong programming 
            foundation, I am capable of analyzing problems critically and delivering practical, solution-oriented implementations that align with business and technical requirements. I am highly motivated, adaptable, and ready to contribute effectively in dynamic IT environments. \n\nHere are my main skills:`}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />{" "}
          <br /> <br />
          {/* <VariableProximity
            label={`Hi there! I'm Yusuf Andrika, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and Php, I have the tools to bring any website vision to life.\n\nSo if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!\n\nHere are my main skills:`}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          /> */}
          <div className="hard-skills" style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1.2rem", justifyContent: "center" }}>
            {[
              { src: wordpressIconUrl, alt: "Wordpress" },
              { src: shopifyIconUrl, alt: "Shopify" },
              { src: reactIconUrl, alt: "React" },
              { src: typescriptIconUrl, alt: "Typescript" },
              { src: vueIconUrl, alt: "Vue" },
              { src: nodeIconUrl, alt: "Node" },
              { src: htmlIconUrl, alt: "HTML" },
              { src: cssIconUrl, alt: "CSS" },
              { src: bootstrapIconUrl, alt: "Bootstrap" },
              { src: jsIconUrl, alt: "JavaScript" },
            ].map((icon, idx) => (
              <div
                className="hability super-anim-logo"
                key={icon.alt}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #23ce6b 0%, #1e3c72 100%)",
                  boxShadow: "0 2px 16px 0 rgba(35, 206, 107, 0.15)",
                  width: 60,
                  height: 60,
                  transition: "transform 0.35s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.35s, background 0.35s",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.18) rotate(-8deg)";
                  e.currentTarget.style.boxShadow = "0 6px 32px 0 #23ce6b88, 0 0 0 8px #1e3c7233";
                  e.currentTarget.style.background = "radial-gradient(circle at 60% 40%, #fff 0%, #23ce6b 60%, #1e3c72 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  e.currentTarget.style.boxShadow = "0 2px 16px 0 rgba(35, 206, 107, 0.15)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #23ce6b 0%, #1e3c72 100%)";
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  style={{
                    width: 32,
                    height: 32,
                    filter: "drop-shadow(0 2px 8px #23ce6b55)",
                    transition: "filter 0.3s",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="about-image">
        <img src={Yusufandrika} alt="Yusuf Andrika" />
      </div>
    </Container>
  );
}
