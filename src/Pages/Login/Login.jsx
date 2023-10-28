import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContexr } from "../../firebase/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../AxiosAPI/axiosInstance";
function Login() {
  const { singIn } = useContext(AuthContexr);

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const { mutateAsync: tokenDATA } = useMutation({
    mutationFn: async (bodyData) => {
      const result = await axiosInstance.post("/jwt", bodyData, {
        withCredentials: true,
      });
      console.log(result.data);
      return result.data;
    },

    onSuccess: () => navigate(location?.state ? location?.state : "/"),
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const pass = form.password.value;
    const user = { email, pass };
    singIn(email, pass)
      .then(async (res) => {
        // get acces Token
        await tokenDATA(user);

        // console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row">
        <div className="w-1/2 lg:mr-12">
          <img src={loginImg} alt="" />
        </div>
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100 ">
          <h1 className="text-3xl font-bold text-center">Login</h1>

          <form onSubmit={handleLogin} className="card-body">
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
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
          <p className="mb-4 text-center">
            New to Car Doctors{" "}
            <Link className="font-bold text-orange-600" to="/singup">
              Sing Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
