import React, { useState } from "react";

const categories = [
  {
    title: "Destination for Arts & Culture",
    places: [
      { city: "Phoenix", region: "Arizona" },
      { city: "San Francisco", region: "California" },
      { city: "Keswick", region: "England" },
    ],
  },
  {
    title: "Destination for Outdoor Adventure",
    places: [
      { city: "Hot Springs", region: "Arkansas" },
      { city: "Barcelona", region: "Catalonia" },
      { city: "London", region: "England" },
    ],
  },
  {
    title: "Mountain Cabins",
    places: [],
  },
  {
    title: "Beach Destinations",
    places: [
      { city: "Los Angeles", region: "California" },
      { city: "Prague", region: "Czechia" },
      { city: "Scarborough", region: "England" },
    ],
  },
  {
    title: "Popular Destinations",
    places: [],
  },
  {
    title: "Unique Stays",
    places: [
      { city: "San Diego", region: "California" },
      { city: "Washington", region: "District of Columbia" },
    ],
  },
];

const Getaways = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white py-2 px-4 sm:px-6 md:px-12">
      <h4 className="text-3xl font-semibold text-gray-800 mb-4 text-left">
        Inspiration for Future Getaways
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 items-stretch">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 rounded-md h-full flex flex-col justify-between transition-all duration-200"
          >
            <div>
              <p className="text-sm font-semibold mb-3 text-gray-700 group-hover:underline">
                {category.title}
              </p>

              {category.places.length > 0 && (
                <ul className="space-y-4">
                  {category.places.map((place, idx) => (
                    <li key={idx}>
                      <p className="font-medium text-gray-900">{place.city}</p>
                      <span className="text-sm text-gray-500">
                        {place.region}
                      </span>
                    </li>
                  ))}
                  {category.title === "Unique Stays" && showMore && (
                    <li>
                      <p className="font-medium text-gray-900">Tokyo</p>
                      <span className="text-sm text-gray-500">Japan</span>
                    </li>
                  )}
                </ul>
              )}
            </div>

            {category.title === "Unique Stays" && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 text-sm text-blue-600 hover:underline"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Getaways;
