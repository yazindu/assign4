import {useRef, useState} from 'react'
import {TodoList} from "./components/TodoList.tsx";
import {Todo} from './types.ts'
import {v4 as uuidv4} from 'uuid';

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const todoInputRef = useRef<HTMLInputElement>(null);

    const toggleTodo = (selectedTodoId: string) => {
        const newTodos = todos.map(todo => todo.id === selectedTodoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
    };
    const addTodo = (text: string) => {
        const newTodo: Todo = {id: uuidv4(), text: text, completed: false};
        setTodos([...todos, newTodo]);
    }

    return (
        <div className="App">
            <h1>Todo List</h1>
            <form>
                <input ref={todoInputRef} name='todo' type='text'/>
                <button onClick={e => {
                    e.preventDefault()
                    if (!todoInputRef.current) return;
                    addTodo(todoInputRef.current.value)
                }}>
                    Add todo
                </button>
            </form>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default App;
