import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContexr } from "../../firebase/AuthProvider";

function SingUp() {
  const { creatUser } = useContext(AuthContexr);
  const handleSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;
    // console.log(name, email, pass);
    creatUser(email, pass)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row">
        <div className="w-1/2 lg:mr-12">
          <img src={loginImg} alt="" />
        </div>
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100 ">
          <h1 className="text-3xl font-bold text-center">Sing UP</h1>

          <form onSubmit={handleSingUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
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
            <div className="mt-6 form-control">
              <input
                type="submit"
                value="Sing UP"
                className="btn btn-primary"
              />
            </div>
          </form>
          <p className="mb-4 text-center">
            Already Have and account?{" "}
            <Link className="font-bold text-orange-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
