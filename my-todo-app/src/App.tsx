import { useState } from 'react'
import {TodoList} from "./assets/components/TodoList.tsx";
import { Todo } from './types.ts'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo = (selectedTodoId: number) => {
      const newTodos = todos.map(todo => todo.id === selectedTodoId ? {...todo, completed: !todo.completed} : todo);
      setTodos(newTodos);
  };
    const addTodo = (text: string) => {
        const newTodo = {id: uuidv4(), text: text, completed: false};
        setTodos([...todos, newTodo]);
    }

  return (
<div className="App">
<h1>Todo List</h1>
    <form onSubmit={e => {
        e.preventDefault();
        const text = e.target.elements.todo.value = '';
        addTodo(text);
        e.target.element.todo.value = '';
    }}>
        <input name='todo' type='text'/>
        <button type="submit">Add todo</button>
    </form>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
</div>
  );
};

export default App;
