import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const [radioValue, setRadioValue] = useState(null)
  const handleUpdate = e=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const updatedUser = {name, email, password, gender:radioValue}
    
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers : {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res=> res.json())
    .then(data =>{
      if(data.modifiedCount > 0){
        Swal.fire(
          'Good job!',
          'User updated',
          'success'
        )
      }
      
    })
  }
  const handleChange = e=>{
    setRadioValue(e.target.value)
  }
  return (
   <>
   <div className="text-center my-4">
    <Link to="/" className="btn">Home</Link>
   </div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update User now!</h1>
        </div>*
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                defaultValue={user?.name}                
              />
            </div>

            <div className="flex items-center  gap-4 my-2">
              <div className="flex items-center gap-2">
                <label htmlFor="male" className="text-gray-500">Male</label>
                <input type="radio" name="radio" className="radio" value={"male"} onChange={handleChange}/>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="female" className="text-gray-500">Female</label>
                <input type="radio" name="radio" className="radio" value={"female"} onChange={handleChange}/>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                defaultValue={user.email}
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                defaultValue={user.password}
                
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   </>
  );
};

export default UpdateUser;
