import React, { useEffect, useState, useMemo  } from "react";
import ForceGraph3D from "react-force-graph-3d";
import graphData from "../assets/datasets/projects.json";
// import graphData from '../assets/datasets/del.json';

export default function Home() {
  // const [highlightNodes, setHighlightNodes] = useState(new Set());
  // const [highlightLinks, setHighlightLinks] = useState(new Set());
  // const hoverNodeRef = React.useRef(null);
  const data = React.useRef(null);

  const hoverNode = React.useRef(null);

  const updateData = () => {
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

    data.current = {"nodes": updatedNodes, "links": graphData.links};
    }
    console.log(data);
  }

  const memoizedGraph = useMemo(() => {
    updateData();

    const highlightNodes = new Set();
    const highlightLinks = new Set();

    const updateHighlight = () => {
      // trigger update of highlighted objects in scene
      const Graph = ForceGraph3D();
      Graph(document.getElementById('3D-graph'))
        .graphData(data.current)
        .nodeColor(node => highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)')
        .linkWidth(link => highlightLinks.has(link) ? 4 : 1)
        .linkdirectionalparticles(link => highlightLinks.has(link) ? 4 : 0)
      
      
      Graph
        .nodecolor(Graph.nodecolor())
        .linkwidth(Graph.linkwidth())
        .linkdirectionalparticles(Graph.linkdirectionalparticles());
    }

    return (
      <ForceGraph3D
        graphData={data.current}
        nodeLabel="id"
        nodeColor={node =>
            highlightNodes.has(node)
              ? node === hoverNode.current
                ? 'rgba(40, 130, 138, 1)'
                : 'rgba(40, 130, 138, 0.6)'
                : 'rgba(255, 255, 255, 1)'
        }
        linkWidth={link => (highlightLinks.has(link) ? 2 : 0.5)}
        linkDirectionalParticles={link => (highlightLinks.has(link) ? 2 : 0)}
        linkDirectionalParticleWidth={2}
        onNodeHover={node => {
          if ((!node && !highlightNodes.size) || (node && hoverNode.current === node)) return;
          highlightNodes.clear();
          highlightLinks.clear();
          if (node) {
            // console.log(node);
            highlightNodes.add(node);
            node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
            node.links.forEach(link => highlightLinks.add(link));
          }
          hoverNode.current = node || null;

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
  }, []);

  const createHomePage = () => {
    return (
      <>
        <div className="content" id="content">
          <div className="project-container" id="project-container">
            <div id="3D-graph">{memoizedGraph}</div>
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
