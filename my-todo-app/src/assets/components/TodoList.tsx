import {Todo} from "../../types.ts";
import React from "react";
import {TodoItem} from "./TodoItem.tsx";

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return(
    <ul>
        {
            todos.map(todo => (<TodoItem key = {todo.id} todo = {todo} toggleTodo = {toggleTodo}/>))
        }
    </ul>
)}

// export const TodoList = ({todos, toggleTodo}: TodoListProps) => {
//     return(
//         <ul>
//             {
//                 todos.map(todo => (<TodoItem key = {todo.id} todo = {todo} toggleTodo = {toggleTodo}/>))
//             }
//         </ul>
//     )}