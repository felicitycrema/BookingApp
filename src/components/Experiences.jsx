import React from "react";

const Experiences = () => {
  return (
    <section className="px-4 py-4 bg-white text-gray-800 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-left mb-4">
        Discover Airbnb Experiences
      </h2>

      {/* Grid Layout */}
      <div className="h-[36rem] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience 1 */}
        <div className="relative w-full h-[34rem]  rounded-xl overflow-hidden shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
            alt="Science Exhibit"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Things to do from home
            </h3>
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition">
              Online Experiences
            </button>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative w-full h-[34rem]  rounded-xl overflow-hidden shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&w=1600&q=80"
            alt="Chef cooking"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Things to do on your trip
            </h3>
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition">
              Experiences
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
