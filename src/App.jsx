import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import Todo from "./Todo"

function App() {
  const [todos, setTodos] = useState(["learn react", "learn tailwind"])

  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-black to-slate-600 ">
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl">
        <h3 className="text-3xl font-bold text-center text-gray-800 p-2">
          Todo App
        </h3>
        <form className="flex justify-between ">
          <input
            type="text"
            name=""
            id=""
            className="
          border p-2 w-full text-xl
          "
          />
          <button className="border p4 ml-2 bg-black text-white">
            <AiOutlinePlus size={3} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <ul>
          <p className="">you haven 2 todos</p>
        </ul>
      </div>
    </div>
  )
}

export default App
