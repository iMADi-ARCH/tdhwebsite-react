import React from "react";
import InputField from "../components/ui/InputField";

const Login = () => {
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5 min-h-screen">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
        <div className="flex flex-col gap-3 items-center max-w-md mx-auto w-full p-10 bg-white text-black rounded-3xl">
          <h1 className="text-4xl mb-3">Login</h1>
          <p className="text-lg">Welcome to TDH</p>
          <span className="text-base mb-5">your account</span>
          <InputField placeholder={"Username"} />
          <InputField placeholder={"Password"} type="password" />
          <button className="px-10 py-3 rounded-full bg-[#D7FF65]">
            Log In
          </button>
          <div class="flex gap-5">
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
