import {CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from "axios/index";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});


export const getButtonClickAction = () => ({
   type: ADD_LIST_ITEM
});

export const getItemDeleteAction = (index) => ({
   type: DELETE_LIST_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});


export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/List.json').then( (res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        })
    }
};