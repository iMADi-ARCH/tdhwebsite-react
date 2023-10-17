import React from "react";
import Card from "../components/ui/Card";

const Home = () => {
  return (
    <>
      <section className="px-5 flex flex-col items-center justify-center text-center py-32 gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold max-w-2xl">
          &ldquo;Technology is Best when it brings people together&rdquo;
        </h1>
        <p className="max-w-screen-md text-base sm:text-xl">
          The Designnovation Hub has the vision to create impactful technologies
          innovations and inspire students to innovate and bring fresh
          perspectives to real-world problems. The club aims to promote design
          thinking and creativity.
        </p>
        <div className="flex gap-5">
          <a href="/login">
            <button className="rounded-full bg-[#D7FF65] px-16 py-3">
              Login
            </button>
          </a>
          <a href="/register">
            <button className="rounded-full bg-[#DADADA] px-16 py-3">
              Register
            </button>
          </a>
        </div>
      </section>

      <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-center py-32 gap-5">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-5 items-center justify-center">
          <h1 className="relative text-4xl font-semibold">
            About Us
            <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
          </h1>
          <p>
            The Designnovation Hub has the vision to create impactful
            technological innovations and inspire students to innovate and bring
            fresh perspectives to real-world problems.The club aims to promote
            design thinking and creativity, collaborate with other clubs in
            various fields, and contribute to the growth of society. The mission
            includes providing knowledge about design thinking, conducting
            workshops and sessions, facilitating team projects.
          </p>
          <a
            href="/about"
            className="text-xl py-4 px-10 rounded-full hover:bg-white hover:text-black transition-colors w-fit"
          >
            Learn More <span className="text-2xl">↗</span>
          </a>
        </div>
      </section>

      <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5">
        <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
          <h1 className="relative text-4xl font-semibold">
            Events within the month
            <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
            <Card
              imgPath={"/assets/party.jpeg"}
              title={"Freshers Party"}
              actionText={"Register"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </Card>
            <Card
              imgPath={"/assets/party.jpeg"}
              title={"Freshers Party"}
              actionText={"Register"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </Card>
            <Card
              imgPath={"/assets/party.jpeg"}
              title={"Freshers Party"}
              actionText={"Register"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </Card>
          </div>
        </div>
      </section>

      <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-5">
          <div className="flex-1 max-h-[400px]">
            <img
              className="w-full h-full object-cover"
              src="./assets/party.jpeg"
              alt="party"
            />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h1 className="relative text-4xl font-semibold">
              Join Our Seminars
            </h1>
            <p>
              "Unlock your potential and join us on a journey of knowledge,
              growth, and inspiration. Our seminars are designed to empower you
              with the tools, strategies, and insights needed to thrive in
              today's ever-changing world. Don't miss the opportunity.
            </p>
            <a
              href="#"
              className="text-xl py-4 px-10 rounded-full hover:bg-white hover:text-black transition-colors w-fit"
            >
              Learn More <span className="text-2xl">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5">
        <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
          <h1 className="relative text-4xl font-semibold">
            Take a sneek peak into past events
            <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
            <Card
              imgPath={"/assets/party.jpeg"}
              title={"Freshers Party"}
              actionText={"Register"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </Card>
            <Card
              imgPath={"/assets/party.jpeg"}
              title={"Freshers Party"}
              actionText={"Register"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </Card>
            <Card
              imgPath={"/assets/party.jpeg"}
              title={"Freshers Party"}
              actionText={"Register"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </Card>
          </div>
        </div>
      </section>
      <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5">
        <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-center justify-center">
          <img src="/assets/eve.png" className="rounded-3xl" />
          <a href="#">Learn More ↗</a>
        </div>
      </section>
    </>
  );
};

export default Home;
