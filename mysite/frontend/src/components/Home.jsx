import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  useEffect( () => {
    // Scrollbar progress
    // let progressBar = document.querySelector(".progress-bar");
    // function updateProgressBar() {
    //   progressBar.style.height = `${getScrollPercentage()}%`
    //   requestAnimationFrame(updateProgressBar)
    // }

    // function getScrollPercentage() {
    //   return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
    // }
    // updateProgressBar()

    // Project Links
    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    // const projectLinksContainer = document.getElementsByClassName("project-link-container");
    const projectLinksContainer = document.querySelector(".project-link-container");
    let currentScroll = 0;
    let targetScroll = 0;
    const ease = 0.1;

    document.addEventListener("mousemove", (e) => {
      const extraHeight = projectLinksContainer.offsetHeight - window.innerHeight;
      targetScroll = (e.clientY / window.innerHeight) * -extraHeight;
    });

    function animate() {
      currentScroll = lerp(currentScroll, targetScroll, ease);
      projectLinksContainer.style.transform = `translateY(${currentScroll}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  })

  const createHomePage = () => {
    return (
      <>
        <div className="content">

          <div className="project-container">
            <div className="project-content">
              <div className="menu">
                <div className="project-image">
                  <p>HEllo</p>
                  <img src="../assets/jigar-panchal-5TUNYgPMEaU-unsplash.jpg" />
                </div>

                <div className="project-link-container">
                  <div className="project-link">
                    <a href="#" data-image="1">Medusa*</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="1">Unified Fugitive Database</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="1">Pathfinding Algorithm Visualizer</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="1">Car Rentals</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="1">Weather Forecast</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="1">GPU Price Scraper</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="1">Stock Scraper</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="1">Student Database Management System</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="1">Adam Williamson Portfolio</a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* <div className="progress-section"> */}
        {/*   <div className="progress-bar-wrap"> */}
        {/*     <div className="progress-bar"></div> */}
        {/*   </div> */}
        {/*   <div className="progress-num"></div> */}
        {/* </div> */}
      </>
    )
  }

  return (
    <>
      { createHomePage() }
    </>
  )
}
