import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:
          "linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)",
      }}
    >
      <div
        className="bg-white p-3 rounded w-25"
        style={{ boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 8%)" }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p
          style={{
            textAlign: "center",
            padding: "1rem 0 0",
            fontWeight: "500",
          }}
        >
          Don't have an account?
        </p>
        <Link
          to="/register"
          type="submit"
          style={{ color: "#212529" }}
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;