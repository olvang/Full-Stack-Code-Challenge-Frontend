import React, { useState } from 'react';
import NodeTree from './components/NodeTree/NodeTree';

const testData = [
  {
    id: 'root',
    name: 'Root Node',
    parentId: null,
    department: '',
    programmingLanguage: '',
    height: 1,
  },
  {
    id: 'a',
    name: 'Child A',
    parentId: 'root',
    department: 'Test',
    programmingLanguage: 'JavaScript',
    height: 2,
  },
  {
    id: 'b',
    name: 'Child B',
    parentId: 'root',
    department: 'Test',
    programmingLanguage: 'JavaScript',
    height: 2,
  },
];

const App: React.FC = () => {
  const [activeNode, setActiveNode] = useState('');

  const handleNavigate = () => {
    // Handle navigation to node
  };

  return <NodeTree nodes={testData} onNodeClick={handleNavigate} />;
};

export default App;
