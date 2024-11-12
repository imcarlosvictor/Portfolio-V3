import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useMemo, useEffect  } from "react";
import ForceGraph3D from "react-force-graph-3d";
import { CSS2DRenderer, CSS2DObject } from 'https://unpkg.com/three@0.164.1/examples/jsm/renderers/CSS2DRenderer.js';
import { Gradient } from './Gradient.js'

import {galleryItems } from "../assets/datasets/projects.js";
// import graphData from "../assets/datasets/projects.js";



export default function Home() {
  // const [highlightNodes, setHighlightNodes] = useState(new Set());
  // const [highlightLinks, setHighlightLinks] = useState(new Set());
  // const [hoverNode, setHoverNode] = useState(null);
  // const gData = React.useRef(null);

  // useEffect( () => {
  //       // Create instance
  //       const gradient = new Gradient()
  //       // Call 'initGradient' with the selector to your canvas
  //       gradient.initGradient('#gradient-canvas');
  // })

  // useMemo(() => {
  //   if (graphData && graphData.nodes && graphData.links) {
  //     const updatedNodes = graphData.nodes.map(node => ({ ...node, neighbors: [], links: []  }));

  //     graphData.links.forEach(link => {
  //       const a = updatedNodes.find(node => node.id === link.source);
  //       const b = updatedNodes.find(node => node.id === link.target);
  //       if (a && b) {
  //         a.neighbors.push(b);
  //         b.neighbors.push(a);
  //         a.links.push(link);
  //         b.links.push(link);
  //       }
  //     });
  //   gData.current = {"nodes": updatedNodes, "links": graphData.links};
  //   }
  // }, []);
  
  // const updateHighlight = useCallback(() => {
  //   setHighlightNodes(highlightNodes);
  //   setHighlightLinks(highlightLinks);
  // }, [highlightNodes, highlightLinks])

  // const projectGraph = useMemo(() => {
  //   return (
  //     <ForceGraph3D
  //       showNavInfo={false}
  //       graphData={gData.current}
  //       nodeLabel="id"
  //       nodeColor={node => 
  //           highlightNodes.has(node)
  //             ? node === hoverNode
  //               ? '#5c00ff'
  //               : '#b1a4ff'
  //               : '#cecece'
  //       }
  //       nodeResolution={15}
  //       linkWidth={link => (highlightLinks.has(link) ? 1 : 0.5)}
  //       linkDirectionalParticles={link => (highlightLinks.has(link) ? 2 : 0)}
  //       linkDirectionalParticleWidth={1}
  //       onNodeHover={node => {
  //         if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;
  //         highlightNodes.clear();
  //         highlightLinks.clear();
  //         if (node) {
  //           highlightNodes.add(node);
  //           node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
  //           node.links.forEach(link => highlightLinks.add(link));
  //           setHoverNode(node);
  //         }
  //         // setHoverNode((node || null));
  //         updateHighlight();
  //       }}
  //       onNodeClick={node => {
  //           let urlID = node.id.replace(/\s+/g, "-");
  //           console.log(`http://localhost:5173/${urlID.toLowerCase()}/`);
  //           // window.location.replace(`http://localhost:5173/${urlID.toLowerCase()}`);
  //           }
  //       }
  //       onLinkHover={link => {
  //         highlightNodes.clear();
  //         highlightLinks.clear();
  //         if (link) {
  //           highlightLinks.add(link);
  //           highlightNodes.add(link.source);
  //           highlightNodes.add(link.target);
  //         }
  //         updateHighlight();
  //       }}
  //       backgroundColor="#101010"
  //       linkOpacity={0.3}
  //       extraRenderers={[new CSS2DRenderer()]}
  //       nodeThreeObject={node => {
  //         const nodeEl = document.createElement("div");
  //         nodeEl.textContent = node.id;
  //         nodeEl.style.color = "#dfdedf";
  //         nodeEl.className = "node-label";
  //         return new CSS2DObject(nodeEl);
  //       }}
  //       nodeThreeObjectExtend={true}
  //       // zoomToFit={(0,2000,node => {true})}
  //     />
  //   );
  // }, [highlightNodes, highlightLinks, hoverNode, updateHighlight]);


  useEffect( () => {
    document.addEventListener("DOMContentLoaded", () => {
      const gallery = document.querySelector(".gallery");
      const blurryPrev = document.querySelector(".blurry-prev");
      const projectPreview = document.querySelector(".project-preview");
      const itemCount = galleryItems.length;

      let activeItemIndex = 0;
      let isAnimating = false;

      function createSplitText(element) {
        const splitText = new SplitType(element, {types: "lines"});
        element.innerHTML = "";
        splitText.lines.forEach((line) => {
          const lineDiv = document.createElement("div");
          lineDiv.className = "line";
          const lineSpan = document.createElement("span");
          lineSpan.textContent = line.textContent;
          lineDiv.appendChild(lineSpan);
          element.appendChild(lineDiv);
        })
      }

      const initialInfoText = document.querySelector(".info p");
      if (initialInfoText) {
        createSplitText(initialInfoText);
      }

      const elementsToAnimate = document.querySelectorAll(
      ".title h1, .info p, .line span, .credits p, .director p, .cinematographer p"
      );
      gsap.set(elementsToAnimate, {
        y: 0,
      });
      
      for (let i = 0; i < itemCount; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        if (i === 0) itemDiv.classList.add("active");

        const img = document.createElement("img");
        img.src = `./assests/img${i + 1}.jpg`;
        img.alt = galleryItems[i].title;

        itemDiv.appendChild(img);
        itemDiv.dataset.index = i;
        itemDiv.addEventListener("click", () => handleItemClick(i));
        gallery.appendChild(itemDiv);
      }

      function createElementWithClass(tag, className) {
        const element = document.createElement(tag);
        element.classList.add(className);
        return element;
      }

      function createProjectDetails(activeItem, index) {

      }
    });
  })

  const createHomePage = () => {
    return (
      <>
        <div className="content">
          {/* <div id="3D-graph">{projectGraph}</div> */}
          {/* <div className="home-page-canvas"> */}
          {/*   <canvas id="gradient-canvas" data-transition-in /> */}
          {/*   <p className="name">Victor</p> */}
          {/* </div> */}

          <div className="landing-page-container">
            <div className="blurry-prev">
              <img src="./assests/img1.jpg" alt=""/>
            </div>
            <div className="overlay"></div>
            <div className="col site-info">
              <nav>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
              </nav>
              <div className="header">
                <h1>Welcome to codegrid</h1>
              </div>
              <div className="copy">
                <p>blahc blahc blahc</p>
              </div>
            </div>

            <div className="col project-preview">
              <div className="project-details">
                <div className="title"><h1>project title</h1></div>
                <div className="info"><p>here is my project</p></div>
                <div className="credits"><p>thank you</p></div>
                <div className="director"><p>director</p></div>
                <div className="cinematographer"><p>cinematographer</p></div>
              </div>

              <div className="project-img">
                <img src="./assets/images/pathfinder_visualizer_project.jpg" alt=""/>
              </div>
            </div>

            <div className="gallery-wrapper">
              <div className="gallery"></div>
            </div>
          </div>


        </div>
      </>
    );
  };

  return <>{createHomePage()}</>;
}
