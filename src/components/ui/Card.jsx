import React from "react";

const Card = ({ imgPath, title, children, actionText }) => {
  return (
    <div className="flex-1 max-w-md w-full flex flex-col gap-5">
      <img src={imgPath} alt="event image" />
      <h1 className="text-3xl">{title}</h1>
      <p className="text-md">{children}</p>
      <button className="px-14 py-2 rounded-full bg-white text-black self-start">
        {actionText}
      </button>
    </div>
  );
};

export default Card;
