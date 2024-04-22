import gsap from 'gsap';
import * as d3 from "d3";
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
            <div className="project-category">
              <div className="category-block">
                <p>AI</p>
              </div>
              <div className="category-block">
                <p>Data</p>
              </div>
            </div>
            <div className="project-link-container">
              <div className="project-block">
                <div className="project-poster">
                </div>
                <div className="project-details">
                </div>
              </div>
              <div className="project-block">
                <div className="project-poster">
                </div>
                <div className="project-details">
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
