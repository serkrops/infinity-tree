import React from 'react';
import { Action } from './Action';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';

export const Arrows = ({ expand, setExpand }) => {
    return (
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
    );
};
