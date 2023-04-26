import React from 'react';
import './NodeTree.css';
import Node from '../Node/Node';
import { NodeData } from '../../models/node.interfaces';

interface NodeTreeProps {
  activeNode: NodeData;
  childNodes: NodeData[];
  onNavigate: (node: NodeData) => void;
}

const NodeTree: React.FC<NodeTreeProps> = ({
  activeNode,
  childNodes,
  onNavigate,
}) => {
  const renderChildNodes = () => {
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
              onNavigate={() => onNavigate(node)}
              isActiveNode={false}
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
            id={activeNode?.id || ''}
            name={activeNode?.name || ''}
            parentId={activeNode?.parentId || ''}
            department={activeNode?.department || ''}
            programmingLanguage={activeNode?.programmingLanguage || ''}
            height={activeNode?.height || 0}
            onNavigate={() => onNavigate(activeNode)}
            isActiveNode={true}
          />
          {renderChildNodes()}
        </li>
      </ul>
    </div>
  );
};

export default NodeTree;
