import React, { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import CategoryList from '../components/home/CategoryList';
import Banner from '../components/home/Banner';
import ProductCarousel from '../components/home/ProductCarousel';
import Promotions from '../components/home/Promotions';
import AboutUs from '../components/home/AboutUs';

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for initial development
  useEffect(() => {
    // This would be replaced with actual API calls
    const mockCategories = [
      { 
        id: 1, 
        name: 'Fresh Fruits & Vegetables', 
        icon: '🥦',
        products: [
          { 
            id: 1, 
            name: 'Banana', 
            price: 12.99, 
            image: 'https://imgs.search.brave.com/MIJQuWYBouDOHautrOPDHXpr-YK_WeRey8Z7iAx8kwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/MS8yNy8xOC8zMi9i/YW5hbmFzLTYxNDA5/MF82NDAuanBn',
            discountedPrice: 9.99,
            discountPercentage: 23,
            unit: 'dozen'
          },
          { 
            id: 2, 
            name: 'Apple', 
            price: 8.99, 
            image: 'https://imgs.search.brave.com/SOuDD8tBCCD3uypPovFHx0DsnAil9SeY3OlLQaWDyW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1mcnVpdC1hcHBs/ZXMtZnJ1aXRzLXJl/ZC1ncmVlbi1zbGlj/ZS1oYWxmLWlzb2xh/dGVkLXdoaXRlLWJh/Y2tncm91bmQtNzEz/MjExMzIuanBn',
            discountedPrice: 6.99,
            discountPercentage: 22,
            unit: 'kg'
          },
          { 
            id: 3, 
            name: 'Tomato', 
            price: 5.99, 
            image: 'https://imgs.search.brave.com/hjqISiMfw7YmyqsrH1Gup1CUca_VvhrPBg9_KVQyK8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3RvbWF0by1wbmcv/dG9tYXRvLWdsb3Jp/b3NvLWl0YWxpYW4t/bWFya2V0LTM1LnBu/Zw',
            discountedPrice: 4.99,
            discountPercentage: 17,
            unit: 'kg'
          },
          { 
            id: 4, 
            name: 'Potato', 
            price: 3.99, 
            image: 'https://imgs.search.brave.com/lwuZMKhe_th_9ZkNTX_JBSTaWTs7KGojh88EcXk0okg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NzgyMjI5OC9waG90/by9hLXBpbGUtb2Yt/cG90YXRvZXMtb24t/YS10YWJsZS10b3Au/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTdfcUpLUERSbzkw/Q3BLaXhvOWVqSEV6/SXNLbkhaTW5sQ2dI/V196Q3c2U0k9',
            discountedPrice: 2.99,
            discountPercentage: 25,
            unit: 'kg'
          }
        ]
      },
      { 
        id: 2, 
        name: 'Dairy & Bakery', 
        icon: '🥛',
        products: [
        //   { 
        //     id: 5, 
        //     name: 'Milk', 
        //     price: 4.99, 
        //     image: '/assets/images/milk.jpg',
        //     discountedPrice: 3.99,
        //     discountPercentage: 20,
        //     unit: 'liter'
        //   }
          { 
            id: 6, 
            name: 'Bread', 
            price: 2.99, 
            image: 'https://imgs.search.brave.com/oVn5NDcartBhBZj8nQnL7s-MM7uTjZWQzU4EATmPRJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z290ZXNvLmNvbS9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAyL29ubGlu/ZS1ncm9jZXJ5LXN0/b3JlLnBuZw',
            discountedPrice: 2.49,
            discountPercentage: 17,
            unit: 'loaf'
          }
        ]
      },
      // { 
      //   id: 3, 
      //   name: 'Beverages', 
      //   icon: '🥤',
      //   products: [
      //     { 
      //       id: 7, 
      //       name: 'Orange Juice', 
      //       price: 3.99, 
      //       image: '/assets/images/orange-juice.jpg',
      //       discountedPrice: 2.99,
      //       discountPercentage: 25,
      //       unit: 'liter'
      //     },
      //     { 
      //       id: 8, 
      //       name: 'Cola', 
      //       price: 1.99, 
      //       image: '/assets/images/cola.jpg',
      //       discountedPrice: 1.49,
      //       discountPercentage: 25,
      //       unit: 'bottle'
      //     }
      //   ]
      // },
      // { 
      //   id: 4, 
      //   name: 'Snacks & Packaged Foods', 
      //   icon: '🍪',
      //   products: [
      //     { 
      //       id: 9, 
      //       name: 'Cookies', 
      //       price: 4.99, 
      //       image: '/assets/images/cookies.jpg',
      //       discountedPrice: 3.99,
      //       discountPercentage: 20,
      //       unit: 'pack'
      //     },
      //     { 
      //       id: 10, 
      //       name: 'Chips', 
      //       price: 2.99, 
      //       image: '/assets/images/chips.jpg',
      //       discountedPrice: 2.49,
      //       discountPercentage: 17,
      //       unit: 'pack'
      //     }
      //   ]
      // },
      // { 
      //   id: 5, 
      //   name: 'Personal Care', 
      //   icon: '🧴',
      //   products: [
      //     { 
      //       id: 11, 
      //       name: 'Shampoo', 
      //       price: 7.99, 
      //       image: '/assets/images/shampoo.jpg',
      //       discountedPrice: 5.99,
      //       discountPercentage: 25,
      //       unit: 'bottle'
      //     },
      //     { 
      //       id: 12, 
      //       name: 'Soap', 
      //       price: 2.99, 
      //       image: '/assets/images/soap.jpg',
      //       discountedPrice: 1.99,
      //       discountPercentage: 33,
      //       unit: 'bar'
      //     }
      //   ]
      // },
      // { 
      //   id: 6, 
      //   name: 'Household Essentials', 
      //   icon: '🧹',
      //   products: [
      //     { 
      //       id: 13, 
      //       name: 'Detergent', 
      //       price: 9.99, 
      //       image: '/assets/images/detergent.jpg',
      //       discountedPrice: 7.99,
      //       discountPercentage: 20,Minutos: Freshness Delivered, Fast and Local
      //       unit: 'pack'
      //     },
      //     { 
      //       id: 14, 
      //       name: 'Tissues', 
      //       price: 3.99, 
      //       image: '/assets/images/tissues.jpg',
      //       discountedPrice: 2.99,
      //       discountPercentage: 25,
      //       unit: 'pack'
      //     }
      //   ]
      // }
    ];

    const mockBestSellers = [
      // { 
      //   id: 1, 
      //   name: 'Banana', 
      //   price: 12.99, 
      //   image: 'https://imgs.search.brave.com/MIJQuWYBouDOHautrOPDHXpr-YK_WeRey8Z7iAx8kwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/MS8yNy8xOC8zMi9i/YW5hbmFzLTYxNDA5/MF82NDAuanBn',
      //   discountedPrice: 9.99,
      //   discountPercentage: 23,
      //   unit: 'dozen'
      // },
      { 
        id: 5, 
        name: 'Milk', 
        price: 4.99, 
        image: 'https://tse4.mm.bing.net/th/id/OIP.9LZU9dm7WCz7Du4EoSvyiwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        discountedPrice: 3.99,
        discountPercentage: 20,
        unit: 'liter'
      },
      // { 
      //   id: 7, 
      //   name: 'Orange Juice', 
      //   price: 3.99, 
      //   image: 'https://th.bing.com/th/id/OIP.Yozl-i80qRnBbyEBai9D2gHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      //   discountedPrice: 2.99,
      //   discountPercentage: 25,
      //   unit: 'liter'
      // },
      // { 
      //   id: 9, 
      //   name: 'Cookies', 
      //   price: 4.99, 
      //   image: 'https://tse4.mm.bing.net/th/id/OIP._p_q5ZjpZwXFsjlTrHpW-QHaKx?rs=1&pid=ImgDetMain&o=7&rm=3',
      //   discountedPrice: 3.99,
      //   discountPercentage: 20,
      //   unit: 'pack'
      // },
      // { 
      //   id: 11, 
      //   name: 'Shampoo', 
      //   price: 7.99, 
      //   image: 'https://tse3.mm.bing.net/th/id/OIP.2MuZIBUKGdnHLnPWE8Xi9wHaDt?rs=1&pid=ImgDetMain&o=7&rm=3',
      //   discountedPrice: 5.99,
      //   discountPercentage: 25,
      //   unit: 'bottle'
      // },
      // // { 
      // //   id: 13, 
      // //   name: 'Detergent', 
      // //   price: 9.99, 
      // //   image: '/assets/images/detergent.jpg',
      // //   discountedPrice: 7.99,
      // //   discountPercentage: 20,
      // //   unit: 'pack'
      // // },
      // //   { 
      // //   id: 13, 
      // //   name: 'Detergent', 
      // //   price: 9.99, 
      // //   image: '/assets/images/detergent.jpg',
      // //   discountedPrice: 7.99,
      // //   discountPercentage: 20,
      // //   unit: 'pack'
      // // },
      // // { 
      // //   id: 14, 
      // //   name: 'Detergent', 
      // //   price: 9.99, 
      // //   image: '/assets/images/detergent.jpg',
      // //   discountedPrice: 7.99,
      // //   discountPercentage: 20,
      // //   unit: 'pack'
      // // },
      // // { 
      // //   id: 14, 
      // //   name: 'Detergent', 
      // //   price: 9.99, 
      // //   image: '/assets/images/detergent.jpg',
      // //   discountedPrice: 7.99,
      // //   discountPercentage: 20,
      // //   unit: 'pack'
      // // },
      // // { 
      // //   id: 15, 
      // //   name: 'Detergent', 
      // //   price: 9.99, 
      // //   image: '/assets/images/detergent.jpg',
      // //   discountedPrice: 7.99,
      // //   discountPercentage: 20,
      // //   unit: 'pack'
      // // },
      // // { 
      // //   id: 16, 
      // //   name: 'Detergent', 
      // //   price: 9.99, 
      // //   image: '/assets/images/detergent.jpg',
      // //   discountedPrice: 7.99,
      // //   discountPercentage: 20,
      // //   unit: 'pack'
      // // },
    ];

    // Simulate API delay
    setTimeout(() => {
      setCategories(mockCategories);
      setBestSellers(mockBestSellers);
      setIsLoading(false);
    }, 500);
  }, []);

  const promoData = [
    { id: 1, title: 'SALE', image: '/assets/images/sale.jpg', link: '/promotions/sale' },
    { id: 2, title: 'SALE', image: '/assets/images/sale.jpg', link: '/promotions/sale' },
    { id: 3, title: 'SALE', image: '/assets/images/sale.jpg', link: '/promotions/sale' },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
      </div>
    );
  }

  return (
    <main className="bg-gray-50">
      {/* Hero section - full width */}
      <section className="w-full mb-8">
        <Hero />
      </section>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Categories - scrollable on mobile */}
        <section className="py-6 mb-8">
          <div className="overflow-x-auto pb-2">
            <CategoryList categories={categories.map(cat => ({ id: cat.id, name: cat.name, icon: cat.icon }))} />
          </div>
        </section>

        {/* Banner - responsive height */}
        <section className="mb-12">
          <Banner 
            title="YOUR BEST SUPERMARKET"
            subtitle="WE DELIVER THE BEST"
            discountText="70% OFF"
            imageUrl="/assets/images/banner.jpg"
          />
        </section>

        {/* Best Sellers with modern section header */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="block text-red-600 font-medium text-sm mb-1">TOP PRODUCTS</span>
              <h2 className="text-2xl font-bold text-gray-800">Best Sellers</h2>
            </div>
            <a href="/products/best-sellers" className="text-red-600 text-sm font-medium flex items-center hover:text-red-800 transition-colors">
              See All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <ProductCarousel products={bestSellers} />
          </div>
        </section>

        {/* Promotions with improved spacing */}
        {/* <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="block text-red-600 font-medium text-sm mb-1">SPECIAL OFFERS</span>
              <h2 className="text-2xl font-bold text-gray-800">Current Promotions</h2>
            </div>
          </div>
          <Promotions promos={promoData} />
        </section> */}

        {/* Featured Categories with Products - more visually appealing */}
        <section>
          {categories.map((category, index) => (
            <div 
              className={`mb-12 ${index % 2 === 1 ? "bg-gray-50 py-6 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" : ""}`} 
              key={category.id}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{category.name}</h2>
                    <span className="text-sm text-gray-500">{category.products.length} products</span>
                  </div>
                </div>
                <a href={`/category/${category.id}`} className="text-red-600 text-sm font-medium flex items-center hover:text-red-800 transition-colors">
                  See All
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <ProductCarousel products={category.products.slice(0, 4)} />
              </div>
            </div>
          ))}
        </section>

        {/* About Us Section - more engaging */}
        <section className="mb-16 bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
          <AboutUs />
        </section>
      </div>
    </main>
  );
};

export default HomePage;