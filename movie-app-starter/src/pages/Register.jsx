import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password);
  };
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div>
            <input
              name="floating_text"
              type="text"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_text">First Name</label>
          </div>
          <div>
            <input
              name="floating_text"
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div>
            <input
              name="floating_email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div>
            <input
              name="floating_password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button className="btn-danger" type="submit">
            Register
          </button>
          <button
            className="flex justify-between text-center btn-danger"
            type="button"
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
