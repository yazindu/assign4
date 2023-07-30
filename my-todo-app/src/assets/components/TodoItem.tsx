import {Todo} from "../../types.ts";
import React from "react";

type TodoItemProps = {
    todo: Todo;
    toggleTodo: ( id: number ) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({todo, toggleTodo})=>{
    return(
        <li>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
                {todo.text}
            </label>
        </li>
    );
};