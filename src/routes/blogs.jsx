import React from "react";
import BlogListItem from "../components/BlogListItem";

const Blogs = () => {
  const blogs = [
    { title: "Web Design", date: "19-10-2023" },
    { title: "Graphic Design", date: "19-10-2023" },
    { title: "Software Development", date: "19-10-2023" },
    { title: "Digital Marketing", date: "19-10-2023" },
    { title: "Data Analysis", date: "19-10-2023" },
    { title: "UI/UX Design", date: "19-10-2023" },
    { title: "Mobile App Development", date: "19-10-2023" },
    { title: "Content Writing", date: "19-10-2023" },
    { title: "SEO Optimization", date: "19-10-2023" },
    { title: "E-commerce Management", date: "19-10-2023" },
  ];
  return (
    <section className="px-5 bg-black text-white flex flex-col items-center justify-center text-left py-32 gap-5">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-5 items-start w-full">
        <h1 className="relative text-4xl font-semibold">
          Blogs
          <div className="bg-[#D7FF65] h-1 absolute left-0 right-0"></div>
        </h1>
        {blogs.map((blog) => (
          <BlogListItem
            imgSrc={"/assets/party.jpeg"}
            blogTitle={blog.title}
            date={blog.date}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            fugiat consequuntur consequatur sunt atque distinctio nesciunt ex
            inventore soluta laboriosam animi eius beatae doloribus porro, vitae
            eaque enim laborum dolores...
          </BlogListItem>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
