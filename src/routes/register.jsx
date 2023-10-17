import React from "react";
import InputField from "../components/ui/InputField";

const Register = () => {
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5 min-h-screen">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
        <div className="flex flex-col gap-3 items-center max-w-md mx-auto w-full p-10 bg-white text-black rounded-3xl">
          <h1 className="text-4xl mb-3">Register</h1>
          <p className="text-lg">Fill in your details to create an account.</p>
          <InputField placeholder={"Name"} />
          <InputField placeholder={"Name"} />
          <InputField placeholder={"University Roll Number"} />
          <div className="flex justify-between w-full">
            <fieldset>
              <input type="radio" name="sex" value={"male"} id="male" />
              <label htmlFor="male">Male</label>
            </fieldset>
            <fieldset>
              <input type="radio" name="sex" value={"female"} id="female" />
              <label htmlFor="female">Female</label>
            </fieldset>
            <fieldset>
              <input type="radio" name="sex" value={"others"} id="others" />
              <label htmlFor="others">Others</label>
            </fieldset>
          </div>
          <InputField placeholder={"Email"} />
          <button className="px-10 py-3 rounded-full bg-[#D7FF65]">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
