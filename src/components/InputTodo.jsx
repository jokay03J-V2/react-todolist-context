import { useContext, useState } from 'react'
import TodosContext from '../contexts/todos';
import { v4 as uuid} from "uuid"

function InputTodo() {
  const [inputValue, setInputValue] = useState("");
  const { todos, setTodos } = useContext(TodosContext);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setTodos((current) => {
      if (todos) return [...todos, { id: uuid(), name: inputValue, completed: false }]
      else {
        return [{ id: uuid(), name: inputValue, completed: false }]
      }
    })
    setInputValue("")
  }

  return (
    <div>
    <form className="App flex m-8" onSubmit={handleSubmit}>
      <input className='border-sm border-2 border-black text-center focus:outline-none rounded-lg' value={inputValue} placeholder='entrer votre todo' onChange={(ev) => setInputValue(ev.target.value)}></input>
      <button type='submit' className='flex justify-center items-center mx-4 border-2 border-black rounded-lg'>envoyer</button>
    </form>
    <div className='flex justify-center'><button className='m-3 text-blue-400'>all</button><button className='m-3'>completed</button><button className='m-3'>not completed</button></div>
    </div>
  )
}

export default InputTodo
