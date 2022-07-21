import React from 'react';

const TodoItem = ({todoText, completed, id, removeTodo, toggleChecked}) => {
    return (
        <div
            className='max-w-[350px] min-w-[280px] w-full border cursor-grab
                       border-amber-700 p-1 rounded flex mb-2 mx-auto'
        >
            <input
                type='checkbox'
                value={completed}
                onChange={() => toggleChecked(id)}
                className='mr-1 justify-self-start checked:bg-black'
                checked={completed}
            />
            <span className={`w-full ${(completed === true) ? 'line-through' : ''}`}>{todoText}</span>
            <button
                type='button'
                className='px-1 font-semibold self-start justify-self-end'
                onClick={() => removeTodo(id)}
            >X</button>
        </div>
    );
};

export default TodoItem;