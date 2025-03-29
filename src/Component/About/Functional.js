import React from "react";
import { FaUsers, FaLaptopCode, FaSmile, FaPhoneAlt } from "react-icons/fa";

const achievements = [
  { icon: <FaUsers size={50} />, number: "11+", label: "Years Experience" },
  { icon: <FaLaptopCode size={50} />, number: "2600+", label: "Website Designing" },
  { icon: <FaSmile size={50} />, number: "1600+", label: "Satisfied Client" },
  { icon: <FaPhoneAlt size={50} />, number: "100%", label: "Support" },
];

const AchievementSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Achievement</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="text-gray-700">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.number}</h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;
