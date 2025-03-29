import React from "react";

const portfolioItems = [
  {
    title: "Scrap Express",
    image: "scrap_express.jpg",
    link: "#"
  },
  {
    title: "Aliza Beauty Parlour",
    image: "aliza_beauty_parlour.jpg",
    link: "#"
  },
  {
    title: "Paintacle",
    image: "paintacle.jpg",
    link: "#"
  },
  {
    title: "Aarsy Productions",
    image: "aarsy_productions.jpg",
    link: "#"
  },
  {
    title: "Moments Album",
    image: "moments_album.jpg",
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-6 text-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <a
              href={item.link}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Visit Detail
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
