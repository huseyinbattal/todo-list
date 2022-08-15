import { ADD_TODO, DELETE_TODO } from "../actionTypes/todoActionsTypes";
import { todoState } from "../state/todoState";

function todoReducer(state = todoState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };

    case DELETE_TODO:
      return { ...state, todoList: state.todoList.filter() };

    default:
      break;
  }
}

export default todoReducer();
