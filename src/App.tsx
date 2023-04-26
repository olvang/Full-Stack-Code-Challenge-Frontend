import React, { useEffect, useState } from 'react';
import NodeForm from './components/NodeForm/NodeForm';
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
  const [showCreateNewNodeForm, setShowCreateNewNodeForm] = useState(false);

  const fetchChildNodes = async () => {
    const fetchedChildNodes = await getChildNodes(activeNode.id);
    setChildNodes(fetchedChildNodes);
  };

  useEffect(() => {
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
    <div>
      {showCreateNewNodeForm ? (
        <NodeForm
          parentNode={activeNode}
          onNodeCreated={() => {
            setShowCreateNewNodeForm(false);
            fetchChildNodes();
          }}
          onCancel={() => setShowCreateNewNodeForm(false)}
        />
      ) : (
        <NodeTree
          activeNode={activeNode}
          childNodes={childNodes}
          handleNodeClick={handleNodeClick}
          handleGoUp={handleGoUp}
          setShowCreateNewNodeForm={setShowCreateNewNodeForm}
        />
      )}
    </div>
  );
};

export default App;
