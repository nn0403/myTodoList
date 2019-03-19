import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return(
        <div>
            <Input
                placeholder='todo info'
                style={{ width: '300px', margin: '10px' }}
                value = { props.inputValue }
                onChange = { props.handleInputChange }
            />
            <Button
                type = 'primary'
                onClick = { props.handleButtonClick }
            >提交</Button>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={ props.list }
                renderItem={(item, index) => (<List.Item
                    onClick = { () => {
                        props.handleItemDelete(index)
                    } }
                >{item}</List.Item>)}
            />
        </div>
    )
};

export default TodoListUI;