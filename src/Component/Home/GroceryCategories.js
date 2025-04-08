import React from "react";
import { Link } from "react-router-dom";

const GroceryApp = () => {
  const categories = [
    {
      section: "Grocery & Kitchen",
      items: [
        {
          name: "Fruits & Vegetables",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
        },
        {
          name: "Dairy, Bread & Eggs",
          selected: true,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
        },
        {
          name: "Atta, Rice, Oil & Dals",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
        },
        {
          name: "Masala & Dry Fruits",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
        },
        {
          name: "Breakfast & Sauces",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
        },
        {
          name: "Packaged Food",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
        },
      ],
    },
    {
      section: "Snacks & Drinks",
      items: [
        {
          name: "Tea, Coffee & More",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
        },
        {
          name: "Ice Cream & More",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
        },
        {
          name: "Frozen Food",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
        },
        {
          name: "Cool Drinks & Juices",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
        },
        {
          name: "Chocolates & Biscuits",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
        },
        {
          name: "Munchies",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
        },
      ],
    },
    {
      section: "Daily Essentials",
      items: [
        {
          name: "Diapers",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Baby Care",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Bath & Body",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Skin Care",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Makeup",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Others",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
      ],
    },
    {
      section: "Household & Cleaning",
      items: [
        {
          name: "Cleaners",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Washing Powder",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Fresheners",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Liquid Detergent",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Dishwasher",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
        {
          name: "Floor Cleaners",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        },
      ],
    },
    {
      section: "Special Categories",
      items: [
        {
          name: "Appliances",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/products/sliding_image/511859a.jpg?ts=1742805449",
        },
        {
          name: "Phones",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/products/sliding_image/511859a.jpg?ts=1742805449",
        },
        {
          name: "Clothes",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/products/sliding_image/511859a.jpg?ts=1742805449",
        },
        {
          name: "Home Decor",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/products/sliding_image/511859a.jpg?ts=1742805449",
        },
        {
          name: "Fitness",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/products/sliding_image/511859a.jpg?ts=1742805449",
        },
        {
          name: "TV & Electronics",
          selected: false,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/products/sliding_image/511859a.jpg?ts=1742805449",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto py-6 px-4 md:px-6 lg:px-20 mt-16 md:mt-24 lg:mt-36">
      {/* Special Offer Banner */}
      <div className="mb-4 relative">
        <div className="bg-red-400 text-white rounded-lg flex items-center justify-between p-3 md:p-4">
          <button className="bg-white text-red-400 text-xs py-1 px-2 md:px-3 rounded-md border border-white">
            ORDER NOW
          </button>
          <div className="text-lg md:text-xl font-bold">Banner Adds</div>
          <div className="w-8 md:w-16">
            <img
              src="https://cdn.zeptonow.com/production/tr:w-1280,ar-3840-705,pr-true,f-auto,q-80/inventory/banner/4ea3de05-f469-4df2-9548-db9c9863dfdf.png"
              alt="Banner icon"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      {categories.slice(0, 2).map((category, index) => (
        <div key={index} className="mb-6 relative px-2 md:px-4">
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h2 className="text-red-500 font-medium text-sm">
              {category.section}
            </h2>
            <a href="#" className="text-blue-500 text-xs">
              See All
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
            {category.items.map((item, idx) => (
              <Link
                to="/categories"
                key={idx}
                className="flex flex-col items-center"
              >
                <div className="w-full aspect-square rounded-lg mb-1 md:mb-2 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-center font-medium px-1 leading-tight">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Special Offer with Price */}
      <div className="mb-4 relative">
        <div className="bg-red-400 text-white rounded-lg flex items-center justify-between p-3 md:p-4">
          <button className="bg-white text-red-400 text-xs py-1 px-2 md:px-3 rounded-md border border-white">
            ORDER NOW
          </button>
          <div className="text-lg md:text-xl font-bold">Banner Adds</div>
          <div className="w-8 md:w-16">
            <img
              src="https://cdn.zeptonow.com/production/tr:w-1280,ar-3840-705,pr-true,f-auto,q-80/inventory/banner/4ea3de05-f469-4df2-9548-db9c9863dfdf.png"
              alt="Banner icon"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Third category (Daily Essentials) */}
      <div className="mb-6 px-2 md:px-4">
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h2 className="text-red-500 font-medium text-sm">
            {categories[2].section}
          </h2>
          <a href="#" className="text-blue-500 text-xs">
            See All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {categories[2].items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-lg mb-1 md:mb-2 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium px-1 leading-tight">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Banner 3 */}
      <div className="mb-4">
        <div className="bg-red-400 text-white rounded-lg flex items-center justify-between p-3 md:p-4">
          <button className="bg-white text-red-400 text-xs py-1 px-2 md:px-3 rounded-md border border-white">
            ORDER NOW
          </button>
          <div className="text-lg md:text-xl font-bold">Banner Adds</div>
          <div className="flex items-center">
            <span className="text-xs text-white mr-2">See All</span>
            <img
              src="https://cdn.zeptonow.com/production/tr:w-1280,ar-3840-705,pr-true,f-auto,q-80/inventory/banner/4ea3de05-f469-4df2-9548-db9c9863dfdf.png"
              alt="Banner icon"
              className="w-8 md:w-12"
            />
          </div>
        </div>
      </div>

      {/* Fourth category (Household & Cleaning) */}
      <div className="mb-6 px-2 md:px-4">
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h2 className="text-red-500 font-medium text-sm">
            {categories[3].section}
          </h2>
          <a href="#" className="text-blue-500 text-xs">
            See All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {categories[3].items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-lg mb-1 md:mb-2 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium px-1 leading-tight">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Banner 4 */}
      <div className="mb-4">
        <div className="bg-red-400 text-white rounded-lg flex items-center justify-between p-3 md:p-4">
          <button className="bg-white text-red-400 text-xs py-1 px-2 md:px-3 rounded-md border border-white">
            ORDER NOW
          </button>
          <div className="text-lg md:text-xl font-bold">Banner Adds</div>
          <div className="flex items-center">
            <span className="text-xs text-white mr-2">See All</span>
            <img
              src="https://cdn.zeptonow.com/production/tr:w-1280,ar-3840-705,pr-true,f-auto,q-80/inventory/banner/4ea3de05-f469-4df2-9548-db9c9863dfdf.png"
              alt="Banner icon"
              className="w-8 md:w-12"
            />
          </div>
        </div>
      </div>

      {/* Fifth category (Special Categories) */}
      <div className="px-2 md:px-4">
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h2 className="text-red-500 font-medium text-sm">
            {categories[4].section}
          </h2>
          <a href="#" className="text-blue-500 text-xs">
            See All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {categories[4].items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-lg mb-1 md:mb-2 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium px-1 leading-tight">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceryApp;
