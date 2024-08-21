import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { Gradient } from './Gradient.js'


export default function Project() {
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
        
        // Create instance
        const gradient = new Gradient()
        // Call 'initGradient' with the selector to your canvas
        gradient.initGradient('#gradient-canvas')
    })

    const createProjectPage = () => {

        return (
          <>
            <div className="content">

              <div className="project-info-landing-page">
                <canvas id="gradient-canvas" data-transition-in />
                <div className="project-info-title-container">
                  <div className="scrolling-text">
                    {/* <h1 id="project-info-title">Title</h1> */}
                  </div>
                </div>

                <div className="project-quick-info">
                  <div className="project-quick-info-container">
                    <div className="project-quick-info-title">
                      <p>release</p>
                      <p>release</p>
                      <p>release</p>
                      <p>release</p>
                      <p>release</p>
                    </div>
                    <div className="project-quick-info-content">
                      <p>content</p>
                      <p>content</p>
                      <p>content</p>
                      <p>content</p>
                      <p>content</p>
                    </div>
                  </div>
                </div>

                {/* <div className="scrolldown"> */}
                {/*   <span></span> */}
                {/*   <span></span> */}
                {/*   <span></span> */}
                {/* </div> */}

                <div className="banner">
                  <div className="banner-text">
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                  </div>
                  <div className="banner-text">
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                    Data Engineering <span className="text-divider">• </span>
                  </div>
                </div>
              </div>



              <div className="project-title">
                <p>Medusa</p>
              </div>
              <div className="project-info-content">
                <div className="project-overview-title project-heading">
                  <p>Project<br></br>Overview</p>
                </div>
                <div className="project-info-overview">
                  <p>
                    Lorem ipsum <span className="bold">dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lectus arcu bibendum at varius vel pharetra vel turpis. Lectus mauris ultrices eros in cursus turpis. Vitae tempus quam pellentesque nec. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Orci phasellus egestas tellus rutrum tellus pellentesque. Netus et malesuada fames ac turpis. Vestibulum lorem sed risus ultricies tristique. Sed risus pretium quam vulputate dignissim suspendisse in est. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Cursus risus at ultrices mi tempus imperdiet nulla. Eu sem integer vitae justo eget.

            Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh.
                  </p>
                </div>
                <div className="project-images">
                  <img src="" alt="gallery-image" className="gallery-image gallery-image-1"/>
                  <img src="" alt="gallery-image" className="gallery-image gallery-image-2"/>
                  <img src="" alt="gallery-image" className="gallery-image gallery-image-3"/>
                  <img src="" alt="gallery-image" className="gallery-image gallery-image-4"/>
                </div>
                <div className="project-description-1">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lectus arcu bibendum at varius vel pharetra vel turpis. Lectus mauris ultrices eros in cursus turpis. Vitae tempus quam pellentesque nec. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Orci phasellus egestas tellus rutrum tellus pellentesque. Netus et malesuada fames ac turpis. Vestibulum lorem sed risus ultricies tristique. Sed risus pretium quam vulputate dignissim suspendisse in est. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Cursus risus at ultrices mi tempus imperdiet nulla. Eu sem integer vitae justo eget.

            Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.
                  </p>
                </div>

                <br></br>
                <div className="call-to-action-banner">
                  <p>"Call to action"</p>
                </div>

                <div className="additional-project-information-container">
                  <div className="planning-title project-heading">
                    <div className="planning-line-divider line-divider"></div>
                    <p>Planning</p>
                  </div>
                  <div className="planning-info">
                    <p>
              Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.
                    </p>
                  </div>

                  <br></br>
                  <div className="implementation-title project-heading">
                    <div className="implementation-line-divider line-divider"></div>
                    <p>Implementation</p>
                  </div>
                  <div className="implementation-info">
                    <p>
              Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.
                    </p>
                  </div>
                </div>
              </div>

              <div className="progress-section">
                <div className="progress-bar-wrap">
                  <div className="progress-bar"></div>
                </div>
                <div className="progress-num"></div>
              </div>

            </div>
          </>
        )
    }

  return (
    <>
      {createProjectPage()}
    </>
  )
}
