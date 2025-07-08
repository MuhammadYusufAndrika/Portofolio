import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      /* More contrast: deeper blue and lighter blue gradient */
      background: linear-gradient(135deg, #0a1833 0%, #23ceff 100%);
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #f8fafd;
      box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.18);
      position: relative;
      overflow: hidden;
      &:hover {
        transform: translateY(-5px) scale(1.03);
        background: linear-gradient(135deg, #212121 0%, #23ceff 100%);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
        color: #fff;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        color: #eaf6ff;
        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

      .body img {
        width: 100%;
        height: 16rem;
        max-width: 100%;
        max-height: 16rem;
        object-fit: cover;
        display: block;
        margin-bottom: 1.5rem;
        border-radius: 0.8rem;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.7;
          color: #eaf6ff;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
