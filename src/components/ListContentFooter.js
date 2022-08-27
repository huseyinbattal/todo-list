import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoFilter } from "../store/actions/todoActions";
import "./ListContentFooter.css"

function ListContentFooter() {
  const { todoFilter, todoList } = useSelector((state) => state.todo)
  const dispatch=useDispatch()
  return (
    <div className="content-footer">
      <div className="left-item">
        {todoList.filter((x)=>!x.complete).length + ' kaldı'}
        </div>
      <div className={`menu-item ${todoFilter === "all"?"active":""}`} onClick={() => {
        dispatch(setTodoFilter("all"))
          }}>Tümü</div>
          <div  onClick={() => {
        dispatch(setTodoFilter("complete"))
          }} className={`menu-item ${todoFilter==="complete"?"active":""}`}>Tamamlanan</div>
    </div>
  );
}

export default ListContentFooter;