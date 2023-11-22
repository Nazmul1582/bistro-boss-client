import { AiFillHome } from "react-icons/ai";
import {
  FaCalendar,
  FaCalendarCheck,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import Head from "../pages/Shared/Head/Head";

const Dashboard = () => {
  return (
    <section>
      <Head pageTitle="Dashboard" />

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-warning drawer-button lg:hidden"
          >
            Open Sidebar
          </label>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="p-4 mb-10">
              <Link to="/">
                <h2 className="font-bold text-3xl">Bistro Boss</h2>
                <h4 className="font-semibold text-xl">Restaurent</h4>
              </Link>
            </div>
            <li>
              <NavLink to="/dashboard/user-home">
                <AiFillHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendar /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment-history">
                <FaWallet /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-cart">
                <FaShoppingCart /> My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-review">
                <MdReviews /> Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-bookings">
                <FaCalendarCheck /> My Bookings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
