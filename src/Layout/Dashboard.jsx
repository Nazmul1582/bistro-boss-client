import { AiFillHome } from "react-icons/ai";
import {
  FaBars,
  FaBookReader,
  FaCalendar,
  FaCalendarCheck,
  FaEnvelope,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import Head from "../pages/Shared/Head/Head";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [ cart ] = useCart();

  /**
   * TODO: get admin from database
   */
  const isAdmin = true;

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
            {
              isAdmin ? <>
              <li>
              <NavLink to="/dashboard/admin-home">
                <AiFillHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-items">
                <FaUtensils /> Add Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-items">
                <FaList /> Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-bookings">
                <FaBookReader /> Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/all-users">
                <FaUsers /> All Users
              </NavLink>
            </li>
              </>
              : 
              <>
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
                <FaShoppingCart /> My Cart ({cart.length})
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
              </>
            }

            <div className="divider"></div>
            {/* Shared nav */}
            <li>
              <NavLink to="/">
                <AiFillHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaBars /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order-food/salad">
                <FaShoppingBag /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaEnvelope /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
