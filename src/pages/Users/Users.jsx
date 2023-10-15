import { Link } from "react-router-dom"


const Users = () => {
  return (
    <div>
        <div className="text-center my-6">
        <Link to="/"><button className="btn">Home</button></Link>
      <h1 className="text-3xl font-bold my-6">Users</h1>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
   
      <tr className="hover">
        <th></th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
    
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Users
