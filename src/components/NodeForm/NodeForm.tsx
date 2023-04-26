import React, { useState } from 'react';
import { AddNodeData, NodeData } from '../../models/node.interfaces';
import { addNode } from '../../services/api.service';
import './NodeForm.css';

interface NodeFormProps {
  parentNode: NodeData;
  onNodeCreated: () => void;
  onCancel: () => void;
}

const NodeForm: React.FC<NodeFormProps> = ({
  parentNode,
  onNodeCreated,
  onCancel,
}) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newNodeData: AddNodeData = {
      name,
      parentId: parentNode.id,
      department: department || undefined,
      programmingLanguage: programmingLanguage || undefined,
    };

    await addNode(newNodeData);

    onNodeCreated();
  };

  return (
    <div className="node-form-container">
      <form onSubmit={handleSubmit}>
        Add Node under: <b>{parentNode.name}</b>
        <div>
          <label htmlFor="name">Node Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            id="department"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="programmingLanguage">Programming Language:</label>
          <input
            id="programmingLanguage"
            type="text"
            value={programmingLanguage}
            onChange={(e) => setProgrammingLanguage(e.target.value)}
          />
        </div>
        <button type="submit">Add Node</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NodeForm;
