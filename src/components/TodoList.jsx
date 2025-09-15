import './TodoList.css'
import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";
import {useReducer} from "react";
import {initialState, todoReducer} from "../reducers/todoReducer";
import {TodoContext} from "../contexts/TodoContext";

export const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="todo-list">
            <TodoContext.Provider value={{todos, dispatch}}>
                <h1 className="todo-title">Todo List</h1>
                <TodoGroup/>
                <TodoGenerator/>
            </TodoContext.Provider>
        </div>
    );
}