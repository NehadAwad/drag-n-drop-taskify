import React from "react"
import { Todo } from "../model";
import './styles.css';
import { SingleTodo } from "./SingleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

    return (
        <div className="todos">
            {todos.map((todo) => (
                // <li key={todo.id}>{todo.todo}</li>
                <SingleTodo
                    todo={todo} 
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos} 
                />

            ))}
        </div>
    )
} 