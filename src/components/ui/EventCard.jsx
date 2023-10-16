import React from "react";

const EventCard = ({ imgPath, title, children, className }) => {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden z-0 p-8 text-white flex flex-col items-start justify-end gap-3 ${className}`}
    >
      <img
        className="absolute left-0 top-0 w-full h-full z-10 object-cover"
        src={imgPath}
        alt=""
      />
      <img
        src="/assets/arrow.jpg"
        className="-rotate-45 w-8 self-end z-20 invert"
        alt="Arrow"
      />
      <h1 className="text-4xl z-20">{title}</h1>
      <p className="z-20">{children}</p>
      <button className="px-10 py-3 z-20 bg-white text-black rounded-full">
        Register
      </button>
    </div>
  );
};

export default EventCard;
