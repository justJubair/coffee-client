import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData)
  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = users.filter(user => user._id !== _id)
            setUsers(remaining)
          });
      }
    });
  };
  return (
    <div>
      <div className="text-center my-6">
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <h1 className="text-3xl font-bold my-6">Users</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Account Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover space-y-4">
                <th></th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td onClick={() => handleDelete(user._id)} className="btn">
                  X
                </td>
                <td  className="btn mx-4">
                  <Link to={`/updateUser/${user._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
