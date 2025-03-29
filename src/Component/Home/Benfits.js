import React from 'react';
import { Wifi, ParkingSquare, Cigarette, BookOpen } from 'lucide-react';

const benefits = [
  { id: 'working-space', icon: <Wifi />, title: 'Working Space' },
  { id: 'affordable-price', icon: <Wifi />, title: 'Affordable Price' },
  { id: 'high-speed-internet', icon: <Wifi />, title: 'High-Speed Internet' },
  { id: 'smoking-area', icon: <Cigarette />, title: 'Smoking Area' },
  { id: 'meeting-room', icon: <BookOpen />, title: 'Meeting Room' },
  { id: 'huge-parking-lot', icon: <ParkingSquare />, title: 'Huge Parking Lot' },
];

const DescriptiveCards = () => {
  return (
    <section className="container mx-auto px-6 py-24 text-gray-900 dark:text-white">
      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl mb-12">
        Your Favorite Cafe in Town
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map(({ icon, id, title }) => (
          <div
            key={id}
            className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-3xl mb-4 shadow-md">
              {icon}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DescriptiveCards;