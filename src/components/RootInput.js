import React from "react";
import { Action } from "./Action";

export const RootInput = ({ input, setInput, onAddBlock, reset }) => (
  <>
    <input
      type="text"
      className="border border-slate-400 bg-slate-300/50 rounded-xl w-36 p-3"
      autoFocus
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter the value"
    />
    <Action
      className="bg-slate-500/50 rounded-xl cursor-pointer hover:bg-slate-400 hover:text-white p-3"
      type="Create root"
      handleClick={onAddBlock}
    />
    <Action
      className="bg-slate-500/50 rounded-xl cursor-pointer hover:bg-slate-400 hover:text-white p-3"
      type="Reset"
      handleClick={reset}
    />
  </>
);
