import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Input.css";
import {addTodo} from "../store/actions/todoActions";

function InputToDo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="input-wrapper">
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter" && text.trim() !== "") {
            dispatch(addTodo({ id: new Date().getTime(),text,complete:false }));
            setText("");
          }
        }}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Yeni bir şey ekle..."
        autoFocus
      />
    </div>
  );
}

export default InputToDo;
