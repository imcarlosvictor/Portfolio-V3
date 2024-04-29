import React, { useEffect, useState, useMemo  } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import graphData from '../assets/datasets/projects.json';



export default function Home() {
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const hoverNodeRef = React.useRef(null);
  // const [gData, setGData] = useState(null);

  useEffect(() => {
    const N = 80;
    const data = {
      nodes: [...Array(N).keys()].map(i => ({ id: i  })),
      links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id - 1))
      }))
    };

    data.links.forEach(link => {
      const a = data.nodes[link.source];
      const b = data.nodes[link.target];
      !a.neighbors && (a.neighbors = []);
      !b.neighbors && (b.neighbors = []);
      a.neighbors.push(b);
      b.neighbors.push(a);

      !a.links && (a.links = []);
      !b.links && (b.links = []);
      a.links.push(link);
      b.links.push(link);
    });

    // setGData(data);
  }, []);

  const memoizedGraph = useMemo(() => {
    return (
      <ForceGraph3D
        graphData={graphData}
        nodeLabel="id"
        nodeColor={node =>
            highlightNodes.has(node)
              ? node === hoverNodeRef.current
                ? 'rgba(255,0,0,1)'
                : 'rgba(255,160,0,0.8)'
                : 'rgba(0,255,255,0.6)'
        }
        linkWidth={link => (highlightLinks.has(link) ? 4 : 1)}
        linkDirectionalParticles={link => (highlightLinks.has(link) ? 4 : 0)}
        linkDirectionalParticleWidth={4}
        onNodeHover={node => {
          if ((!node && !highlightNodes.size) || (node && hoverNodeRef.current === node)) return;
          const newHighlightNodes = new Set();
          const newHighlightLinks = new Set();
          if (node) {
            newHighlightNodes.add(node);
            node.neighbors.forEach(neighbor => newHighlightNodes.add(neighbor));
            node.links.forEach(link => newHighlightLinks.add(link));
          }
          setHighlightNodes(newHighlightNodes);
          setHighlightLinks(newHighlightLinks);
          hoverNodeRef.current = node || null;
        }}
        onLinkHover={link => {
          const newHighlightNodes = new Set();
          const newHighlightLinks = new Set();
          if (link) {
            newHighlightLinks.add(link);
            newHighlightNodes.add(link.source);
            newHighlightNodes.add(link.target);
          }
          setHighlightNodes(newHighlightNodes);
          setHighlightLinks(newHighlightLinks);
        }}
        backgroundColor="#101010"
        linkOpacity={0.3}
      />
    );
  }, [highlightNodes, highlightLinks]);

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
