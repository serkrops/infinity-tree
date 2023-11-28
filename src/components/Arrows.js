import React from "react";
import { Action } from "./Action";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";

export const Arrows = ({ expand, setExpand }) => (
  <Action
    className="flex justify-center items-center rounded-full cursor-pointer p-3 h-10 w-10 bg-slate-500/50 hover:bg-slate-400"
    type={
      <>
        {expand ? (
          <UpArrow width="10px" height="10px"/>
        ) : (
          <DownArrow width="10px" height="10px" />
        )}
      </>
    }
    handleClick={() => setExpand(!expand)}
  />
);
