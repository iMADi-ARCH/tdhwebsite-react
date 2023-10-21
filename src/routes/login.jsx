import React, { useState } from "react";
import InputField from "../components/ui/InputField";

const Login = () => {
  const initialDetails = {
    email: "",
    password: "",
  };
  const [loginDetails, setloginDetails] = useState(initialDetails);
  const onDetailsChange = (event) => {
    setloginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/studentLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginDetails.email,
        password: loginDetails.password,
      }),
    });

    const json = await response.json();
    //console.log(json);

    if (!json.success) alert("Enter Valid Credentials");
    else {
      localStorage.setItem("authToken", json.authToken);
    }
  };
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5 min-h-screen">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
        <div className="flex flex-col gap-3 items-center max-w-md mx-auto w-full p-10 bg-white text-black rounded-3xl">
          <h1 className="text-4xl mb-3">Login</h1>
          <p className="text-lg">Welcome to TDH</p>
          <span className="text-base mb-5">your account</span>
          <input
            className="w-full rounded-3xl px-5 py-3 bg-white border-2 border-[#D7FF65]"
            placeholder={"Email"}
            name="email"
            value={loginDetails.email}
            onChange={onDetailsChange}
          />
          <input
            className="w-full rounded-3xl px-5 py-3 bg-white border-2 border-[#D7FF65]"
            placeholder={"Password"}
            type="password"
            name="password"
            value={loginDetails.password}
            onChange={onDetailsChange}
          />
          <button
            className="px-10 py-3 rounded-full bg-[#D7FF65]"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <div className="flex gap-5">
            <a href="#">fb</a>
            <a href="#">tw</a>
            <a href="#">go</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
