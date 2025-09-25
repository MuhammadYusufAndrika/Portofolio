import styled from "styled-components";

export const Container = styled.section`
  margin-top: 6rem;
  padding: 0 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  position: relative;

  h2 {
    color: var(--green);
    font-size: 3rem;
    text-align: center;
  }

  .timeline-container {
    width: 100%;
    position: relative;
    margin: 2rem 0;
  }

  .timeline-track {
    position: absolute;
    left: 140px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, transparent, var(--green), transparent);
    opacity: 0.7;
  }

  .experiences {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    position: relative;
  }

  .experience-card {
    display: flex;
    background: linear-gradient(225deg, var(--primary) 0%, var(--secondary) 100%);
    padding: 1.5rem 2rem;
    border-radius: 1.2rem;
    position: relative;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(35, 206, 107, 0.3);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: translateY(-5px);
    }
  }

  .timeline-dot {
    position: absolute;
    left: 140px;
    top: 30px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--green);
    transform: translateX(-50%);
    border: 2px solid var(--primary);
    box-shadow: 0 0 10px rgba(35, 206, 107, 0.6);
    z-index: 10;
  }

  .experience-period {
    flex: 0 0 120px;
    padding-right: 1rem;
    font-weight: 700;
    color: var(--green);
    font-size: 1.1rem;
    letter-spacing: -0.5px;
    margin-left: 30px;
  }

  .experience-content {
    flex: 1;

    h3 {
      color: var(--green);
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h4 {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-weight: normal;
    }

    p {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1.2rem;
  }

  .skill-tag {
    background: rgba(35, 206, 107, 0.15);
    color: var(--green);
    padding: 0.35rem 0.85rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid var(--green);
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    &:hover {
      background: rgba(35, 206, 107, 0.25);
      box-shadow: 0 4px 8px rgba(35, 206, 107, 0.3);
    }
  }

  @media (max-width: 960px) {
    padding: 0 4rem;

    .timeline-track {
      left: 30px;
    }

    .timeline-dot {
      left: 30px;
    }

    .experience-card {
      flex-direction: column;
      margin-left: 20px;
    }

    .experience-period {
      flex: 0 0 auto;
      margin-bottom: 1rem;
      padding-right: 0;
      margin-left: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;

    h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1rem;

    h2 {
      font-size: 2rem;
    }

    .experience-content {
      h3 {
        font-size: 1.2rem;
      }

      h4 {
        font-size: 1rem;
      }
    }
  }
`;
