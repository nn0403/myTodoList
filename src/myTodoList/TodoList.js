import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI';
import store from './store';
import { getInputChangeAction, getButtonClickAction, getItemDeleteAction, getTodoList } from './store/actionCreators';



class TodoList extends Component{

    constructor(props) {
        super(props);

        this.state = store.getState();

        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete(this);

        store.subscribe(this.handleStoreChange);
    }

    render () {
        return (
            <TodoListUI
                inputValue = { this.state.inputValue }
                list = { this.state.list }
                handleInputChange = { this.handleInputChange }
                handleButtonClick = { this.handleButtonClick }
                handleItemDelete = { this.handleItemDelete }
            />
        )
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleItemDelete(index) {
        const action = getItemDeleteAction(index);
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    };

    handleButtonClick() {
        const action = getButtonClickAction();
        store.dispatch(action);
    }

}

export default TodoList;