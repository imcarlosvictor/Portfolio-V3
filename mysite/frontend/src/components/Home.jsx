import gsap from 'gsap';
import axios from 'axios';
import ForceGraph3D from 'react-force-graph-3d';
import { createRoot } from "react-dom/client";
// import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useCallback, useState } from 'react';

import graphData from '../assets/datasets/miserables.json';


export default function Home() {
  const [graphDataState, setGraphDataState] = useState(null);
  
  useEffect( () => {
    console.log(graphData);
    // Force Graph Visualizer
    const fetchData = async () => {
      const response = await fetch('../assets/datasets/miserables.json');
      const data = await response.json();
      setGraphDataState(data);
    };

    fetchData();
  }, []);

  const FocusGraph = () => {
    const fgRef = useRef();

    const handleClick = useCallback(node => {
      // Aim at node from outside it
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio  }, // new position
        node, // lookAt ({ x, y, z  })
        3000  // ms transition duration
      );
    }, []);

    return (
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeLabel="id"
        nodeAutoColorBy="group"
        onNodeClick={handleClick}
      />
    );
  };

  useEffect(() => {
    const root = createRoot(document.getElementById('graph'));
    root.render(<FocusGraph />);
  }, [graphDataState]);

  const createHomePage = () => {
    return (
      <>
        <div className="content" id="content">
          <div className="project-container" id="project-container">

            <div className="graph" id="graph"></div>

            <div className="project-category">
            </div>
            {/* Delete??? */}
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

