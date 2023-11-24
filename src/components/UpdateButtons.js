import React from 'react'
import { Action } from './Action';

export const UpdateButtons = ({
    onAddBlock,
    inputRef,
    block,
    setEditMode,
}) => {
    return (
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
    )
}
