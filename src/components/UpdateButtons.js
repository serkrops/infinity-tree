import React from "react";
import { Action } from "./Action";

export const UpdateButtons = ({ onAddBlock, inputRef, block, setEditMode }) => (
  <>
    <Action
      className="bg-slate-500/50 rounded-xl cursor-pointer hover:bg-slate-400 hover:text-white p-3"
      type="Save"
      handleClick={onAddBlock}
    />
    <Action
      className="bg-slate-500/50 rounded-xl cursor-pointer hover:bg-slate-400 hover:text-white p-3"
      type="Cancel"
      handleClick={() => {
        if (inputRef.current) {
          inputRef.current.innerText = block.name;
        }

        setEditMode(false);
      }}
    />
  </>
);
