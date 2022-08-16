import React, { useState } from "react";
import "./Input.css";

function InputToDo() {
  const [text, setText] = useState("");
  return (
    <div className="input-wrapper">
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter" && text.trim() !== "") {
            
            setText("")
          }
        }}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
        placeholder="Create New ToDo" autoFocus />
    </div>
  );
}

export default InputToDo;