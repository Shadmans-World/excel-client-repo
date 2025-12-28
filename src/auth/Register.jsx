import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/register", data);
      
      // Save JWT to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", data.role);

      // Redirect based on role
      if (data.role === "admin") navigate("/admin-dashboard");
      else if (data.role === "delivery agent") navigate("/agent-dashboard");
      else navigate("/customer-dashboard");
      
      alert("Registration successful!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Excel Courier Ltd.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">User Name</label>
                <input
                  className="p-2 border-black border-2"
                  type="text"
                  placeholder="Enter your username"
                  {...register("username", { required: true })}
                />

                <label className="label">Email</label>
                <input
                  className="p-2 border-black border-2"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />

                <label className="label">Phone Number</label>
                <input
                  className="p-2 border-black border-2"
                  type="text"
                  placeholder="Enter your phone number"
                  {...register("number", { required: true })}
                />

                <label className="label">Role</label>
                <select
                  className="p-2 border-black border-2"
                  {...register("role")}
                >
                  <option value="customer">Customer</option>
                  <option value="delivery agent">Delivery Agent</option>
                  <option value="admin">Admin</option>
                </select>

                <label className="label">Password</label>
                <input
                  type="password"
                  className="p-2 border-black border-2"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                  })}
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
