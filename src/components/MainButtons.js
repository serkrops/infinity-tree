import React from 'react'
import { Action } from './Action';

export const MainButtons = ({
    handleNewBlock,
    setExpand,
    setEditMode,
    handleDelete,
}) => {
    return (
        <div className='node-main-buttons'>
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
    )
}
