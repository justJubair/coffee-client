import { Link, useLoaderData, } from "react-router-dom"
import Swal from "sweetalert2";


const UpdateCoffee = () => {
 const coffee = useLoaderData();
 const {_id, name, chef, supplier, category, taste, details, photo} = coffee
 
 
  const handleUpdateCoffee = e=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const chef = form.chef.value
    const supplier = form.supplier.value
    const category = form.category.value
    const taste = form.taste.value
    const details = form.details.value
    const photo = form.photo.value
    const updatedCoffee = {
      name, chef, supplier, category, taste, details, photo
    }    
    fetch(`https://coffee-server-qtja0mdj9-jubair-ahmeds-projects.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedCoffee) 
    })
    .then(res=> res.json())
    .then(data =>{
      if(data.modifiedCount > 0)
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Coffee updated successfully',
        })
     
    })
    
   
  }
  return (
    <div>
    <div className="max-w-5xl mx-auto bg-[#F4F3F0]">
    <div className="text-center my-6">
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <h1 className="text-4xl font-bold my-4">Update coffee</h1>
      </div>
      <div className="px-20">
        <form onSubmit={handleUpdateCoffee}>
          {/* form row, name and chef */}
         <div className="flex gap-6 justify-between">
         <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                placeholder="name"
                name="name"
                defaultValue={name}              
                className="input input-bordered w-full"
              />
            </label>
          </div>
         <div className="form-control w-1/2">
            <label className="label">
            
            </label>
            <label className="input-group">
              <span>Chef</span>
              <input
                type="text"
                name="chef"
                placeholder="chef"
                defaultValue={chef}
                className="input input-bordered w-full"
              />
            </label>
          </div>
         </div>
          {/* form row, supplier and taste */}
         <div className="flex gap-6 justify-between">
         <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                placeholder="supplier"
                name="supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </label>
          </div>
         <div className="form-control w-1/2">
            <label className="label">
            
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="taste"
                defaultValue={taste}
                className="input input-bordered w-full"
              />
            </label>
          </div>
         </div>
          {/* form row, category and details */}
         <div className="flex gap-6 justify-between">
         <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                placeholder="category"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
         <div className="form-control w-1/2">
            <label className="label">
            
            </label>
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* photo */}
       
         </div>
         <div className="form-control w-full">
            <label className="label">
            
            </label>
            <label className="input-group">
              <span>Photo</span>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button className="btn btn-block my-6 bg-[#D2B48C]">Update coffee</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default UpdateCoffee

