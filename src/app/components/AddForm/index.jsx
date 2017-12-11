import React from 'react';

import {AddNewTodoList, AddItem
//  , EditTodoList, EditItemName
} from '../../actions';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.changeValue = this.changeValue.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  changeValue(evt) {
    //console.info(evt.target.value, this);
    this.setState({value: evt.target.value});
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    if (!this.state.value) return;
    //console.info('adding target', evt);
    this.props.dispatch(this.props.listId ?
      AddItem(this.props.listId, this.state.value)
      : AddNewTodoList(this.state.value));
      this.setState({ value: '' })
  }
  render() {
    const {title, dispatch} = this.props;
    return (
      <form style={{marginTop: '5px'}} action={'#'} method={'post'} onSubmit={this.onSubmitHandler}>
        <div className={'input-group'}>
          <input type={'text'} name={'message'}
          onChange={this.changeValue}
          value={this.state.value} placeholder={'Type Message ...'} className={'form-control'} />
              <span className={'input-group-btn'}>
                <input type={'submit'} className={'btn btn-info btn-flat'} value={title} />
              </span>
        </div>
      </form>
    );
  }
}

export default AddForm;
