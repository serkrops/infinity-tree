import React from 'react'
import cn from 'classnames';
import { Arrows } from './Arrows';
import { UpdateButtons } from './UpdateButtons';
import { MainButtons } from './MainButtons';

export const BlockItem = ({
    hasInnerItems,
    expand,
    setExpand,
    editMode,
    inputRef,
    block,
    onAddBlock,
    setEditMode,
    handleNewBlock,
    handleDelete,
}) => (
        <div className={cn('flex gap-3',
            hasInnerItems ? 'justify-between' : 'justify-end',
        )}>
            {hasInnerItems && (
                <Arrows expand={expand} setExpand={setExpand} />
            )}
            <div className='inner-items'>
                <span
                    contentEditable={editMode}
                    suppressContentEditableWarning={editMode}
                    ref={inputRef}
                >
                    {block.name}
                </span>
                <div className='node-buttons'>
                    {editMode ? (
                        <UpdateButtons
                            onAddBlock={onAddBlock}
                            inputRef={inputRef}
                            block={block}
                            setEditMode={setEditMode}
                        />
                    ) : (
                        <MainButtons
                            handleNewBlock={handleNewBlock}
                            setExpand={setExpand}
                            setEditMode={setEditMode}
                            handleDelete={handleDelete}
                        />
                    )}
                </div>
            </div>
        </div>
    );
