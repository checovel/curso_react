import {getId} from '../utils';

const todosItems = (state = {}, action ) => {
  console.info(action);
  switch (action.type) {
    case 'ADD_ITEM':       return {name : action.name, listId: action.listId, completed: false, itemId: getId()};
    case 'TOGGLE_ITEM':    return state.itemId === action.itemId ? Object.assign({}, state, { completed: !state.completed}) : state;
    case 'REMOVE_ITEM':    return state.itemId === action.itemId;
    case 'EDIT_ITEM_NAME': return state.itemId === action.itemId ? Object.assign({}, state, { name: action.name}) : state;
    default: return state;
  }
}

export default todosItems;
