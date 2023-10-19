import React from "react";

const EventListItem = ({ eventName }) => {
  return (
    <div className="flex gap-5 p-5 text-left items-center justify-between">
      <h1 className="text-xl font-bold">{eventName}</h1>
      <div className="flex gap-4 text-lg text-black">
        <button className="px-10 py-3 bg-white rounded">Edit Info</button>
        <button className="px-10 py-3 bg-white rounded">
          Attendance ON/OFF
        </button>
        <button className="px-10 py-3 bg-white rounded">
          Get list of students
        </button>
        <button className="px-10 py-3 bg-white rounded">Edit Info</button>
      </div>
    </div>
  );
};

export default EventListItem;
