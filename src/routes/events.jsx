import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import EventCard from "../components/ui/EventCard";
import EventGallery from "../components/EventGallery";

const images = [
  <img className="object-cover w-full h-full" src="/assets/background1.webp" />,
  <video
    className="object-cover w-full h-full"
    src="/assets/background1.mp4"
    autoPlay
    muted
    loop
  ></video>,
  <img className="object-cover w-full h-full" src="/assets/background4.jpg" />,
  <video
    className="object-cover w-full h-full"
    src="/assets/background3.mp4"
    autoPlay
    muted
    loop
  ></video>,
];

const Events = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center justify-end text-white">
        <div className="h-[80vh] w-full">
          {images.map((image, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              {image}
            </div>
          ))}
        </div>
        <div className="absolute bottom-16 flex flex-col items-center gap-10">
          <button className="px-10 py-2 text-lg bg-white text-black rounded-full">
            Register
          </button>
          <div className="flex gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`cursor-pointer hover:scale-105 active:scale-95 w-4 h-4 bg-white rounded-full aspect-square transition-transform shadow-lg shadow-black/50 ${
                  i === current ? "bg-[#D7FF65]" : ""
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-5 flex flex-col items-center justify-center text-left py-32 gap-5">
        <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
          <h1 className="relative text-4xl font-semibold">
            Upcoming Events
            <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 w-full">
            <EventCard
              className={"lg:col-span-2 lg:row-span-2"}
              title="Freshers Party"
              imgPath={"/assets/card.jpg"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </EventCard>
            <EventCard
              className="lg:col-span-2"
              title="Freshers Party"
              imgPath={"/assets/Picture3.png"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </EventCard>
            <EventCard
              className=""
              title="Freshers Party"
              imgPath={"/assets/card1.png"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </EventCard>
            <EventCard
              className=""
              title="Freshers Party"
              imgPath={"/assets/card2.png"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis. Lorem ipsum dolor sit.
            </EventCard>
          </div>
        </div>
      </section>

      <EventGallery />

      <section className="bg-black text-white px-5 flex flex-col items-center justify-center text-left py-32 gap-5">
        <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
          <h1 className="relative text-4xl font-semibold">
            Upcoming Events
            <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
          </h1>
          <div className="flex flex-col gap-5 w-full max-w-5xl">
            <div className="flex w-full justify-between text-lg border-b border-b-white/25 py-3 px-10">
              <p>Event 1</p>
              <a className="learn-more" href="#">
                Learn more ↗
              </a>
            </div>
            <div className="flex w-full justify-between text-lg border-b border-b-white/25 py-3 px-10">
              <p>Event 1</p>
              <a className="learn-more" href="#">
                Learn more ↗
              </a>
            </div>
            <div className="flex w-full justify-between text-lg border-b border-b-white/25 py-3 px-10">
              <p>Event 1</p>
              <a className="learn-more" href="#">
                Learn more ↗
              </a>
            </div>
            <div className="flex w-full justify-between text-lg border-b border-b-white/25 py-3 px-10">
              <p>Event 1</p>
              <a className="learn-more" href="#">
                Learn more ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-5 flex flex-col items-center justify-center text-left py-32 gap-5">
        <div className="max-w-screen-xl w-full mx-auto flex gap-10 items-start justify-center">
          <div className="flex-1 aspect-square rounded-3xl overflow-hidden flex items-center justify-center relative">
            <img
              src="/assets/card.jpg"
              className="w-full h-full absolute left-0 top-0 object-cover z-0"
              alt=""
            />
            <div className="z-10 text-5xl text-white flex gap-4 items-center justify-center">
              <a href="#">Seminars</a>{" "}
              <img
                src="/assets/arrow.jpg"
                className="w-8 object-contain -rotate-45 invert"
              />
            </div>
          </div>
          <div className="flex-1 aspect-square rounded-3xl overflow-hidden flex items-center justify-center relative">
            <img
              src="/assets/card.jpg"
              className="w-full h-full absolute left-0 top-0 object-cover z-0"
              alt=""
            />
            <div className="z-10 text-5xl text-white flex gap-4 items-center justify-center">
              <a href="#">Workshops</a>{" "}
              <img
                src="/assets/arrow.jpg"
                className="w-8 object-contain -rotate-45 invert"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-5 flex flex-col items-center justify-center text-left py-32 gap-5">
        <div className="max-w-screen-xl w-full mx-auto flex flex-col items-start justify-center">
          <h2 className="text-3xl font-bold mb-10">Any Queries? Contact us</h2>
          <p>Contact number:-</p>
          <p>Gmail:-</p>
        </div>
      </section>
    </>
  );
};

export default Events;
