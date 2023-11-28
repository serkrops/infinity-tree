import React from "react";
import { Action } from "./Action";

export const MainButtons = ({
  handleNewBlock,
  setExpand,
  setEditMode,
  handleDelete,
}) => (
  <div className="flex flex-col items-center">
    <div className="flex justify-center items-center gap-2">
      <Action
        className="flex justify-center items-center bg-slate-500/50 rounded-full cursor-pointer hover:bg-slate-400 hover:text-white p-3 h-10 w-10"
        type="+"
        handleClick={() => {
          handleNewBlock();
          setExpand(true);
        }}
      />
      <Action
        className="bg-slate-500/50 rounded-xl cursor-pointer hover:bg-slate-400 hover:text-white p-3"
        type="Edit"
        handleClick={() => setEditMode(true)}
      />
      <Action
        className="flex justify-center items-center bg-slate-500/50 rounded-full cursor-pointer hover:bg-slate-400 hover:text-white p-3 h-10 w-10"
        type="-"
        handleClick={handleDelete}
      />
    </div>
  </div>
);
