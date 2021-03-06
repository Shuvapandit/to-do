import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
const menuitems=
<>
<li><Link to="/todo">To-Do</Link></li>
<li><Link to="/about">CompletedTasks</Link></li>
<li><Link to="/appointment">Calendar</Link></li>


                   
</>
 return (
  <div className="navbar bg-primary text-white">
      <div className="navbar-start">
         
          <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div className="navbar-end hidden  lg:flex">
          <ul className="menu menu-horizontal p-0">
              {menuitems}
          </ul>
      </div>
      <div className="navbar-end  mr-24 lg:hidden ">

      
      <div className="dropdown ">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" className="menu  menu-compact dropdown-content mt-3 p-2 shadow rounded-box bg-primary w-36">
                  {menuitems}
              </ul>
          </div>
          </div>
  </div>
);
};

export default Navbar;