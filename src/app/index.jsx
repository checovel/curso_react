
//npm install babel-preset-react --save
//npm install babel-preset-enc --save
//npm install babel-preset-es2015 --save
//npm install react react-dom -save
//npm run star
import React from 'react';
import {render} from 'react-dom';
import TodosList from './components/TodosList/index.jsx';
import AddForm from './components/AddForm/index.jsx';

import {createStore} from 'redux';
import reducers from './reducers';
import {AddNewTodoList, RemoveTodoList, ToggleTodoList, EditTodoList, AddItem, ToggelItem, RemoveItem, EditItemName} from './actions';

const store = createStore(reducers);

//console.info(AddNewTodoList, );
/*
class Title extends React.Component {
  contructor(props) {
    this.super(props);
  }

  render() {
    console.info(this.props);
    return (<h1>{this.props.text}</h1>);
  }
}

class App extends React.Component {
render() {
return (<div><Title text={'My React super App'} /></div>);
}
}
*/
//const Title = (props) => (<h1>{props.text}</h1>);
//window.getNextId =((n = 0)=> () => n =+ 1)();
//window.getNextId =((n = 0)=> () => n =+ 1)();
window.ids = {get: function(){return this.n++}, n: 0};
window.store = store;
window.ToggleTodoList = ToggleTodoList;
const Title = ({text}) => (
  <div className={'box-header with-border'}>
    <i className={'ion ion-clipboard'}></i>
    <h3 className={'box-title'}>{text}</h3>

    <div className={'box-tools pull-right'}>
      <button type={'button'} className={'btn btn-box-tool'} data-widget={'collapse'}><i className={'fa fa-minus'}></i>
      </button>
      <button type={'button'} className={'btn btn-box-tool'} data-widget={'remove'}><i className={'fa fa-times'}></i></button>
    </div>
  </div>
);
//{todoslist.map(tl => (<TodosList key={`key-${ids.get()}`} name={tl.name} completed={tl.completed} todos={tl.todos} listId={tl.listId} />))}
const App = ({ todoslist, dispatch }) => {
  console.info('todoslist:',todoslist);
  return (
    <div>
      <Title text={'Todo list with React'} />
      <div className={'box-body'}>
      <ul className={'todo-list'}>
        {todoslist.map(tl => (<TodosList {...tl} key={`key-${ids.get()}`} dispatch={dispatch} />))}
      </ul>
      </div>
      <div className={'box-footer clearfix'}>
        <AddForm title={'Add Todos List'} dispatch={dispatch} />
      </div>
    </div>);
};

const appRender = (state)=>render(<App todoslist={state} dispatch={store.dispatch}/>,//list={multipleTodos.getState()}
document.getElementById('app')
);

appRender([]);

store.subscribe(() => appRender(store.getState()));

store.dispatch(AddNewTodoList('supermarket'));
store.dispatch(AddNewTodoList('React Lesson'));
store.dispatch(AddNewTodoList('Guitar Hero'));
store.dispatch(ToggleTodoList(store.getState()[0].listId));
store.dispatch(EditTodoList(store.getState()[0].listId, 'coto'));
store.dispatch(AddItem(store.getState()[0].listId, 'Comprar red bull'));
store.dispatch(AddItem(store.getState()[0].listId, 'eliminar item, eliminar lista, toggle item'));
//console.info(store.getState()[0].listId, store.getState()[0].todos[0].itemId);
store.dispatch(ToggelItem(store.getState()[0].listId, store.getState()[0].todos[0].itemId));
store.dispatch(EditItemName(store.getState()[0].listId, store.getState()[0].todos[0].itemId, 'Comprar Leche'));
//store.dispatch(RemoveItem(store.getState()[0].listId, store.getState()[0].todos[0].itemId));
//store.dispatch(RemoveTodoList(store.getState()[0].listId));

/*
import {createStore} from 'redux';
const reducer = (state = 0, action = {}) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;

    default: return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.info("change:", store. getState()));

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
*/
