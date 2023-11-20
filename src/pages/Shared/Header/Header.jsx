import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  const navOptions = (
    <>
      <li>
        <Link className="hover:text-white uppercase" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-white uppercase" to="/contact">
          Contact Us
        </Link>
      </li>
      <li>
        <Link className="hover:text-white uppercase" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="hover:text-white uppercase" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="hover:text-white uppercase" to="/order-food/salad">
          Order Food
        </Link>
      </li>
    </>
  );
  return (
    <header className="bg-neutral/50 text-neutral-content fixed top-0 z-10 max-w-[1920px] w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
              <>
            <h4 className="text-white font-bold text-lg">{user.displayName}</h4>
            <Link onClick={logout} to="/login" className="btn">
              Logout
            </Link>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
