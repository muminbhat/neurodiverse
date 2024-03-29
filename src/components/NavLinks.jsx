import React from 'react'
import DarkModeSwitcher from "./DarkModeSwitcher";
import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <div><ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
    <li>
      <Link
        to="/"
        className="block py-2 pl-3 pr-4 tracking-[.1rem] text-gray-600 font-md text-lg animate transition-all duration-500 rounded md:bg-transparent md:p-0 md:hover:text-[#E75F14] dark:md:hover:text-[#E75F14] dark:text-white"
        aria-current="page"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to={"/services"}
        className="block py-2 pl-3 pr-4 text-gray-600 tracking-[.1rem] font-md text-lg rounded animate transition-all duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E75F14]  md:p-0 dark:md:hover:text-[#E75F14] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="block py-2 pl-3 pr-4 text-gray-600 tracking-[.1rem] rounded font-md text-lg animate transition-all duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E75F14] md:p-0 dark:md:hover:text-[#E75F14] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="/team"
        className="block py-2 pl-3 pr-4 text-gray-600 tracking-[.1rem] rounded font-md text-lg animate transition-all duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E75F14] md:p-0 dark:md:hover:text-[#E75F14] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Team
      </Link>
    </li>
    <li>
      <Link
        to="/media"
        className="block py-2 pl-3 pr-4 text-gray-600 tracking-[.1rem] rounded font-md text-lg animate transition-all duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E75F14] md:p-0 dark:md:hover:text-[#E75F14] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Media
      </Link>
    </li>
    <li>
      <Link
        to="/internship"
        className="block py-2 pl-3 pr-4 text-gray-600 tracking-[.1rem] rounded font-md text-lg animate transition-all duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E75F14] md:p-0 dark:md:hover:text-[#E75F14] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Internships
      </Link>
    </li>
    <li>
      <a
        href="https://wa.me/9622727372"
        target='blank'
        className="block py-2 pl-3 pr-4 text-gray-600 tracking-[.1rem] rounded font-md text-lg animate transition-all duration-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E75F14] md:p-0 dark:md:hover:text-[#E75F14] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Contact
      </a>
    </li>

    <li className='mt-1 ml-3'>
      <DarkModeSwitcher />
    </li>
  </ul></div>
  )
}

export default NavLinks