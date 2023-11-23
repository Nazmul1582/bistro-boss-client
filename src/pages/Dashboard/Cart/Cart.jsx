import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";


const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="py-10 w-full">
      <SectionTitle subHeading="My Cart" heading="Wanna add more?" />
      <div className="w-4/5 mx-auto bg-white rounded-lg shadow-lg px-6 py-10">
        <div className="flex justify-between gap-3 uppercase">
          <h3 className="text-3xl font-bold">total orders: {cart.length} </h3>
          <h3 className="text-3xl font-bold">total price: {totalPrice} </h3>
          <button className="btn btn-warning">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label></label>
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({_id, name, image, price}, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={image}
                          alt="Food image"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{name}</td>
                  <td>${price}</td>
                  <th>
                    <button className="btn btn-error btn-sm"><FaTrashAlt className="text-white text-lg" /></button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
