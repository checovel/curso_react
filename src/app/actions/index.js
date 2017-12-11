export const AddNewTodoList = name => ({
  type: 'ADD_NEW_TODOS_LIST',
  name,
});

export const RemoveTodoList = listId => ({
  type: 'REMOVE_TODOS_LIST',
  listId,
});

export const ToggleTodoList = listId => ({
  type: 'TOGGLE_TODOS_LIST',
  listId,
});

export const EditTodoList = (listId, name) => ({
  type: 'EDIT_TODOS_LIST',
  listId,
  name,
});

export const AddItem = (listId, name) => ({
  type: 'ADD_ITEM',
  listId,
  name,
});

export const ToggelItem = (listId, itemId) => ({
  type: 'TOGGLE_ITEM',
  listId,
  itemId,
});

export const RemoveItem = (listId, itemId) => ({
  type: 'REMOVE_ITEM',
  listId,
  itemId,
});

export const EditItemName = (listId, itemId, name) => ({
  type: 'EDIT_ITEM_NAME',
  listId,
  itemId,
  name,
});


export default null;
