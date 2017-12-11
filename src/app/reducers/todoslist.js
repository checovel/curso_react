import {getId} from '../utils';
import todosItems from './todositems';

const todosList = (state = {name: '', todos: [] }, action) => {
  //console.info(action);
  switch (action.type) {
      case 'ADD_NEW_TODOS_LIST': return { name: action.name, todos: [], completed: false, listId: getId()};
      case 'REMOVE_TODOS_LIST':  return state.listId === action.listId;
      case 'TOGGLE_TODOS_LIST':  return state.listId === action.listId ? Object.assign({}, state, { completed: !state.completed}) : state;
      case 'EDIT_TODOS_LIST':    return state.listId === action.listId ? Object.assign({}, state, { name: action.name}) : state;
      case 'ADD_ITEM':           return state.listId === action.listId ? Object.assign({}, state, { todos: [...state.todos, todosItems(undefined, action) ]}) : state;
      case 'TOGGLE_ITEM':        return state.listId === action.listId ? Object.assign({}, state, { todos: state.todos.map(itl => todosItems(itl, action)) }) : state;
      case 'REMOVE_ITEM':        return state.listId === action.listId ? Object.assign({}, state, { todos: state.todos.filter(itl => !todosItems(itl, action)) }) : state;
      case 'EDIT_ITEM_NAME':     return state.listId === action.listId ? Object.assign({}, state, { todos: state.todos.map(itl => todosItems(itl, action)) }) : state;
    default: return state;

  }
}

export default todosList;
