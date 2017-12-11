import React from 'react';
import TodoItem from '../TodoItem/index.jsx';
import AddForm from '../AddForm/index.jsx';
import {AddNewTodoList,
   RemoveTodoList,
   ToggleTodoList,
   EditTodoList,
   AddItem,
   ToggelItem,
   RemoveItem,
   EditItemName,
 } from '../../actions';

const TodosList = ({name, todos, completed, listId,  dispatch}) => (
    <li className={completed ? 'done':''}>
    <input type={'checkbox'}
     style={{verticalAlign: 'middle'}}
     checked={`${completed?'checked':''}`}
     onChange={()=>dispatch(ToggleTodoList(listId))}
     />
    <span className={'text'}>{name}</span>
    <div className={'tools'}>
      <i className={'fa fa-edit'}></i>
      <i className={'fa fa-trash-o'} onClick={()=>dispatch(RemoveTodoList(listId))}></i>
    </div>
        <ul>
        {todos.map(t => (
          <TodoItem
            key={`key-${ids.get()}`}
            name={t.name}
            completed={t.completed}
            itemId={t.itemId}
            listId={t.listId}
            dispatch={dispatch}
            />
        ))}
        </ul>
        <AddForm title={'New Item'} listId={listId} dispatch={dispatch} />
    </li>
);
 export default TodosList;
