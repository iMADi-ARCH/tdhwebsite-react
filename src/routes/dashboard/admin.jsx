import React from "react";
import EventListItem from "../../components/EventListItem";

const Admin = () => {
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-center py-32 gap-5">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-5">
        <div className="flex w-full gap-10 mb-10">
          <button className="text-lg flex-1 bg-white text-black p-10 rounded">
            Create Event
          </button>
          <button className="text-lg flex-1 bg-white text-black p-10 rounded">
            Upload Photos
          </button>
          <button className="text-lg flex-1 bg-white text-black p-10 rounded">
            Write Blog
          </button>
        </div>
        <EventListItem eventName={"Event 1"} />
        <EventListItem eventName={"Event 2"} />
        <EventListItem eventName={"Event 3"} />
        <EventListItem eventName={"Event 4"} />
        <EventListItem eventName={"Event 5"} />
        <EventListItem eventName={"Event 6"} />
      </div>
    </section>
  );
};

export default Admin;
