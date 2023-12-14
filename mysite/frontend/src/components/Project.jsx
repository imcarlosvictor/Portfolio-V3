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
            <div className="project-info-landing-page">
              <canvas id="gradient-canvas" data-transition-in />
              <div className="project-info-title-container">
                <div className="scrolling-text">
                  <h1 id="project-info-title">medusa</h1>
                </div>
              </div>

              <div className="scrolldown">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="project-info-content">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lectus arcu bibendum at varius vel pharetra vel turpis. Lectus mauris ultrices eros in cursus turpis. Vitae tempus quam pellentesque nec. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Orci phasellus egestas tellus rutrum tellus pellentesque. Netus et malesuada fames ac turpis. Vestibulum lorem sed risus ultricies tristique. Sed risus pretium quam vulputate dignissim suspendisse in est. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Cursus risus at ultrices mi tempus imperdiet nulla. Eu sem integer vitae justo eget.

        Vitae et leo duis ut diam quam nulla porttitor. Mattis aliquam faucibus purus in massa tempor nec feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante. Mattis vulputate enim nulla aliquet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus at urna condimentum mattis pellentesque id nibh. Lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Purus in massa tempor nec feugiat nisl. Ultricies integer quis auctor elit sed vulputate mi. Eu scelerisque felis imperdiet proin fermentum leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. A iaculis at erat pellentesque adipiscing. Et malesuada fames ac turpis egestas sed tempus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In nibh mauris cursus mattis molestie a.

        Sed odio morbi quis commodo odio aenean sed adipiscing. Et magnis dis parturient montes nascetur ridiculus mus. Quis vel eros donec ac odio. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Est placerat in egestas erat imperdiet. Quisque id diam vel quam elementum. Amet cursus sit amet dictum. Odio facilisis mauris sit amet. Id interdum velit laoreet id donec ultrices. Tellus molestie nunc non blandit massa enim nec. Sed egestas egestas fringilla phasellus faucibus scelerisque. Ligula ullamcorper malesuada proin libero nunc consequat. Cursus vitae congue mauris rhoncus. Eu consequat ac felis donec et odio. Dictum at tempor commodo ullamcorper a. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mollis nunc sed id semper.

        Justo nec ultrices dui sapien. Id aliquet risus feugiat in ante metus dictum. Sit amet mattis vulputate enim nulla aliquet. In aliquam sem fringilla ut morbi. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Enim sed faucibus turpis in eu mi bibendum. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Nec nam aliquam sem et tortor. Enim sit amet venenatis urna. Nisi scelerisque eu ultrices vitae auctor. Tempus iaculis urna id volutpat.

        Eu tincidunt tortor aliquam nulla facilisi. Est sit amet facilisis magna etiam. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Elementum tempus egestas sed sed. Risus nec feugiat in fermentum posuere urna nec. Erat imperdiet sed euismod nisi porta lorem mollis. Nisl purus in mollis nunc sed id semper. In ante metus dictum at. Condimentum id venenatis a condimentum vitae sapien. Id aliquet risus feugiat in ante metus dictum. Iaculis at erat pellentesque adipiscing commodo elit. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor.
                </p>
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
      {createProjectPage()}
    </>
  )
}
