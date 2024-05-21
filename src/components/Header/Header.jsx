// import "./Header.css";
import {useState} from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Header() {

  const [hamMenu, sethamMenu] = useState(0);
  return (
    <>
    <section className="flex justify-between  p-4 items-center border-b border-neutral-600 content-center">
      <div className="hover:-rotate-6 hover:scale-90 duration-300 text-xl font-mono font-semibold tracking-wide content-center">
        <Link to="/">
          <span className="text-neutral-400">://</span>
          <span className="">AP</span>
        </Link>
      </div>
      <button className={`sm:hidden ${hamMenu ? "text-purple-500" : ""}`} onClick={() => sethamMenu(!hamMenu)}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>




      {/* BIGGER MENU */}
      <div className="hidden sm:flex px-2 gap-x-2 text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "border-purple-500 bg-purple-900" : "border-transparent"} px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500`
          }
        >
          &lt;/home&gt;
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `${isActive ? "border-purple-500 bg-purple-900" : "border-transparent"} px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500`
          }
        >
          &lt;/experience&gt;
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "border-purple-500 bg-purple-900" : "border-transparent"} px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500`
          }
        >
          &lt;/projects&gt;
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `${isActive ? "border-purple-500 bg-purple-900" : "border-transparent"} px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500`
          }
        >
          &lt;/blogs&gt;
        </NavLink>
      </div>
    </section>


      {/* SMALL MENU */}
      <div className={`${hamMenu ? "":"hidden"} sm:hidden px-2 gap-x-2 text-xl border-b border-neutral-600`}>
        <NavLink
          to="/"
          onClick={() => sethamMenu(!hamMenu)}
          className={({ isActive }) =>
            `${isActive ? "border-purple-500 bg-purple-900" : "border-transparent"} my-2 w-full block px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500`
          }
        >
          &lt;/home&gt;
        </NavLink>

        <NavLink
          to="/experience"
          onClick={() => sethamMenu(!hamMenu)}
          className={({ isActive }) =>
            `${isActive ? "border-purple-500 bg-purple-900" : "border-transparent"} my-2 w-full block px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500`
          }
        >
          &lt;/experience&gt;
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => sethamMenu(!hamMenu)}
          className={({ isActive }) =>
            `${isActive ? "border-purple-500 bg-purple-900" : "border-transparent"} my-2 w-full block px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500`
          }
        >
          &lt;/projects&gt;
        </NavLink>
        <NavLink
          to="/blogs"
          onClick={() => sethamMenu(!hamMenu)}
          className={({ isActive }) =>
            `${isActive ? "border-purple-500 bg-purple-900" : "border-transparent"} my-2 w-full block px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500`
          }
        >
          &lt;/blogs&gt;
        </NavLink>
      </div>
    </>
  );
}

export default Header;
