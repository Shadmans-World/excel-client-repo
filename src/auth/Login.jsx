import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/login", data);

      // Save JWT & role
      localStorage.setItem("token", res.data.token);
      // Get role from decoded JWT
      const payload = JSON.parse(atob(res.data.token.split('.')[1]));
      localStorage.setItem("role", payload.role);

      // Redirect based on role
      if (payload.role === "admin") navigate("/admin-dashboard");
      else if (payload.role === "delivery agent") navigate("/agent-dashboard");
      else navigate("/customer-dashboard");

      alert("Login successful!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input p-2 border-black border-2"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input p-2 border-black border-2"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
