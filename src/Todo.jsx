import { FaRegTrashAlt } from "react-icons/fa"

const Todo = ({ todo }) => {
  return (
    <li className="border-2 border-gray-300 rounded-lg shadow-lg p-2 m-2">
      <div className="flex row-auto">
        <input type="checkbox" name="" id="" className="mr-2" />
        <span>Learn React</span>
      </div>
      <button className="">{<FaRegTrashAlt />}</button>
    </li>
  )
}
export default Todo
