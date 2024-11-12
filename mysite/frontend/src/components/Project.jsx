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
                      <p>Project</p>
                      <p>Type</p>
                      <p>Version</p>
                      <p>Date</p>
                      <p>Status</p>
                    </div>
                    <div className="project-quick-info-content">
                      <p>Title</p>
                      <p>Data Engineering</p>
                      <p>1.0</p>
                      <p>01/05/2024</p>
                      <p>completed</p>
                    </div>
                  </div>
                </div>

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

              <div className="table-of-contents-container">
                <div className="table-of-contents">
                  <p><a href="#project-overview" className="toc-content">Overview</a></p>
                  <p>//</p>
                  <p><a href="#call-to-action" className="toc-content">Planning</a></p>
                  <p>//</p>
                  <p><a href="#implementation-title" className="toc-content">Implementation</a></p>
                  <p>//</p>
                  <p><a href="#" className="toc-content">Result</a></p>
                </div>
              </div>

              <div className="project-title" id="project-overview">
                <p>Title</p>
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

                <div className="project-description-1">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lectus arcu bibendum at varius vel pharetra vel turpis. Lectus mauris ultrices eros in cursus turpis. Vitae tempus quam pellentesque nec. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Orci phasellus egestas tellus rutrum tellus pellentesque. Netus et malesuada fames ac turpis. Vestibulum lorem sed risus ultricies tristique. Sed risus pretium quam vulputate dignissim suspendisse in est. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Cursus risus at ultrices mi tempus imperdiet nulla. Eu sem integer vitae justo eget.

            Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.
                  </p>
                </div>

                <br></br>
                <div className="project-images-container">
                  <img src="https://plus.unsplash.com/premium_photo-1666184127594-5161d3125d84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gallery-image" className="gallery-image gallery-image-1" id="slide-1"/>
                  <img src="https://plus.unsplash.com/premium_photo-1666184129790-62db4aa5949d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gallery-image" className="gallery-image gallery-image-2" id="slide-2"/>
                  <img src="https://images.unsplash.com/photo-1723754165998-305df32c501e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gallery-image" className="gallery-image gallery-image-3" id="slide-3"/>
                  <img src="https://plus.unsplash.com/premium_photo-1713190068595-cb46b2c42e7a?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gallery-image" className="gallery-image gallery-image-4" id="slide-4"/>
                </div>


                <br></br>
                <div className="call-to-action-banner" id="call-to-action">
                  <p>"Call to action"</p>
                </div>

                <div className="planning-title project-heading">
                  <p>Planning</p>
                </div>
                <div className="planning-info">
                  <p>
            Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.
                  </p>
                </div>
                <div className="planning-info">
                  <p>
                    <br></br>
            Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.
                  </p>
                </div>


                    <div className="implementation-title project-heading" id="implementation-title">
                      <p>Implementation</p>
                    </div>
                    <div className="implementation-info">
                      <p>
                Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.
                      </p>

                      <p>
                        <br></br>
                Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.
                      </p>
                    </div>



                <div className="additional-project-information-container">
                  <div className="planning-container">
                  </div>

                  <br></br>
                  <div className="implementation-container">
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
