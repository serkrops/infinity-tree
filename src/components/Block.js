import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { RootInput } from "./RootInput";
import { BlockItem } from "./BlockItem";
import { CreateNewBlock } from "./CreateNewBlock";

export const Block = ({
  block,
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  reset,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(true);
  const [hasInnerItems, setHasInnerItems] = useState(false);
  const inputRef = useRef(null);

  const handleInnerItems = () => {
    if (block.items.length) {
      setHasInnerItems(true);
    } else {
      setHasInnerItems(false);
    }
  };

  const handleNewBlock = () => {
    setShowInput(true);
  };

  const handleDelete = () => {
    handleDeleteNode(block.id);
  };

  const onAddBlock = () => {
    if (editMode) {
      if (!inputRef?.current?.innerText.trim().length) {
        alert("Write something!!!");
        return;
      }

      handleEditNode(block.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(block.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) {
      setEditMode(false);
    }
  };

  const onCancelEditting = () => {
    setShowInput(false);
  };

  useEffect(() => {
    handleInnerItems();
  }, [block?.items?.length]);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  return (
    <div>
      <div
        className={
          block.id === 1
            ? "flex gap-3 mb-3 pl-8"
            : "flex flex-col gap-3 text-center rounded-xl p-3 mb-3 w-56"
        }
      >
        {block.id === 1 ? (
          <RootInput
            input={input}
            setInput={setInput}
            onAddBlock={onAddBlock}
            reset={reset}
          />
        ) : (
          <BlockItem
            hasInnerItems={hasInnerItems}
            expand={expand}
            setExpand={setExpand}
            editMode={editMode}
            inputRef={inputRef}
            block={block}
            onAddBlock={onAddBlock}
            setEditMode={setEditMode}
            handleNewBlock={handleNewBlock}
            handleDelete={handleDelete}
          />
        )}
      </div>

      <div
        className={cn("pl-8", {
          block: expand,
          hidden: !expand,
        })}
      >
        {showInput && (
          <CreateNewBlock
            input={input}
            setInput={setInput}
            onAddBlock={onAddBlock}
            onCancelEditting={onCancelEditting}
          />
        )}

        {block?.items?.map((blk) => (
          <Block
            key={blk.id}
            handleInsertNode={handleInsertNode}
            handleEditNode={handleEditNode}
            handleDeleteNode={handleDeleteNode}
            block={blk}
          />
        ))}
      </div>
    </div>
  );
};
