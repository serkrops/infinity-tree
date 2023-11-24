import React from 'react'
import { Action } from './Action'

export const CreateNewBlock = ({
    input,
    setInput,
    onAddBlock,
    onCancelEditting,
}) => {
    return (
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
    )
}
