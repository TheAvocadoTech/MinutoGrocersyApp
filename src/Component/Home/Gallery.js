import React from "react";

const galleryItems = [
  {
    title: "Corona Awareness Campaign",
    image: "image1.jpg",
    description: "A campaign to spread awareness about coronavirus and its prevention."
  },
  {
    title: "CodesGesture 2.0 Opening",
    image: "image2.jpg",
    description: "The grand opening of CodesGesture 2.0 with various dignitaries."
  },
  {
    title: "Latest Gadgets",
    image: "image3.jpg",
    description: "Explore the latest tech gadgets available in the market."
  },
  {
    title: "Branding",
    image: "image4.jpg",
    description: "Creative branding ideas and inspirations for your business."
  },
  {
    title: "5 Best Audio Players for your Android Device",
    image: "image5.jpg",
    description: "A curated list of top audio players to enhance your music experience."
  },
  {
    title: "Facebook Creatives",
    image: "image6.jpg",
    description: "Innovative and eye-catching Facebook creatives for marketing."
  },
  {
    title: "Digital Udaan",
    image: "image7.jpg",
    description: "A digital initiative for empowerment and innovation."
  },
  {
    title: "Premium Websites Collection",
    image: "image8.jpg",
    description: "A showcase of premium website designs and templates."
  },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {galleryItems.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Visit Gallery
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;