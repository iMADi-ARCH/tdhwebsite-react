import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = ({ blogTitle, imgSrc, date, children }) => {
  return (
    <Link
      to="#"
      className="group flex gap-5 text-left items-center justify-between"
    >
      <div className="w-[512px] rounded overflow-hidden">
        <img
          className="w-full rounded h-full object-cover group-hover:scale-105 transition-transform"
          src={imgSrc}
          alt={blogTitle}
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{blogTitle}</h1>
        <p className="opacity-50 text-sm">{date}</p>
        <p className="font-sans">{children}</p>
      </div>
    </Link>
  );
};

export default BlogListItem;
