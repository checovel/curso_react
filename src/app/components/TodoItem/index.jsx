import React from 'react';
import {
   ToggelItem,
   RemoveItem,
   EditItemName,
 } from '../../actions';

const TodoItem = ({name, completed, itemId, listId, dispatch}) => (
  <li className={completed ? 'done':''}>
    <input
      type={'checkbox'}
      style={{verticalAlign: 'middle'}}
      checked={`${completed?'checked':''}`}
      onChange={()=>dispatch(ToggelItem(listId, itemId))}
      />
    <span className={completed?'text-green':'text-yellow'}>{name}</span>
    <div className={'tools'}>
      <i className={'fa fa-edit'}></i>
      <i className={'fa fa-trash-o'} onClick={()=>dispatch(RemoveItem(listId, itemId))}></i>
    </div>
  </li>
);
 export default TodoItem;
