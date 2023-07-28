import { FaRegTrashAlt, FaPen, FaCheck } from "react-icons/fa"
import { AiFillCloseSquare } from "react-icons/ai"
import { useState } from "react"
import { db } from "./Firebase"
import {
  updateDoc,
  doc,
} from "firebase/firestore"

const style = {
  li: "flex justify-between bg-slate-200 p-4 my-2 capitalize",
  liComplete: "flex justify-between bg-slate-200 p-4 my-2 capitalize",
  row: "flex items-center",
  text: "ml-2 cursor-pointer ",
  textComplete: "ml-2 cursor-pointer line-through text-gray-400",
  button: "cursor flex items-center justify-center",
}

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(todo.text)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const editNameTodo = async () => {
    await updateDoc(doc(db, "todos", todo.id), {
      text: value,
    })
  }

  const handleConfirmation = () => {
    editNameTodo()
    setIsEditing(false)
  }

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        {isEditing ? (
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
            className="ml-2 rounded-md pl-2"
          />
        ) : (
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <div className="flex gap-2 item-center">
            <button onClick={() => setIsEditing(false)}>
              {" "}
              {<AiFillCloseSquare size="1.2em" />}
            </button>
            <button onClick={()=> handleConfirmation()}>
              <FaCheck size="1.2em" />
            </button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <FaPen size="1.2em" />
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)}>
          {" "}
          {<FaRegTrashAlt size="1.2em" />}
        </button>
      </div>
    </li>
  )
}
export default Todo
