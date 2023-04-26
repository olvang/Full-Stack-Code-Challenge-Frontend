import React from 'react';
import './Node.css';
import { NodeData } from '../../models/node.interfaces';

interface NodeNavigationProps {
  onNavigate: () => void;
  isActiveNode: boolean;
}

type Props = NodeData & NodeNavigationProps;

const Node: React.FC<Props> = ({
  name,
  parentId,
  department,
  programmingLanguage,
  onNavigate,
  isActiveNode,
}) => {
  return (
    <div className="node-container">
      <button className="node" onClick={onNavigate}>
        <h3>{name}</h3>
        {department && (
          <span className="node__badge node__badge--department">
            {department}
          </span>
        )}
        {programmingLanguage && (
          <span className="node__badge node__badge--language">
            {programmingLanguage}
          </span>
        )}
      </button>
    </div>
  );
};

export default Node;
