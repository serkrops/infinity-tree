import React from "react";
import { Action } from "./Action";

export const CreateNewBlock = ({
  input,
  setInput,
  onAddBlock,
  onCancelEditting,
}) => (
  <div className="flex gap-3 mb-3 pl-8">
    <input
      type="text"
      className="bg-slate-300/50 rounded-xl w-36 p-3"
      autoFocus
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter the value"
    />
    <Action
      className="bg-slate-500/50 rounded-xl cursor-pointer hover:bg-slate-400 hover:text-white p-3"
      type="Create new"
      handleClick={onAddBlock}
    />
    <Action
      className="bg-slate-500/50 rounded-xl cursor-pointer hover:bg-slate-400 hover:text-white p-3"
      type="Cancel"
      handleClick={onCancelEditting}
    />
  </div>
);
