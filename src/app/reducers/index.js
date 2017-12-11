import todosList from './todoslist';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_TODOS_LIST': return [...state, todosList(undefined, action)];
    case 'REMOVE_TODOS_LIST': return state.filter(tl => !todosList(tl, action));
    case 'TOGGLE_TODOS_LIST': return state.map(tl => todosList(tl, action));
    case 'EDIT_TODOS_LIST': return state.map(tl => todosList(tl, action));
    case 'ADD_ITEM': return state.map(tl => todosList(tl, action));
    case 'TOGGLE_ITEM': return state.map(tl => todosList(tl, action));
    case 'REMOVE_ITEM': return state.map(tl => todosList(tl, action));
    case 'EDIT_ITEM_NAME': return state.map(tl => todosList(tl, action));
    default: return state;

  }
}

export default reducer;
