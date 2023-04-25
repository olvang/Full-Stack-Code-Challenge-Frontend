import React from 'react';
import './Node.css';
import { NodeData } from '../../models/node.interfaces';

interface NodeNavigationProps {
  onNavigate: () => void;
}

type Props = NodeData & NodeNavigationProps;

const Node: React.FC<Props> = ({
  name,
  department,
  programmingLanguage,
  onNavigate,
}) => {
  return (
    <div className="node-container">
      <div className="node">
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
      </div>
    </div>
  );
};

export default Node;
