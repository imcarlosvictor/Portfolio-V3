import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  useEffect( () => {
      // Scrollbar progress
      let progressBar = document.querySelector(".progress-bar");
      function updateProgressBar() {
        progressBar.style.height = `${getScrollPercentage()}%`
        requestAnimationFrame(updateProgressBar)
      }

      function getScrollPercentage() {
        return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
      }
      updateProgressBar()
  })

  const createHomePage = () => {
    return (
      <>
        <div className="content">

          <div className="introduction-container">
            <div className="introduction-content">
              <p className="greetings">Hi, I'm</p>
              <p className="my-name">Carlos Victor Torres</p> 
              <p className="aspiration">A <span id="profession">software developer</span> based in Toronto.</p>
              <div className="info">
                <a href="#project-header"><button id="to-projects">Projects</button></a>
              </div>
            </div>
          </div>

          <div className="about-me-container">
            <div className="section-headers" id="about-header">
              <p>// About</p>
            </div>

            <div className="about-me-content">
              <div id="about-me-section">
                <p>Greetings! I'm Carlos Victor, a self-taught software engineer with a background in UX Design. My passion is in building digital products from start to finish that focus on solving real world problems. <br/> <br/> After completing my capstone project for the UX Design course, I realized that my passion wasn't in design but in building products. Designing is fun, but, building products from scratch and solving complex problems along the way is far more fulfilling. I believe that most problems can be solved using technology. Therefore, I'm always       thrilled to spend my free time learning new languages, skills, and build projects to hone my craft. <br/> <br/> When I'm not coding, you can find me playing chess, video games, or learning game theory.
                </p>
              </div>

              <div className="skill-section">
                <p>Here are a few technologies I've been working with recently:</p>
                <div className="skills">
                  <ul>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Javascript</li>
                    <li>Django</li>
                  </ul>
                  <ul>
                    <li>SQL</li>
                    <li>Linux</li>
                    <li>Git</li>
                    <li>Apache Airflow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="project-container">
            <img src="../assets/jigar-panchal-5TUNYgPMEaU-unsplash.jpg" alt="iamge" />
            <div className="section-headers" id="project-header">
              <p>// Projects</p>
            </div>

            <div className="gallery-content-container">

              <div className="indicator"></div>
              <div className="gallery">
                <div className="gallery-item">
                  <img src="../assets/jigar-panchal-5TUNYgPMEaU-unsplash.jpg" alt="" />
                  <p>Hello</p>
                </div>
              </div>

            </div>

            <div className="project-content">
              <div className="project-carousel-container">
                <div className="project-carousel">
                </div>

                <div className="project-carousel-scrollbar">
                </div>
              </div>

              <div className="project-extras-container">

                <div className="project-folder">
                  <div className="project-info">
                    <div className="banner"></div>
                    <p className="project-text">project:</p>
                    <p className="project-title">Unified Fugitive Database</p>
                  </div>
                </div>

                <div className="project-folder">
                  <div className="project-info">
                    <div className="banner"></div>
                    <p className="project-text">project:</p>
                    <p className="project-title">lucas car rentals</p>
                  </div>
                </div>

                <div className="project-folder">
                  <div className="project-info">
                    <div className="banner"></div>
                    <p className="project-text">project:</p>
                    <p className="project-title">weather app</p>
                  </div>
                </div>

                <div className="project-folder">
                  <div className="project-info">
                    <div className="banner"></div>
                    <p className="project-text">project:</p>
                    <p className="project-title">gpu price scraper</p>
                  </div>
                </div>

                <div className="project-folder">
                  <div className="project-info">
                    <div className="banner"></div>
                    <p className="project-text">project:</p>
                    <p className="project-title">adam williamson portfolio</p>
                  </div>
                </div>




              </div>
            </div>
          </div>

        </div>

        <div className="progress-section">
          <div className="progress-bar-wrap">
            <div className="progress-bar"></div>
          </div>
          <div className="progress-num"></div>
        </div>
      </>
    )
  }

  return (
    <>
      { createHomePage() };
    </>
  )
}
