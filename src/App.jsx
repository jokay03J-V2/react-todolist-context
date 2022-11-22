import { useState } from 'react'
import InputTodo from './components/InputTodo'
import Todos from './components/Todos'
import TodosContext from './contexts/todos'

function App() {
  const [todos, setTodos] = useState(null);
  const value = { todos, setTodos }

  return (
    <TodosContext.Provider value={value}>
      <div className="App flex flex-col items-center w-screen h-screen">
        <InputTodo></InputTodo>
        <Todos></Todos>
      </div>
    </TodosContext.Provider>
  )
}

export default App
