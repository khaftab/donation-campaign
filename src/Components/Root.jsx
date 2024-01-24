import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './root.css'
import { ToastContainer } from "react-toastify";

export default function Root() {
  return (
    <>
      <div className="px-3 sm:px-0 container mx-auto">
        <nav className="flex justify-between items-center my-4">
          <div>
            <NavLink to='/'>
              <img src='/assets/Logo.png' alt="Logo image" width={200} />
            </NavLink>
          </div>
          <ul className="hidden sm:flex space-x-8">
            <li >
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/donation'>Donation</NavLink>
            </li>
            <li>
              <NavLink to='/statistics'>Statistics</NavLink>
            </li>
          </ul>
          <div className="space-y-1 sm:hidden">
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

