import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
      .then((result) => {
        
          
          const createdAt = result?.user?.metadata?.creationTime
          const user = {email, createdAt}
        fetch("https://coffee-server-qtja0mdj9-jubair-ahmeds-projects.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.insertedId){
              Swal.fire(
                'Great!',
                'User created successfully!',
                'success'
              )
            }
            form.reset()
          });
        
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div className="text-center my-4">
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="px-4 mb-4">
              Already have an account?{" "}
              <Link to="/login" className="btn btn-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
