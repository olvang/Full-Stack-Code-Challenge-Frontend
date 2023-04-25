import React from 'react';
import Node from './components/Node/Node';

const App: React.FC = () => {
  const node = {
    id: '1',
    name: 'CEO NAME',
    parentId: null,
    height: 0,
    department: 'Management',
    programmingLanguage: undefined,
  };

  const handleNavigate = () => {
    // Handle navigation to parent node
  };

  return (
    <div className="app">
      <Node {...node} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
