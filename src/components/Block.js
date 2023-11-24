import { useState, useRef, useEffect } from 'react';
import { Action } from './Action';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';
import cn from 'classnames';

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

    useEffect(() => {
        handleInnerItems();
    }, [block.items.length]);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);
  
    const handleInnerItems = () => {
        if (block.items.length) {
            setHasInnerItems(true);
        } else {
            setHasInnerItems(false);
        }
    }

    const handleNewBlock = () => {
        setShowInput(true);
    }

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

    const handleDelete = () => {
        handleDeleteNode(block.id);
    };

    return (
        <div>
            <div className={block.id === 1 ? "input-wrapper" : "node-block"}>
                {block.id === 1 ? (
                    <>
                        <input
                            type='text'
                            className='root-input'
                            autoFocus
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Action
                            className='root-create'
                            type='Create root'
                            handleClick={onAddBlock}
                        />
                    </>
                ) : (
                    <div className={cn('flex gap-3',
                        hasInnerItems ? 'justify-between' : 'justify-end',
                    )}>
                        {hasInnerItems && (
                            <Action
                                className='root-create arrow'
                                type={
                                    <>
                                        {expand ? (
                                            <UpArrow width='10px' height='10px' />
                                        ) : (
                                            <DownArrow width='10px' height='10px' />
                                        )}
                                    </>
                                }
                                handleClick={() => setExpand(!expand)}
                            />
                        )}
                        <div className='flex flex-col gap-3 justify-center'>
                            <span
                                contentEditable={editMode}
                                suppressContentEditableWarning={editMode}
                                ref={inputRef}
                            >
                                {block.name}
                            </span>
                            <div className='node-buttons'>
                                {editMode ? (
                                    <>
                                        <Action
                                            className='root-create'
                                            type='Save'
                                            handleClick={onAddBlock}
                                        />
                                        <Action
                                            className='root-create'
                                            type='Cancel'
                                            handleClick={() => {
                                                if (inputRef.current) {
                                                    inputRef.current.innerText = block.name;
                                                }

                                                setEditMode(false);
                                            }}
                                        />
                                    </>
                                ) : (
                                    <div className='flex flex-col gap-3 items-center'>
                                        <div className='flex justify-center'>
                                            <Action
                                                className='root-create'
                                                type='+'
                                                handleClick={() => {
                                                    handleNewBlock();
                                                    setExpand(true);
                                                }}
                                            />
                                            <Action
                                                className='root-create'
                                                type='Edit'
                                                handleClick={() => setEditMode(true)}
                                            />
                                            <Action
                                                className='root-create'
                                                type='-'
                                                handleClick={handleDelete}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={cn('pl-5',
                expand ? 'block' : 'hidden',
            )}>
                {showInput && (
                    <div className="input-wrapper">
                        <input
                            type='text'
                            className='root-input'
                            autoFocus
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Action
                            className='root-create'
                            type='Reply'
                            handleClick={onAddBlock}
                        />
                        <Action
                            className='root-create'
                            type='Cancel'
                            handleClick={onCancelEditting}
                        />
                    </div>
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
