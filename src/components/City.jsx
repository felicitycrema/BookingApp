import React from "react";

const cities = [
  {
    name: "Cape Town",
    distance: "500 km away",
    color: "bg-[#CC2D4A]",
    image: "https://media.nomadicmatt.com/2024/capetownitinerary.jpeg",
  },
  {
    name: "Johannesburg",
    distance: "300 km away",
    color: "bg-[#BC1A6E]",
    image:
      "https://t3.ftcdn.net/jpg/04/08/15/02/360_F_408150269_PqTdiPNNPHzorCrbk2iP66LyFT8Gdnss.jpg",
  },
  {
    name: "Durban",
    distance: "200 km away",
    color: "bg-[#DE3151]",
    image:
      "https://www.shutterstock.com/image-photo/durban-city-skyline-south-africa-600nw-1660964596.jpg",
  },
  {
    name: "Pretoria",
    distance: "150 km away",
    color: "bg-[#D93B30]",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPD3sh_0a8Oy5ViCQiqJ_kD7PRd-OF_PGPQ&s",
  },
];

const City = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <h2 className="text-3xl font-semibold text-black mb-4 text-left">
        Inspiration for your next trip
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <div
              className="h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(${city.image})` }}
            ></div>
            <div className={`${city.color} h-70 text-white p-4`}>
              <h1 className="text-4xl font-light mb-4">{city.name}</h1>
              <p className="text-sm">{city.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default City;
