import React from "react";

const Projects = (props) => {
  return (
    <section className="px-5 flex flex-col items-center justify-center text-center py-32 gap-5">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-5 items-center justify-center">
        <h1 className="relative text-4xl font-semibold">
          Projects
          <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
        </h1>
        <p>Coming Soon</p>
        <a
          href="/"
          className="text-xl py-2 px-10 rounded-full bg-black hover:bg-black/10 hover:text-black text-white transition-colors w-fit"
        >
          Back to home <span className="text-2xl">↗</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
