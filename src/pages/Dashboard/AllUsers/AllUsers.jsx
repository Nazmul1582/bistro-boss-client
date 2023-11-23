import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        })
        .catch(error => {
            Swal.fire({
                title: "Oops!",
                text: error.message,
                icon: "error"
            })
        })
      }
    });
  };
  return (
    <div className="py-10 w-full">
      <SectionTitle subHeading="How many?" heading="MANAGE ALL USERS" />
      <div className="w-4/5 mx-auto bg-white rounded-lg shadow-lg px-6 py-10">
        <h3 className="text-3xl font-bold uppercase">
          total Users: {users.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label></label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ _id, name, email }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <button className="btn btn-warning btn-sm">
                      <FaUsers className="text-white text-lg" />
                    </button>
                  </td>
                  <th>
                    <button onClick={() => handleDeleteUser(_id)} className="btn btn-error btn-sm">
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

export default AllUsers;
