import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Gradient } from './Gradient.js'

export default function About() {

  useEffect(() => {
    // Create instance
    const gradient = new Gradient()
    // Call 'initGradient' with the selector to your canvas
    gradient.initGradient('#gradient-canvas');

    const open = document.getElementById("resume-btn");
    const modalContainer = document.getElementById("modal-container");
    const close = document.getElementById("close");

    open.addEventListener("click", () => {
      modalContainer.classList.add("show");
    });

    close.addEventListener("click", () => {
      modalContainer.classList.remove("show");
    });

  }, []);

  const createAboutPage = () => {
    return (
      <>
        <div className="home-page-canvas">

          <div className="whoami-container">
            <div className="introduction-container">
              <div className="introduction-content">
                <p className="greetings">Hi, I'm</p>
                <p className="my-name">Carlos Victor Torres</p> 
                <p className="aspiration">A <span id="profession">software developer</span> based in Toronto.</p>
                <div className="info">
                  <button id="resume-btn">Resume</button>
                </div>
              </div>
            </div>
            <div className="modal-container" id="modal-container">
              <div className="modal">
                <iframe src="src/assets/CarlosVictorTorres_SWE_Resume.pdf" width="100%" height="100%"></iframe>
                <button id="close">Close</button>
              </div>
            </div>
            <canvas id="gradient-canvas" data-transition-in />
          </div>

          <div className="about-me-container">
            <div className="about-me-content">
              <div id="about-me-section">
                <p>I'm Victor, a self-taught software engineer with a background in UX Design. My passion is in building digital products from start to finish that focus on solving real world problems. <br/> <br/> After completing my capstone project for the UX Design course, I realized that my passion wasn't in design but in building products. Designing is fun, but, building products from scratch and solving complex problems along the way is far more fulfilling. I believe that most problems can be solved using technology. Therefore, I'm always       thrilled to spend my free time learning new languages, skills, and build projects to hone my craft. <br/> <br/> When I'm not coding, you can find me playing chess, video games, or learning game theory.
                </p>
              </div>
              <div className="skill-section">
                <div className="skills programming-language">
                  <p>Python</p>
                  <p>C++</p>
                  <p>Javascript</p>
                  <p>SQL</p>
                </div>
                <div className="skills libraries-and-frameworks">
                  <p>React</p>
                  <p>Django</p>
                  <p>Scrapy</p>
                  <p>Selenium</p>
                  <p>Pandas</p>
                  <p>BeautifulSoup</p>
                  <p>SFML</p>
                </div>
                <div className="skills tech-tools">
                  <p>Linux</p>
                  <p>Git</p>
                  <p>Vercel</p>
                  <p>Heroku</p>
                  <p>Figma</p>
                  <p>Apache Airflow</p>
                  <p>AutoCAD</p>
                  <p>Blender</p>
                </div>
              </div>
            </div>

            <div className="services-container">
              <section className="sticky">
                <div className="col">
                  <div className="services">
                    <div className="service"><p>Web Scraping</p></div>
                    <div className="service"><p>Data Engineering</p></div>
                    <div className="service"><p>Data Analysis</p></div>
                    <div className="service"><p>Web Devlopment</p></div>
                    <div className="service"><p>IoT</p></div>
                    <div className="service"><p>UX/UI Design</p></div>
                  </div>
                </div>
                <div className="breaker"></div>
                <div className="col">
                  <div className="service-img-wrapper">
                    <div className="service-img">
                      <div className="img"><img src="./assets/img1.jpg" alt="" /></div>
                      <div className="img"><img src="./assets/img1.jpg" alt="" /></div>
                      <div className="img"><img src="./assets/img1.jpg" alt="" /></div>
                      <div className="img"><img src="./assets/img1.jpg" alt="" /></div>
                      <div className="img"><img src="./assets/img1.jpg" alt="" /></div>
                      <div className="img"><img src="./assets/img1.jpg" alt="" /></div>
                    </div>
                  </div>
                  <div className="service-copy">
                    <p>aowajfowafjwaofjwaoajwfpowaijfowaijfwaopfjwapofjwafopjwf</p>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </section>
            </div>

          </div>

          <canvas id="gradient-canvas" data-transition-in />
        </div>

      </>
    )
  }

  return (
    <>
      { createAboutPage() }
    </>
  )
}
