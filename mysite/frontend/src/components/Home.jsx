import React, { useCallback, useState, useMemo  } from "react";
import ForceGraph3D from "react-force-graph-3d";
// import ForceGraph3D from "react-force-graph";
import graphData from "../assets/datasets/projects.json";


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
        graphData={gData.current}
        nodeLabel="id"
        nodeColor={node => 
            highlightNodes.has(node)
              ? node === hoverNode
                ? '#00ffff'
                : '#ffffff'
                : '#ffffff'
        }
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
