import { useState } from "react";
import { NavLink } from "react-router-dom";
import SignInModal from "./SignInModal";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [userToggle, setUserToggle] = useState(false);
  const [signInToggle, setSignInToggle] = useState(false);

  const navLinkStyle =
    "block py-2 pl-3 pr-4 uppercase text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const navLinkPc =
    "md:flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700";

  const navLinkMobile =
    "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:px-0 md:pb-0";

  const hamburgerBtnStyle =
    "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600";

  return (
    <>
      <nav className="flex items-center justify-between h-[60px] bg-white border-b-[1px] border-gray-200 px-4 sm:px-6 dark:bg-gray-900 fixed top-0 left-0 w-full z-20">
        <div>
          <NavLink to="/">
            <img src="/images/hotel-svg-white.svg" className="h-12" />
          </NavLink>
        </div>

        <div
          className={
            navToggle
              ? "items-center justify-between w-full md:flex md:w-auto z-10 absolute top-[60px] left-0 bg-white dark:bg-gray-900 px-5 pb-4 md:static"
              : "items-center justify-between hidden w-full md:flex md:w-auto"
          }
        >
          <ul className={navToggle ? navLinkMobile : navLinkPc}>
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/hotels" className={navLinkStyle}>
                Hotels
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div onClick={() => setSignInToggle(true) & setNavToggle(false)}>
            <button className="text-white uppercase bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:ring-gray-400 focus:outline-none font-medium rounded-[5px] text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-gray-600">
              Sign In
              <svg
                aria-hidden="true"
                class="w-4 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div class="flex items-center">
            <div
              onClick={() =>
                !userToggle
                  ? setUserToggle(true) & setNavToggle(false)
                  : setUserToggle(false)
              }
            >
              <button className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <img
                  class="w-8 h-8 rounded-full"
                  src="images/DP.jpg"
                  alt="user photo"
                />
              </button>
            </div>

            <div
              class={
                userToggle
                  ? "z-50  my-4 text-base absolute top-[45px] right-4 list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  : "hidden"
              }
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">
                  Bobby Sadhwani
                </span>
                <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  bobbysadhwani612@gmail.com
                </span>
              </div>
              <ul class="py-1">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:hidden">
            <div
              onClick={() =>
                !navToggle
                  ? setNavToggle(true) & setUserToggle(false)
                  : setNavToggle(false)
              }
            >
              <button className={hamburgerBtnStyle}>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <SignInModal
        signInToggle={signInToggle}
        setSignInToggle={setSignInToggle}
      />
    </>
  );
};

export default Header;
