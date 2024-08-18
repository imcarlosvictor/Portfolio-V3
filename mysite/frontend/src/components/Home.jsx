import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useMemo  } from "react";
import ForceGraph3D from "react-force-graph-3d";
import graphData from "../assets/datasets/projects.json";
import { CSS2DRenderer, CSS2DObject } from 'https://unpkg.com/three@0.164.1/examples/jsm/renderers/CSS2DRenderer.js';



export default function Home() {
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);
  const gData = React.useRef(null);

  useMemo(() => {
    if (graphData && graphData.nodes && graphData.links) {
      const updatedNodes = graphData.nodes.map(node => ({ ...node, neighbors: [], links: []  }));

      graphData.links.forEach(link => {
        const a = updatedNodes.find(node => node.id === link.source);
        const b = updatedNodes.find(node => node.id === link.target);
        if (a && b) {
          a.neighbors.push(b);
          b.neighbors.push(a);
          a.links.push(link);
          b.links.push(link);
        }
      });
    gData.current = {"nodes": updatedNodes, "links": graphData.links};
    }
  }, []);
  
  const updateHighlight = useCallback(() => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  }, [highlightNodes, highlightLinks])

  const projectGraph = useMemo(() => {
    return (
      <ForceGraph3D
        showNavInfo={false}
        graphData={gData.current}
        nodeLabel="id"
        nodeColor={node => 
            highlightNodes.has(node)
              ? node === hoverNode
                ? '#9470fa'
                : '#2b9aa4'
                : '#cecece'
        }
        nodeResolution={15}
        linkWidth={link => (highlightLinks.has(link) ? 1 : 0.5)}
        linkDirectionalParticles={link => (highlightLinks.has(link) ? 2 : 0)}
        linkDirectionalParticleWidth={1}
        onNodeHover={node => {
          if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;
          highlightNodes.clear();
          highlightLinks.clear();
          if (node) {
            highlightNodes.add(node);
            node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
            node.links.forEach(link => highlightLinks.add(link));
            setHoverNode(node);
          }
          // setHoverNode((node || null));
          updateHighlight();
        }}
        onNodeClick={node => {
          let urlID = node.id.replace(/\s+/g, "-");
          console.log(urlID.toLowerCase());
          console.log(`http://localhost:5173/${urlID.toLowerCase()}/`);
          // window.location.replace(`http://localhost:5173/${urlID.toLowerCase()}`);
        }}
        onLinkHover={link => {
          highlightNodes.clear();
          highlightLinks.clear();
          if (link) {
            highlightLinks.add(link);
            highlightNodes.add(link.source);
            highlightNodes.add(link.target);
          }
          updateHighlight();
        }}
        backgroundColor="#101010"
        linkOpacity={0.3}
        extraRenderers={[new CSS2DRenderer()]}
        nodeThreeObject={node => {
          const nodeEl = document.createElement("div");
          nodeEl.textContent = node.id;
          nodeEl.style.color = "#ffffff";
          nodeEl.className = "node-label";
          return new CSS2DObject(nodeEl);
        }}
        nodeThreeObjectExtend={true}
        // zoomToFit={(0,2000,node => {true})}
      />
    );
  }, [highlightNodes, highlightLinks, hoverNode, updateHighlight]);

  const createHomePage = () => {
    return (
      <>
        <div className="content" id="content">
          <div className="project-container" id="project-container">
            <div id="3D-graph">{projectGraph}</div>
            <div className="project-category"></div>
            <div className="project-link-container">
              <div className="project-block">
                <div className="project-poster"></div>
                <div className="project-details"></div>
              </div>
              <div className="project-block">
                <div className="project-poster"></div>
                <div className="project-details"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{createHomePage()}</>;
}
