import React from 'react'


const Nav = () => {
  return (
    <div className="navbar flex justify-between bg-base-100 top-0 pt-6 pb-2 z-50 px-parent">
        <div className="navbar-start w-fit p-0 ">
          <div className="dropdown">
            <div tabIndex={0} role="button"  className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <div className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-lable bg-base-100 rounded-box w-52">
              <li><a>ABOUT</a></li>
              {/* <li><a>PROJECTS</a></li> */}
              <li><a>EXPERIENCES</a></li>
              <li><a>SKILLS</a></li>
              <li><a>CONTACT</a></li>
            </div>
          </div>
          <a className="text-lg font-lable p-0 m-0 w-fit ">LIN HONG</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 font-lable [&>*]:px-4 ">
            <li><a>ABOUT</a></li>
            {/* <li><a>PROJECTS</a></li> */}
            <li><a>EXPERIENCES</a></li>
            <li><a>SKILLS</a></li>
            <li><a>CONTACT</a></li>
          </div>
        </div>
        <div className='flex gap-8'>
          {/* <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <input type="checkbox" value="light" className="toggle theme-controller"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label> */}
          <div className="navbar-end">
            <a className="btn bg-pink text-black font-lable cursor-pointer">RESUME</a>
          </div>
        </div>
      </div>
  )
}

export default Nav