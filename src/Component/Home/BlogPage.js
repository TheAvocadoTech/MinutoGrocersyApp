import React from "react";

const blogPosts = [
  {
    title: "The Future of AI in Web Development",
    image: "blog1.jpg",
    description: "How artificial intelligence is shaping the future of web development and user experience.",
    author: "John Doe",
    date: "March 28, 2025"
  },
  {
    title: "Understanding Tailwind CSS: A Utility-First Approach",
    image: "blog2.jpg",
    description: "A deep dive into Tailwind CSS and how it simplifies frontend styling.",
    author: "Jane Smith",
    date: "March 20, 2025"
  },
  {
    title: "Top 10 JavaScript Frameworks to Learn in 2025",
    image: "blog3.jpg",
    description: "An overview of the most popular JavaScript frameworks and their use cases.",
    author: "Alice Johnson",
    date: "March 15, 2025"
  }
];

const BlogPage = () => {
  return (
    <div className=" mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{post.description}</p>
              <div className="text-gray-500 text-xs mb-2">By {post.author} - {post.date}</div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;