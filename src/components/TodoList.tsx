import React from "react"
import { Todo } from "../models/model";
import './styles.css';
import { SingleTodo } from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {

    return (
        // <div className="todos">
        //     {todos.map((todo) => (
        //         // <li key={todo.id}>{todo.todo}</li>
        // <SingleTodo
        //     todo={todo} 
        //     key={todo.id}
        //     todos={todos}
        //     setTodos={setTodos} 
        // />

        //     ))}
        // </div>

        <div className="container">


            <Droppable droppableId="TodosRemove">
                {
                    (provided) => (
                        <div
                            className="todos"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <span className="todos__heading">
                                Active Tasks

                            </span>

                            {
                                todos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        key={todo.id}
                                        todos={todos}
                                        setTodos={setTodos}
                                    />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }

            </Droppable>

            <Droppable droppableId="TodosLIst">
                {
                    (provided) => (
                        <div
                            className="todos remove"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <span className="todos__heading">
                                Completed Tasks
                            </span>

                            {
                                completedTodos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        key={todo.id}
                                        todos={completedTodos}
                                        setTodos={setCompletedTodos}
                                    />
                                ))
                            }
                            {provided.placeholder}

                        </div>
                    )
                }

            </Droppable>


        </div>

    )
} 