import React, {useState, useContext} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import {addTodo} from "../apis/api";

export const TodoGenerator = () => {
    const [inputValue, setInputValue] = useState('');
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = async () => {
        if (inputValue && inputValue.trim()) {
            const newTodo = {
                done: false,
                text: inputValue.trim()
            }
            const response = await addTodo(newTodo)
            dispatch({type: 'ADD', todo: response.data});
            setInputValue('');
        }
    };

    return (
        <div className="todo-generator">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new todo..."
                className="todo-input"
            />
            <button type="submit" className="add-btn" onClick={handleSubmit}>
                add
            </button>
        </div>
    );
};
