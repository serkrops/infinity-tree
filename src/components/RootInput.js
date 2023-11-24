import React from 'react'
import { Action } from './Action'

export const RootInput = ({
    input,
    setInput,
    onAddBlock,
}) => {
    return (
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
    );
};
