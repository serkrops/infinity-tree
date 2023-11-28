import { useEffect, useState } from "react";
import { Block } from "./components/Block";
import useNode from "./hooks/useNode";

const initialData = {
  id: 1,
  items: [],
};

function App() {
  const [blocksData, setBlocksData] = useState(initialData);
  const { insertNode, editNode, deleteNode } = useNode();

  useEffect(() => {
    const savedData = localStorage.getItem("nestedData");
    if (savedData) {
      setBlocksData(JSON.parse(savedData));
    }
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem("nestedData", JSON.stringify(blocksData));
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setBlocksData({
      id: 1,
      items: [],
    });
  };

  const handleInsertNode = (folderId, item) => {
    if (item.trim().length) {
      const finalStructure = insertNode(blocksData, folderId, item);
      setBlocksData(finalStructure);
      saveToLocalStorage();
    } else {
      alert("Write something!!!");
      return;
    }
  };

  const handleEditNode = (folderId, value) => {
    if (value.trim().length) {
      const finalStructure = editNode(blocksData, folderId, value);
      setBlocksData(finalStructure);
      saveToLocalStorage();
    }
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(blocksData, folderId);
    const temp = { ...finalStructure };
    setBlocksData(temp);
    saveToLocalStorage();
  };

  return (
    <div className="flex flex-col items-center gap-3 m-5">
      <div className="flex justify-start w-full">
        <Block
          handleInsertNode={handleInsertNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
          block={blocksData}
          reset={clearLocalStorage}
        />
      </div>
    </div>
  );
}

export default App;
