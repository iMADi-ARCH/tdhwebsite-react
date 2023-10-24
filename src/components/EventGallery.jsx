import React from "react";
import Card from "./ui/Card";

const EventGallery = () => {
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-10 items-start justify-center">
        <h1 className="relative text-4xl font-semibold">
          Events
          <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
          <Card
            imgPath={"/assets/party.jpeg"}
            title={"Freshers Party"}
            actionText={"Register"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            debitis. Lorem ipsum dolor sit.
          </Card>
          <Card
            imgPath={"/assets/party.jpeg"}
            title={"Freshers Party"}
            actionText={"Register"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            debitis. Lorem ipsum dolor sit.
          </Card>
          <Card
            imgPath={"/assets/party.jpeg"}
            title={"Freshers Party"}
            actionText={"Register"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            debitis. Lorem ipsum dolor sit.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
