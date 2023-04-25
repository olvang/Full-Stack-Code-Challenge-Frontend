import React from 'react';
import './NodeTree.css';
import Node from '../Node/Node';
import { NodeData } from '../../models/node.interfaces';

interface NodeTreeProps {
  nodes: NodeData[];
  onNodeClick: (nodeId: string) => void;
}

const NodeTree: React.FC<NodeTreeProps> = ({ nodes, onNodeClick }) => {
  // Get the root node
  const rootNode = nodes.find((node) => node.parentId === null);

  const renderChildNodes = () => {
    const childNodes = nodes.filter((node) => node.parentId === rootNode?.id);

    // If there are no child nodes, return null
    if (childNodes.length === 0) {
      return null;
    }

    return (
      <ul>
        {childNodes.map((node) => (
          <li key={node.id}>
            <Node
              id={node.id}
              name={node.name}
              parentId={node.parentId}
              department={node.department}
              programmingLanguage={node.programmingLanguage}
              height={node.height}
              onNavigate={() => onNodeClick(node.id)}
            />
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
            id={rootNode?.id || ''}
            name={rootNode?.name || ''}
            parentId={rootNode?.parentId || ''}
            department={rootNode?.department || ''}
            programmingLanguage={rootNode?.programmingLanguage || ''}
            height={rootNode?.height || 0}
            onNavigate={() => onNodeClick(rootNode?.id || '')}
          />
          {renderChildNodes()}
        </li>
      </ul>
    </div>
  );
};

export default NodeTree;
