import { Container } from "./styles";
import githubIconUrl from "../../assets/github.svg";
import externalLinkUrl from "../../assets/external-link.svg";
import { motion, AnimatePresence } from "framer-motion";
import spnweb from "../../assets/SPNWEB.png";
import himpunanwebsite from "../../assets/himpunanweb.png";
import logbookweb from "../../assets/logbookweb.png";
import simikoweb from "../../assets/simiko.png";
import financialapp from "../../assets/financialapp.png";
import recomendationapp from "../../assets/recomendation.png";
import todolist from "../../assets/todolist.png";
import stockprice from "../../assets/stockprice.png";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <AnimatePresence>
          {/* Project 1 */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika/SPN-Web.git" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a href="https://github.com/MuhammadYusufAndrika/SPN-Web.git" target="_blank" rel="noreferrer">
                <img 
                  src={spnweb} 
                  alt="SPN Web" 
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </a>
              <h3>Fullstack Company Profile: Surya Prima Net</h3>
              <p> Creating a dynamic Company Profile Website using Laravel 11 for Backend and FrontEnd using Laravel Blade by using Bootstrap 5.3 for styling. Migrations and models are used to manage data in the database </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel 11</li>
                <li>Bootstrap 5.3</li>
                <li>MysqlDB</li>
              </ul>
            </footer>
          </motion.div>

          {/* Project 2 */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika/Himpunan-Website.git" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a href="https://github.com/MuhammadYusufAndrika/Himpunan-Website.git" target="_blank" rel="noreferrer">
                <img
                  src={himpunanwebsite}
                  alt="Himpunan Website"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </a>
              <h3>Fullstack: Informatics Student Association Website</h3>
              <p> Creating a dynamic student association Website using Laravel 11 for Backend and FrontEnd using Laravel Blade by using Bootstrap 5.3 for styling. Migrations and models are used to manage data in the database </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel 11</li>
                <li>Bootstrap 5.3</li>
                <li>MysqlDB</li>
              </ul>
            </footer>
          </motion.div>

          {/* Project 3 */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a href="https://gendon-nu.vercel.app/" target="_blank" rel="noreferrer">
                <img
                  src={logbookweb}
                  alt="Logbook Web"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </a>
              <h3>Online Logbook Website</h3>
              <p>I built a modern online logbook with Next.js to help my friend create memory.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next Js</li>
                <li>Tailwind</li>
              </ul>
            </footer>
          </motion.div>

          {/* Project 4 */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a href="https://simiko.software/" target="_blank" rel="noreferrer">
                <img
                  src={simikoweb}
                  alt="Simiko Software"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </a>
              <h3>Simiko Software</h3>
              <p>I served as the Scrum Master for the development of SIMIKO, a student organization management system. In addition to facilitating Scrum processes, I also contributed to some parts of the technical development.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel</li>
                <li>Filament</li>
                <li>Flutter (for user)</li>
              </ul>
            </footer>
          </motion.div>
          
          {/* Project 5 */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika/FinalProject-Uangku-Pemrog" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a href="https://github.com/MuhammadYusufAndrika/FinalProject-Uangku-Pemrog" target="_blank" rel="noreferrer">
                <img
                  src={financialapp}
                  alt="Financial App"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </a>
              <h3>Financial Record App</h3>
              <p>Helping in the development of a financial record app using C# and its UI using the Bunifu UI framework.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C#</li>
                <li>Bunifu UI</li>
                <li>MySQl</li>
              </ul>
            </footer>
          </motion.div>

          
          {/* Project 6 */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika/Tripskuy" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a href="https://github.com/MuhammadYusufAndrika/Tripskuy" target="_blank" rel="noreferrer">
                <img
                  src={recomendationapp}
                  alt="Recommendation App"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </a>
              <h3>Recomendation System</h3>
              <p>Creating a model destination recomendation using python keras .</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Tensor Flow</li>
                <li>Colab</li>
              </ul>
            </footer>
          </motion.div>

          {/* Project 7 */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://stockpricepredictionbbca.streamlit.app/" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a href="https://stockpricepredictionbbca.streamlit.app/" target="_blank" rel="noreferrer">
                <img
                  src={stockprice}
                  alt="Stock Price Prediction"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </a>
              <h3>Stock Price Prediction Website</h3>
              <p>Creating model for stock price prediction and web application focused on post-stock-split analysis using historical stock data from BBCA. Implemented using Python (Scikit-learn) for model development and using streamlit to deploy frontendq.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Streamlit</li>
              </ul>
            </footer>
          </motion.div>


          {/* Project 8 */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <a href="https://github.com/MuhammadYusufAndrika" target="_blank" rel="noreferrer">
                <img
                  src={todolist}
                  alt="Todolist React"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </a>
              <h3>Todolist React</h3>
              <p>Creating A simple Todolist using react</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
              </ul>
            </footer>
          </motion.div>



          {/* Project  */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika/Smart-Pet-Feeder-.git" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Smart Pet Feeder</h3>
              <p>Using C proggramming languange and with IOT</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C</li>
              </ul>
            </footer>
          </motion.div>

          
         

          {/* Project 6 */}
          {/* <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
                <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLinkUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MediBook: Medical Appointment Scheduler with Health History</h3>
              <p>Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </motion.div> */}

          {/* Project 7 */}
          {/* <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation" target="_blank" rel="noreferrer">
                  <img src={githubIconUrl} alt="Visit site" />
                </a>
                <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLinkUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
              <p>Developed a real-time hand gesture recognition system for intuitive 3D object manipulation. Leveraged a multimodal approach integrating OpenCV for video processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for machine learning model training. Achieved 95.2% accuracy in hand gesture classification with efficient real-time performance.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </motion.div> */}

          {/* Project 8 */}
          {/* <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </motion.div> */}

          {/* Project 9: More on Github */}
          <motion.div className="project" initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, rotateY: 90 }} transition={{ duration: 0.6 }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/MuhammadYusufAndrika" target="_blank" rel="noreferrer">
                  <img src={externalLinkUrl} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>More? In my Github</h3>
            </div>
            <footer>
              <ul className="tech-list"></ul>
            </footer>
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  );
}
