import { ADD_TODO } from "../actionTypes/todoActionsTypes";
import { todoState } from "../state/todoState";

function todoReducer(state = todoState, action) {
    switch (action.type) {
        case ADD_TODO:
            
            break;
    
        default:
            break;
    }
}

export default todoReducer();