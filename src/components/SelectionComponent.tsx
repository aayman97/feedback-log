import React from "react";

import "./style/SelectionComponent.css";

type Props = {
  title: String;
  borderRight: Boolean;
};
const SelectionComponent: React.FC<Props> = ({ title, borderRight }) => {
  return (
    <div className="conatiner">
      {/* title and button container */}
      <div className="title-button-container">
        <h3>{title}</h3>
        <button className="add-new-button">
          <h4 className="button-text">add new</h4>
        </button>
      </div>

      <div className="data-container" style={borderRight ? { borderRightColor: "black", borderRightStyle: "solid", borderRightWidth: 2 } : {}}></div>
    </div>
  );
};

export default SelectionComponent;
