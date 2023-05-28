import React from "react";
import Filter from "./Filter";
import MyButton from "./MyButton/MyButton";
import IPost from "../Icomplete";

export interface DownBarProps {
  setFilter?: React.Dispatch<React.SetStateAction<string>>;
  completed?: number;
  removeSelected?: () => void;
  filter?: string;
  post?: IPost[];
}

const DownBar: React.FC<DownBarProps> = ({
  setFilter,
  completed,
  removeSelected,
  filter,
  post,
}) => {
  return (
    <div>
      <div className="Bar">
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {completed} items left
        </span>
        <Filter setFilter={setFilter} filter={filter} />
        <MyButton onClick={removeSelected}>Clear completed</MyButton>
      </div>
    </div>
  );
};
export default DownBar;
