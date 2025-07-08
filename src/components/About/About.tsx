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

export function About() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const direction = useRef<'up' | 'down'>('down');

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        if (window.scrollY > lastScrollY.current) {
          direction.current = 'down';
        } else if (window.scrollY < lastScrollY.current) {
          direction.current = 'up';
        }
        lastScrollY.current = window.scrollY;
        controls.start(direction.current === 'down' ? 'visibleDown' : 'visibleUp');
      } else {
        controls.start('hidden');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <motion.div
        className="about-text"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2>About me</h2>
        <p>
          Hi there! I'm Yusuf Andrika, a website developer with a passion for
          creating custom online experiences for my clients. With a skill set
          including HTML, CSS, JavaScript, and Php, I have the tools to bring
          any website vision to life.
        </p>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p></p>
        </div>
        <p>
          So if you're in need of a new website or just looking to revamp your
          current online presence, I'd love to chat and see how I can help.
          Let's bring your website dreams to reality together!
        </p>
        <h3>Here are my main skills:</h3>
        <div className="hard-skills">
          <div className="hability"><img src={wordpressIconUrl} alt="Wordpress" /></div>
          <div className="hability"><img src={shopifyIconUrl} alt="Shopify" /></div>
          <div className="hability"><img src={reactIconUrl} alt="React" /></div>
          <div className="hability"><img src={typescriptIconUrl} alt="Typescript" /></div>
          <div className="hability"><img src={vueIconUrl} alt="Vue" /></div>
          <div className="hability"><img src={nodeIconUrl} alt="Node" /></div>
          <div className="hability"><img src={htmlIconUrl} alt="HTML" /></div>
          <div className="hability"><img src={cssIconUrl} alt="CSS" /></div>
          <div className="hability"><img src={bootstrapIconUrl} alt="Bootstrap" /></div>
          <div className="hability"><img src={jsIconUrl} alt="JavaScript" /></div>
        </div>
      </motion.div>
      <div className="about-image">
        <img src={Yusufandrika} alt="Yusuf Andrika" />
      </div>
    </Container>
  );
}
