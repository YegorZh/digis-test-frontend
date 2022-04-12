import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

ReactDOM.render(
  <div className="flex h-screen justify-center bg-gray-100">
    <div className="mt-4 self-start rounded-3xl bg-violet-900 shadow-md shadow-slate-400">
      <h1 className="p-4 text-[2rem] font-bold text-indigo-300">
        Hello Simple React App!
      </h1>
    </div>
  </div>,
  document.getElementById("root")
);
