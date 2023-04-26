import React, { useEffect, useState } from 'react';
import NodeTree from './components/NodeTree/NodeTree';
import { NodeData } from './models/node.interfaces';
import { getChildNodes } from './services/api.service';

const initialNode = {
  id: 'ceo',
  height: 0,
  name: 'CEO Name',
  parentId: null,
  department: 'Executive',
};

const App: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData>(initialNode);
  const [parentNodes, setParentNodes] = useState<NodeData[]>([]);
  const [childNodes, setChildNodes] = useState<NodeData[]>([]);

  useEffect(() => {
    // Fetch child nodes for the current node and update state
    const fetchChildNodes = async () => {
      const fetchedChildNodes = await getChildNodes(activeNode.id); // Assuming getChildren fetches child nodes from the backend
      setChildNodes(fetchedChildNodes);
    };

    fetchChildNodes();
  }, [activeNode]);

  const handleNodeClick = (node: NodeData) => {
    setParentNodes([...parentNodes, activeNode]);
    setActiveNode(node);
  };

  const handleGoUp = () => {
    if (parentNodes.length > 0) {
      setActiveNode(parentNodes[parentNodes.length - 1]);
      setParentNodes(parentNodes.slice(0, -1));
    }
  };

  return (
    <NodeTree
      activeNode={activeNode}
      childNodes={childNodes}
      handleNodeClick={handleNodeClick}
      handleGoUp={handleGoUp}
    />
  );
};

export default App;
