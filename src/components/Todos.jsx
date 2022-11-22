import { useContext } from "react";
import TodosContext from "../contexts/todos";
import TodoItem from "./TodoItem";

function Todos() {
    const { todos, setTodos } = useContext(TodosContext)
    return (
        <div className="w-10/12 h-5/6 overflow-visible border border-black">{!todos ? <h1 className="text-center text-3xl">aucune todo</h1> : todos.map((todo) => <TodoItem key={todo.id} name={todo.name} id={todo.id} completed={todo.completed}></TodoItem>)}</div>
    )
}

export default Todos;