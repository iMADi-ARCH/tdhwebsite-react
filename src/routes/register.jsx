import React from "react";
import { useState } from "react";
import InputField from "../components/ui/InputField";

const Register = () => {
  const initialDetails = {
    name: "",
    course: "B-tech",
    univRoll: "",
    gender: "",
    email: "",
    password: "",
  };
  const [userDetails, setuserDetails] = useState(initialDetails);
  const onDetailsChange = (event) => {
    setuserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/studentSignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
        univRoll: userDetails.univRoll,
        gender: userDetails.gender,
        course: userDetails.course,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) alert("Enter Valid Credentials");
  };
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5 min-h-screen">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
        <div className="flex flex-col gap-3 items-center max-w-md mx-auto w-full p-10 bg-white text-black rounded-3xl">
          <h1 className="text-4xl mb-3">Register</h1>
          <p className="text-lg">Fill in your details to create an account.</p>
          <input
            className="w-full rounded-3xl px-5 py-3 bg-white border-2 border-[#D7FF65]"
            placeholder={"Name"}
            name="name"
            value={userDetails.name}
            onChange={onDetailsChange}
          />
          <select
            className="w-full rounded-3xl px-5 py-3 bg-white border-2 border-[#D7FF65]"
            name="course"
            id="course"
            value={userDetails.course}
            onChange={onDetailsChange}
          >
            <option value="B-tech">B-Tech</option>
            <option value="BBA">BBA</option>
            <option value="BSc">BSc</option>
          </select>
          <input
            className="w-full rounded-3xl px-5 py-3 bg-white border-2 border-[#D7FF65]"
            type="number"
            placeholder={"University Roll Number"}
            name="univRoll"
            value={userDetails.univRoll}
            onChange={onDetailsChange}
          />
          <div className="flex justify-between w-full">
            <fieldset>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onChange={onDetailsChange}
              />
              <label htmlFor="male">Male</label>
            </fieldset>
            <fieldset>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onChange={onDetailsChange}
              />
              <label htmlFor="female">Female</label>
            </fieldset>
            <fieldset>
              <input
                type="radio"
                name="gender"
                value="Prefer not to say"
                id="others"
                onChange={onDetailsChange}
              />
              <label htmlFor="others">Prefer not to say</label>
            </fieldset>
          </div>
          <input
            className="w-full rounded-3xl px-5 py-3 bg-white border-2 border-[#D7FF65]"
            placeholder={"Email"}
            value={userDetails.email}
            name="email"
            type="email"
            onChange={onDetailsChange}
          />
          <input
            className="w-full rounded-3xl px-5 py-3 bg-white border-2 border-[#D7FF65]"
            placeholder={"Password"}
            type="password"
            value={userDetails.password}
            name="password"
            onChange={onDetailsChange}
          />
          <button
            className="px-10 py-3 rounded-full bg-[#D7FF65]"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
