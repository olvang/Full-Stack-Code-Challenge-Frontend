import React, { useEffect, useState } from 'react';
import NodeTree from './components/NodeTree/NodeTree';
import { NodeData } from './models/node.interfaces';
import { getChildNodes } from './services/api.service';

const App: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData>({
    id: 'ceo',
    height: 0,
    name: 'CEO Name',
    parentId: null,
    department: 'Executive',
  });
  const [childNodes, setChildNodes] = useState<NodeData[]>([]);

  useEffect(() => {
    const fetchChildNodes = async () => {
      try {
        const nodes = await getChildNodes(activeNode.id);
        setChildNodes(nodes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChildNodes();
  }, [activeNode]);

  const handleNavigate = (node: NodeData) => {
    setActiveNode(node);
  };

  return (
    <NodeTree
      activeNode={activeNode}
      childNodes={childNodes}
      onNavigate={handleNavigate}
    />
  );
};

export default App;
