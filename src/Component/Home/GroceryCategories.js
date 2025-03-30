import React from 'react';

const GroceryApp = () => {
  const categories = [
    {
      section: "Grocery & Kitchen",
      items: [
        { name: "Fruits & Vegetables", selected: false },
        { name: "Dairy, Bread & Eggs", selected: true },
        { name: "Atta, Rice, Oil & Dals", selected: false },
        { name: "Masala & Dry Fruits", selected: false },
        { name: "Breakfast & Sauces", selected: false },
        { name: "Packaged Food", selected: false }
      ]
    },
    {
      section: "Snacks & Drinks",
      items: [
        { name: "Tea, Coffee & More", selected: false },
        { name: "Ice Cream & More", selected: false },
        { name: "Frozen Food", selected: false },
        { name: "Cool Drinks & Juices", selected: false },
        { name: "Chocolates & Biscuits", selected: false },
        { name: "Munchies", selected: false }
      ]
    },
    {
      section: "Daily Essentials",
      items: [
        { name: "Diapers", selected: false },
        { name: "Baby Care", selected: false },
        { name: "Bath & Body", selected: false },
        { name: "Skin Care", selected: false },
        { name: "Makeup", selected: false },
        { name: "Others", selected: false }
      ]
    },
    {
      section: "Household & Cleaning",
      items: [
        { name: "Cleaners", selected: false },
        { name: "Washing Powder", selected: false },
        { name: "Fresheners", selected: false },
        { name: "Liquid Detergent", selected: false },
        { name: "Dishwasher", selected: false },
        { name: "Floor Cleaners", selected: false }
      ]
    },
    {
      section: "Special Categories",
      items: [
        { name: "Appliances", selected: false },
        { name: "Phones", selected: false },
        { name: "Clothes", selected: false },
        { name: "Home Decor", selected: false },
        { name: "Fitness", selected: false },
        { name: "TV & Electronics", selected: false }
      ]
    }
  ];
  
  return (
    <div className="mx-auto py-6 px-4 md:px-6 lg:px-20 mt-16 md:mt-24 lg:mt-36">
      {/* Special Offer Banner */}
      <div className="mb-4 relative">
        <div className="bg-red-400 text-white rounded-lg flex items-center justify-between p-3 md:p-4">
          <button className="bg-white text-red-400 text-xs py-1 px-2 md:px-3 rounded-md border border-white">ORDER NOW</button>
          <div className="text-lg md:text-xl font-bold">Banner Adds</div>
          <div className="w-8 md:w-16"></div> {/* Placeholder for balance */}
        </div>
      </div>
      
      {/* Categories */}
      {categories.slice(0, 2).map((category, index) => (
        <div key={index} className="mb-6 relative px-2 md:px-4">
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h2 className="text-red-500 font-medium text-sm">{category.section}</h2>
            <a href="#" className="text-blue-500 text-xs">See All</a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
            {category.items.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center"
              >
                <div className="bg-gray-200 w-full aspect-square rounded-lg mb-1 md:mb-2"></div>
                <p className="text-xs text-center font-medium px-1 leading-tight">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Special Offer with Price */}
      <div className="mb-4 relative">
        <div className="bg-red-400 text-white rounded-lg flex items-center justify-between p-3 md:p-4">
          <button className="bg-white text-red-400 text-xs py-1 px-2 md:px-3 rounded-md border border-white">ORDER NOW</button>
          <div className="text-lg md:text-xl font-bold">Banner Adds</div>
          <div className="w-8 md:w-16"></div>
        </div>
      </div>
      
      {/* Third category (Daily Essentials) */}
      <div className="mb-6 px-2 md:px-4">
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h2 className="text-red-500 font-medium text-sm">{categories[2].section}</h2>
          <a href="#" className="text-blue-500 text-xs">See All</a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {categories[2].items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-gray-200 w-full aspect-square rounded-lg mb-1 md:mb-2"></div>
              <p className="text-xs text-center font-medium px-1 leading-tight">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Banner 3 */}
      <div className="mb-4">
        <div className="bg-red-400 text-white rounded-lg flex items-center justify-between p-3 md:p-4">
          <button className="bg-white text-red-400 text-xs py-1 px-2 md:px-3 rounded-md border border-white">ORDER NOW</button>
          <div className="text-lg md:text-xl font-bold">Banner Adds</div>
          <div className="text-xs text-white">See All</div>
        </div>
      </div>
      
      {/* Fourth category (Household & Cleaning) */}
      <div className="mb-6 px-2 md:px-4">
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h2 className="text-red-500 font-medium text-sm">{categories[3].section}</h2>
          <a href="#" className="text-blue-500 text-xs">See All</a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {categories[3].items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-gray-200 w-full aspect-square rounded-lg mb-1 md:mb-2"></div>
              <p className="text-xs text-center font-medium px-1 leading-tight">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Banner 4 */}
      <div className="mb-4">
        <div className="bg-red-400 text-white rounded-lg flex items-center justify-between p-3 md:p-4">
          <button className="bg-white text-red-400 text-xs py-1 px-2 md:px-3 rounded-md border border-white">ORDER NOW</button>
          <div className="text-lg md:text-xl font-bold">Banner Adds</div>
          <div className="text-xs text-white">See All</div>
        </div>
      </div>
      
      {/* Fifth category (Special Categories) */}
      <div className="px-2 md:px-4">
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h2 className="text-red-500 font-medium text-sm">{categories[4].section}</h2>
          <a href="#" className="text-blue-500 text-xs">See All</a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {categories[4].items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-gray-200 w-full aspect-square rounded-lg mb-1 md:mb-2"></div>
              <p className="text-xs text-center font-medium px-1 leading-tight">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceryApp;