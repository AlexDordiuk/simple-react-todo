import React, {useEffect, useState} from 'react';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

import {Reorder, AnimatePresence} from 'framer-motion';

const newItemAnimation = {
    initial: {
        opacity: 1,
        scale: 0.1
    },
    animate: {
        opacity: 1,
        scale: 1
    },
    exit: {
        opacity: 0,
        scale: 0.1
    }
}


const TodosWrapper = () => {

    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    useEffect(() => {
        setTodos(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addNewTodo = () => {
        if(todoText.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    todoText,
                    completed: false
                }
            ])
        }
        setTodoText('')
    }

    const getInputValue = (e) => {
        setTodoText(e.target.value)
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleChecked = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo;
            return {...todo, completed: !todo.completed}
        }))
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    return (
        <div>
            <TodoInput
                todoText={todoText}
                addNewTodo={addNewTodo}
                getInputValue={getInputValue}
                className=''
            />
            <Reorder.Group
                values={todos}
                onReorder={setTodos}
                axis='y'
            >
                <AnimatePresence>
                    {
                        todos.map(todo => {
                            return <Reorder.Item
                                value={todo}
                                key={todo.id}
                                whileDrag={{scale: 1.1}}
                                {...newItemAnimation}
                            >
                                <TodoItem
                                    todoText={todo.todoText}
                                    completed={todo.completed}
                                    id={todo.id}
                                    removeTodo={removeTodo}
                                    toggleChecked={toggleChecked}
                                />
                            </Reorder.Item>
                        })
                    }
                </AnimatePresence>
            </Reorder.Group>

        </div>
    );
};

export default TodosWrapper;