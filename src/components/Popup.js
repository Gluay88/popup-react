import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return props.triggle ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTriggle(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
