import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="py-10 w-full">
      <SectionTitle subHeading="My Cart" heading="Wanna add more?" />
      <div className="w-4/5 mx-auto bg-white rounded-lg shadow-lg px-6 py-10">
        <div className="flex justify-between gap-3 uppercase">
          <h3 className="text-3xl font-bold">total orders: {cart.length} </h3>
          <h3 className="text-3xl font-bold">total price: ${totalPrice} </h3>
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
              {cart.map(({ _id, name, image, price }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Food image" />
                      </div>
                    </div>
                  </td>
                  <td>{name}</td>
                  <td>${price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn btn-error btn-sm"
                    >
                      <FaTrashAlt className="text-white text-lg" />
                    </button>
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
