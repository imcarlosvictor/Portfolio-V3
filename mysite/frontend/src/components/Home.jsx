import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
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

  useGSAP( () => {
    // Project Images
    let currentImageID = 1;
    document.querySelectorAll(".project-link a").forEach((link) => {
      link.addEventListener("mouseenter", function() {
        const targetImageID = parseInt(this.getAttribute("data-image"));

        const imageContainer = document.querySelector(".project-image");
        const images = document.querySelectorAll(".image");

        gsap.set(images, {
          zIndex: 0,
          opacity: 0,
          delay: 0.20,
        })
        gsap.set(`.project-image iframe[data-id="${targetImageID}"]`, {
          zIndex: 0,
          opacity: 1,
          delay: 0.20,
        });
        currentImageID = targetImageID;
      })
    });
  })

  const createHomePage = () => {
    return (
      <>
        <div className="content">

          <div className="project-container">
            <div className="project-content">
              <div className="menu">

                <div className="project-image">
                  <iframe className="image" data-id="1" src='https://my.spline.design/molang3dcopy-14f433a2bec08affba8c9f97c0afcb3c/' frameBorder='0' width='100%' height='100%'></iframe>
                  <iframe className="image" data-id="2" src='https://my.spline.design/miniroomartcopy-346d32b6b8167de57d38369b7c8cbebc/' frameBorder='0' width='100%' height='100%'></iframe>
                  <iframe className="image" data-id="3" src='https://my.spline.design/molang3dcopy-14f433a2bec08affba8c9f97c0afcb3c/' frameBorder='0' width='100%' height='100%'></iframe>
                  <iframe className="image" data-id="4" src='https://my.spline.design/molang3dcopy-14f433a2bec08affba8c9f97c0afcb3c/' frameBorder='0' width='100%' height='100%'></iframe>
                  <iframe className="image" data-id="5" src='https://my.spline.design/molang3dcopy-14f433a2bec08affba8c9f97c0afcb3c/' frameBorder='0' width='100%' height='100%'></iframe>
                  <iframe className="image" data-id="6" src='https://my.spline.design/molang3dcopy-14f433a2bec08affba8c9f97c0afcb3c/' frameBorder='0' width='100%' height='100%'></iframe>
                  <iframe className="image" data-id="7" src='https://my.spline.design/molang3dcopy-14f433a2bec08affba8c9f97c0afcb3c/' frameBorder='0' width='100%' height='100%'></iframe>
                  <iframe className="image" data-id="8" src='https://my.spline.design/molang3dcopy-14f433a2bec08affba8c9f97c0afcb3c/' frameBorder='0' width='100%' height='100%'></iframe>
                  <iframe className="image" data-id="9" src='https://my.spline.design/molang3dcopy-14f433a2bec08affba8c9f97c0afcb3c/' frameBorder='0' width='100%' height='100%'></iframe>
                </div>

                <div className="project-link-container">
                  <div className="project-link">
                    <a href="#" data-image="1">Medusa*</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="2">Unified Fugitive Database</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="3">Pathfinding Algorithm Visualizer</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="4">Car Rentals</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="5">Weather Forecast</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="6">GPU Price Scraper</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="7">Stock Scraper</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="8">Student Database Management System</a>
                  </div>

                  <div className="project-link">
                    <a href="#" data-image="9">Adam Williamson Portfolio</a>
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
