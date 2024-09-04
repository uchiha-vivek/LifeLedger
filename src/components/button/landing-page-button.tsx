import { FC } from "react";
import {FiHeart} from 'react-icons/fi'
const Button:FC = () => {

  return (
    <button
    className="flex items-center px-4 py-2 bg-red-500 text-black font-medium rounded-lg hover:bg-red-600 focus:outline-none  focus:ring-2  focus:ring-red-400  "
    >
    <FiHeart className="mr-2" />
    Get Started !
    </button>
  )
}
export default Button
