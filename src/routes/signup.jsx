import React from "react";

const SignUp = () => {
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5 min-h-screen">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
        <div className="flex gap-3 items-stretch mx-auto overflow-hidden bg-white text-black rounded-3xl">
          <form className="flex-1 flex flex-col items-center p-20">
            <h1 className="text-4xl mb-3">Sign Up</h1>
            <div class="flex gap-5 my-10">
              <a className="" href="#">
                fb
              </a>
              <a className="" href="#">
                tw
              </a>
              <a className="" href="#">
                go
              </a>
            </div>
            <span>or use your account</span>
            <div className="flex flex-col items-center justify-center gap-3 mt-3">
              <a href="/register">
                <button className="rounded-full bg-[#D7FF65] px-8 py-3">
                  REGISTER
                </button>
              </a>
              <a href="/login">
                <button className="rounded-full bg-[#D7FF65] px-8 py-3">
                  LOGIN
                </button>
              </a>
            </div>
          </form>
          <div class="flex-1 p-20 text-center bg-gradient-to-br from-red-600 to-red-500 text-white flex flex-col items-center justify-center">
            <div class="overlay">
              <div class="overlay-panel overlay-right">
                <h1 className="text-4xl mb-5">Welcome To TDH</h1>
                <p>
                  Don't have an account? Here to login your email, it only takes
                  a minute
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
