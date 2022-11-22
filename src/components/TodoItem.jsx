import { useContext } from "react";
import TodosContext from "../contexts/todos";

function TodoItem({ id, name, completed }) {
    const { todos, setTodos } = useContext(TodosContext)
    return (
        <li className="w-full h-12 cursor-pointer flex items-center justify-center" onClick={() => {
            setTodos((prevState) => {
                const index = prevState.findIndex((todoItem) => todoItem.id === id)
                const newState = [...prevState]
                newState[index] = {...prevState[index], completed: !prevState[index].completed}
                return newState
             })
        }}><div className={`${completed ? "line-through" : ""}`}>{name}</div></li>
    )
}

export default TodoItem;