import React from "react";
import {TodoItem} from "./TodoItem.tsx";
import {Todo} from "../types.ts";

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: string) => void;
};

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return(
    <ul>
        {
            todos.map(todo => (<TodoItem key = {todo.id} todo = {todo} toggleTodo = {toggleTodo}/>))
        }
    </ul>
)}