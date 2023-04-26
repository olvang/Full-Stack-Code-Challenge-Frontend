import React from 'react';
import './NodeTree.css';
import Node from '../Node/Node';
import { NodeData } from '../../models/node.interfaces';

interface NodeTreeProps {
  activeNode: NodeData;
  childNodes: NodeData[];
  handleNodeClick: (node: NodeData) => void;
  handleGoUp: () => void;
}

const NodeTree: React.FC<NodeTreeProps> = ({
  activeNode,
  childNodes,
  handleNodeClick,
  handleGoUp,
}) => {
  if (!activeNode) return null;

  const renderChildNodes = () => {
    // If there are no child nodes, return null
    if (childNodes.length === 0) {
      return null;
    }

    return (
      <ul>
        {childNodes.map((node) => (
          <li key={node.id}>
            <Node {...node} onNavigate={() => handleNodeClick(node)} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="node-tree">
      <ul>
        <li>
          <Node
            {...activeNode}
            onNavigate={() => {}}
            onNavigateUp={() => handleGoUp()}
          />
          {renderChildNodes()}
        </li>
      </ul>
    </div>
  );
};

export default NodeTree;
