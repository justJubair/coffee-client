import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard"


const Home = () => {
  const loadedCoffee = useLoaderData()
  // eslint-disable-next-line no-unused-vars
  const [coffees, setCoffees] = useState(loadedCoffee)
  return (
    <div>
       <h1 className="text-center text-5xl font-extrabold my-6">
        Coffee Espresso
      </h1>
      <div className="text-center space-x-4">
        <Link to="/"><button className="btn">Home</button></Link>
        <Link to="/addCoffee">
          <button className="btn">Add a Coffee</button>
        </Link>
        <Link to="/users">
          <button className="btn">Users</button>
        </Link>
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
        
      </div>{" "}
      <div>
        <h2 className="text-center my-5 font-bold">Total Coffee: {coffees.length}</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {
              coffees?.map(coffee=> <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}/>)
            }         
        </div>
      </div>
    </div>
  )
}

export default Home
