// App.tsx
import React from "react";
import { createGlobalStyle } from "styled-components";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "react-toastify/dist/ReactToastify.css";

// Pisahkan definisi global style
const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light {
      body {
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }
      .logo {
        color: var(--black);
      }
      header.header-fixed {
        transition: 0.5s;
        background-color: #f5f5f550;
        a {
          transition: 0.5s;
          color: black;
        }
        .menu,
        .menu:before,
        .menu:after {
          background-color: var(--black);
        }
        .menu.active {
          background-color: rgba(555, 555, 555, 0);
        }
      }
      footer.footer {
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.1);
        color: var(--black);
      }
      form {
        input,
        textarea {
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder {
            transition: 0.5s;
            color: var(--black);
          }
        }
      }
    }
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--black);
    color: #fff;
    font-family: 'Red Hat Display', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #fff;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover {
      filter: brightness(0.8);
    }
    &:disabled {
      filter: brightness(0.8);
      cursor: not-allowed;
    }
  }

  .logo {
    font-size: 3rem;
    color: #fff;
  }

  ul, li {
    list-style: none;
  }
`;

// ✅ Bungkus sebagai komponen React
const GlobalStyleComponent: React.FC = () => {
  return <GlobalStyle />;
};

function AnimatedBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;

    canvas.width = width;
    canvas.height = height;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.5 + 1.5,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      alpha: Math.random() * 0.5 + 0.3,
      color: `rgba(${Math.floor(Math.random() * 40)},${Math.floor(Math.random() * 80 + 80)},${Math.floor(Math.random() * 180 + 60)},0.7)`,
    }));

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    window.addEventListener("resize", handleResize);

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0a1833");
      gradient.addColorStop(1, "#01203a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let p of particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = "#23ceff";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      animationId = window.requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#0a1833",
      }}
    />
  );
}

function App() {
  return (
    <>
      <GlobalStyleComponent />
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
