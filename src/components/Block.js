import { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { RootInput } from './RootInput';
import { BlockItem } from './BlockItem';
import { CreateNewBlock } from './CreateNewBlock';

export const Block = ({
    block,
    handleInsertNode,
    handleEditNode,
    handleDeleteNode,
}) => {
    const [input, setInput] = useState('');
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
                alert('Write something!!!');
                return;
            }

            handleEditNode(block.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            handleInsertNode(block.id, input);
            setShowInput(false);
            setInput('');
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
    }, [block.items.length]);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    return (
        <div>
            <div className={block.id === 1 ? "input-wrapper" : "node-block"}>
                {block.id === 1 ? (
                    <RootInput
                        input={input}
                        setInput={setInput}
                        onAddBlock={onAddBlock}
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

            <div className={cn('pl-8',
                expand ? 'block' : 'hidden',
            )}>
                {showInput && (
                    <CreateNewBlock
                        input={input}
                        setInput={setInput}
                        onAddBlock={onAddBlock}
                        onCancelEditting={onCancelEditting}
                    />
                )}

                {block?.items?.map(blk => {
                    return <Block
                        key={blk.id}
                        handleInsertNode={handleInsertNode}
                        handleEditNode={handleEditNode}
                        handleDeleteNode={handleDeleteNode}
                        block={blk}
                    />;
                })}
            </div>
        </div>
    )
}
