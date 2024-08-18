import React, { useEffect, useState } from "react";
import { images, data } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [toggleMenuprofile, setToggleMenuprofile] = useState(false);
  const [toggleMenudropdown, setToggleMenudropdown] = useState(false);
  const [Image, setImage] = useState(null);

  let auth = localStorage.getItem("user");
  const authe = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logout = function () {
    console.log("logout called");
    localStorage.clear();
    navigate("/login");
  };


  return (
    <>
      {auth ? (
        <nav className="bg-green-100 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <img
                src={images.farmer_image}
                className="h-10"
                alt="Farmer Logo"
              />
            </a>
            <div className="flex items-center md:order-2 ">
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                onClick={() => {
                  setToggleMenuprofile((prev) => !prev);
                  setToggleMenudropdown(false);
                }}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={images.profile}
                  alt="user photo"
                />
              </button>
              <div
                className={`${
                  toggleMenuprofile ? "mx-4 my-6" : "hidden mx-4 my-4"
                } z-50    rounded-xl sidebar my-4 absolute top-10 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 `}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {authe.name}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {authe.email}
                  </span>
                </div>

                <div className="px-4 ">
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    {data.profilelinks.map((navname, index) => (
                      <li key={index}>
                        <Link
                          className="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          to={`${navname.id}`}
                        >
                          {navname.title}
                        </Link>
                        

                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
                onClick={() => {
                  setToggleMenudropdown((previ) => !previ);
                  setToggleMenuprofile(false);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                toggleMenudropdown ? "" : "hidden"
              } items-center justify-end w-full md:flex md:w-auto md:order-1  ml-auto pr-8`}
              id="navbar-user"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 bg-green-100 md:border-0 md:bg-green-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {data.navlinks.map((navname, index) => (
                  <li key={index}>
                    <Link
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      to={`${navname.id}`}
                    >
                      {navname.title}
                    </Link>
                  </li>
                ))}
                <li>
                  {console.log("Authentication" + auth)}
                  {auth ? (
                    <Link
                      onClick={logout}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      to="/home"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      to="/login"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="bg-green-100 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <img
                src={images.farmer_image}
                className="h-10"
                alt="Farmer Logo"
              />
            </a>
            <div className="flex items-center md:order-2 ">
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                onClick={() => {
                  setToggleMenuprofile((prev) => !prev);
                  setToggleMenudropdown(false);
                }}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={images.profile}
                  alt="user photo"
                />
              </button>
              <div
                className={`${
                  toggleMenuprofile ? "mx-4 my-6" : "hidden mx-4 my-4"
                } z-50    rounded-xl sidebar my-4 absolute top-10 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 `}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white"></span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    Login Please
                  </span>
                </div>

                <div className="px-4 ">
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    {data.profilelinks.map((navname, index) => (
                      <li key={index}>
                        <Link
                          className="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          to={`${navname.id}`}
                        >
                          {navname.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
                onClick={() => {
                  setToggleMenudropdown((previ) => !previ);
                  setToggleMenuprofile(false);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                toggleMenudropdown ? "" : "hidden"
              } items-center justify-end w-full md:flex md:w-auto md:order-1  ml-auto pr-8`}
              id="navbar-user"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 bg-green-100 md:border-0 md:bg-green-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {data.navlinks.map((navname, index) => (
                  <li key={index}>
                    <Link
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      to={`${navname.id}`}
                    >
                      {navname.title}
                    </Link>
                  </li>
                ))}
                <li>
                  {console.log("Authentication" + auth)}
                  {auth ? (
                    <Link
                      onClick={logout}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      to="/home"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      to="/login"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
