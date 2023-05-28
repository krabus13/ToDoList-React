import React from "react";
import "../style.css";
import { DownBarProps } from "./DownBar";
const Filter: React.FC<DownBarProps> = ({ setFilter, filter }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        className={filter === "all" ? "selected" : " "}
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setFilter("all");
        }}
      >
        All
      </a>
      <a
        className={filter === "active" ? "selected" : " "}
        href="/active"
        onClick={(e) => {
          e.preventDefault();
          setFilter("active");
        }}
      >
        Active
      </a>
      <a
        className={filter === "completed" ? "selected" : " "}
        href="/completed"
        onClick={(e) => {
          e.preventDefault();
          setFilter("completed");
        }}
      >
        Completed
      </a>
    </div>
  );
};
export default Filter;
