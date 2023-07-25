import { Link } from "react-router-dom";
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from "react-icons/ai"
import {SiLeetcode,SiCodechef} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'


export const Footer = () => {
  return (
    <div  class="w-full  opacity-80 hover:opacity-90 h-8 border-white
    fixed left-0 bottom-0
    
    flex justify-center items-center
    text-white text-2xl
    ">
         <div className=" rounded-[20px] shadow-gray-600 shadow-md bg-white  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <ul className="flex flex-wrap items-center  text-sm text-gray-500 dark:text-gray-400 sm:mt-0 justify-center">
              <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mr-4 text-4xl hover:underline md:mr-6 "><BsInstagram className="mx-10"/></a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/shubam-chaudhary-41005a241/" target="_blank" rel="noreferrer" className="mr-4 text-4xl hover:underline md:mr-6">  <AiFillLinkedin className="mx-10"/></a>
              </li>
              <li>
                  <a href="https://leetcode.com/SHUBAMCHAUDHARY/" target="_blank" rel="noreferrer" className="mr-4 text-4xl hover:underline md:mr-6"><SiLeetcode className="mx-10"/></a>
              </li>
              <li>
                  <a href="https://github.com/shubamchaudhary" target="_blank" rel="noreferrer" className="mr-4 text-4xl hover:underline md:mr-6"><BsGithub className="mx-10"/></a>
              </li>
             
              
          </ul>
      </div>
    </div>
  )
}