import React from 'react';
import ButtonAdd from "./ButtonAdd";

const TodoInput = ({todoText, addNewTodo, getInputValue}) => {
    return (
        <label className='mx-auto w-[350px] flex mb-2'>
            <input type='text'
                   placeholder='Type your task here'
                   className='border border-amber-700 p-1 rounded outline-none mr-2 w-full'
                   value={todoText}
                   onChange={getInputValue}
            />
            <ButtonAdd onClickMethod={addNewTodo}>Add new</ButtonAdd>
        </label>
    );
};

export default TodoInput;