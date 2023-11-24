import { useState } from 'react';
import './App.css';
import { Block } from './components/Block';
import useNode from './hooks/useNode';

const savedData = localStorage.getItem('nestedData');
let parsedData = [];
if (savedData) {
  parsedData = JSON.parse(savedData);
} else {
  parsedData = {
    id: 1,
    items: [],
  };
}

function App() {
  const [blocksData, setBlocksData] = useState(parsedData);
  const { insertNode, editNode, deleteNode } = useNode();

  const saveToLocalStorage = () => {
    localStorage.setItem('nestedData', JSON.stringify(blocksData));
  };

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(blocksData, folderId, item);
    setBlocksData(finalStructure);
    saveToLocalStorage();
  }

  const handleEditNode = (folderId, value) => {
    if (value.trim().length) {
      const finalStructure = editNode(blocksData, folderId, value);
      setBlocksData(finalStructure);
      saveToLocalStorage();
    }
  }

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(blocksData, folderId);
    const temp = { ...finalStructure };
    setBlocksData(temp);
    saveToLocalStorage();
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Block
          handleInsertNode={handleInsertNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
          block={blocksData}
        />
      </div>
    </div>
  );
}

export default App;
