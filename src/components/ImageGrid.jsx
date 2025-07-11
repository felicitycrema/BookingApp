// import React from "react";

// const ImageGrid = () => {
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-8">
//       <section className="bg-white max-w-4xl mx-auto rounded-xl shadow-md p-6 sm:p-10">
//         {/* Header and Button */}
//         <div className="text-center mb-10 sm:mb-12">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
//             Shop Airbnb Gift Cards
//           </h1>
//           <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-base sm:text-lg rounded-full hover:bg-gray-800 transition duration-300">
//             Learn More
//           </button>
//         </div>

//         {/* Image Grid */}
//         <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
//           {[
//             {
//               src: "https://m.media-amazon.com/images/I/51QVljg-E4L.jpg",
//               alt: "Airbnb gift card 1",
//               rotation: "rotate-[12deg]",
//             },
//             {
//               src: "https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg",
//               alt: "Airbnb gift card 2",
//               rotation: "rotate-[-8deg]",
//             },
//             {
//               src: "https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg",
//               alt: "Airbnb gift card 3",
//               rotation: "rotate-[6deg]",
//             },
//           ].map((img, i) => (
//             <div key={i} className="flex justify-center sm:basis-1/3">
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className={`max-w-[140px] sm:max-w-[160px] md:max-w-[180px] h-auto object-cover rounded-xl shadow-lg transform ${img.rotation} transition-transform duration-300 hover:scale-105`}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImageGrid;

// import React from "react";

// const ImageGrid = () => {
//   return (
//     <div>
//       <section className="px-4 py-12 sm:py-16 md:px-8 md:py-20 max-w-6xl mx-auto bg-white">
//         {/* Header and Button */}
//         <div className="text-center mb-10 sm:mb-12 px-2 md:px-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             Shop Airbnb Gift Cards
//           </h1>
//           <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-base sm:text-lg rounded-full hover:bg-gray-800 transition duration-300">
//             Learn More
//           </button>
//         </div>

//         {/* Image Grid */}
//         <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-8">
//           {[
//             {
//               src: "https://m.media-amazon.com/images/I/51QVljg-E4L.jpg",
//               alt: "Airbnb gift card 1",
//               rotation: "rotate-[12deg]",
//             },
//             {
//               src: "https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg",
//               alt: "Airbnb gift card 2",
//               rotation: "rotate-[-8deg]",
//             },
//             {
//               src: "https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg",
//               alt: "Airbnb gift card 3",
//               rotation: "rotate-[6deg]",
//             },
//           ].map((img, i) => (
//             <div
//               key={i}
//               className="flex-grow flex justify-center mt-4 sm:mt-0 sm:basis-1/3"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className={`w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-auto object-cover rounded-xl shadow-lg transform ${img.rotation} transition-transform duration-300 hover:scale-105`}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImageGrid;

// import React from "react";

// const ImageGrid = () => {
//   return (
//     <div>
//       <section className="px-4 py-16 max-w-6xl mx-auto bg-white">
//         {/* Header and Button */}
//         <div className="text-center mb-12 px-2">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             Shop Airbnb Gift Cards
//           </h1>
//           <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-base sm:text-lg rounded-full hover:bg-gray-800 transition duration-300">
//             Learn More
//           </button>
//         </div>

//         {/* Image Grid */}
//         <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
//           {[
//             {
//               src: "https://m.media-amazon.com/images/I/51QVljg-E4L.jpg",
//               alt: "Airbnb gift card 1",
//               rotation: "rotate-[12deg]",
//             },
//             {
//               src: "https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg",
//               alt: "Airbnb gift card 2",
//               rotation: "rotate-[-8deg]",
//             },
//             {
//               src: "https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg",
//               alt: "Airbnb gift card 3",
//               rotation: "rotate-[6deg]",
//             },
//           ].map((img, i) => (
//             <div key={i} className="flex-grow flex justify-center sm:basis-1/3">
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className={`w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-auto object-cover rounded-xl shadow-lg transform ${img.rotation} transition-transform duration-300 hover:scale-105`}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImageGrid;

// import React from "react";

// const ImageGrid = () => {
//   return (
//     <div className="flex flex-col sm:flex-row">
//       <section className="px-4 py-16 max-w-6xl mx-auto bg-white">
//         {/* Header and Button */}
//         <div className="text-center mb-12 px-2">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             Shop Airbnb Gift Cards
//           </h1>
//           <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-base sm:text-lg rounded-full hover:bg-gray-800 transition duration-300">
//             Learn More
//           </button>
//         </div>

//         {/* Image Grid */}
//         <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
//           {[
//             {
//               src: "https://m.media-amazon.com/images/I/51QVljg-E4L.jpg",
//               alt: "Airbnb gift card 1",
//               rotation: "rotate-[12deg]",
//             },
//             {
//               src: "https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg",
//               alt: "Airbnb gift card 2",
//               rotation: "rotate-[-8deg]",
//             },
//             {
//               src: "https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg",
//               alt: "Airbnb gift card 3",
//               rotation: "rotate-[6deg]",
//             },
//           ].map((img, i) => (
//             <img
//               key={i}
//               src={img.src}
//               alt={img.alt}
//               className={`w-40 md:w-48 h-56 md:h-64 object-cover rounded-xl shadow-lg transform ${img.rotation} transition-transform duration-300 hover:scale-105`}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImageGrid;


import React from "react";

const ImageGrid = () => {
  return (
    <div className="bg-white py-16 px-4">
      <section className="max-w-5xl mx-auto">
        {/* Header and Button */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Shop Airbnb Gift Cards
          </h1>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-base sm:text-lg rounded-full hover:bg-gray-800 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Image Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              src: "https://m.media-amazon.com/images/I/51QVljg-E4L.jpg",
              alt: "Airbnb gift card 1",
              rotation: "rotate-[12deg]",
            },
            {
              src: "https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg",
              alt: "Airbnb gift card 2",
              rotation: "rotate-[-8deg]",
            },
            {
              src: "https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg",
              alt: "Airbnb gift card 3",
              rotation: "rotate-[6deg]",
            },
          ].map((img, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={img.src}
                alt={img.alt}
                className={`w-40 md:w-48 h-56 md:h-64 object-cover rounded-xl shadow-lg transform ${img.rotation} transition-transform duration-300 hover:scale-105`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageGrid;


// import React from "react";

// const ImageGrid = () => {
//   return (
//     <div className="">
//       <section className="px-4 py-16 max-w-6xl mx-auto bg-white">
//         {/* Header and Button */}
//         <div className="text-center mb-12 px-2">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             Shop Airbnb Gift Cards
//           </h1>
//           <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-base sm:text-lg rounded-full hover:bg-gray-800 transition duration-300">
//             Learn More
//           </button>
//         </div>

//         {/* Image Grid */}
//         <div className="flex flex-wrap justify-center items-center gap-6">
//           {[
//             {
//               src: "https://m.media-amazon.com/images/I/51QVljg-E4L.jpg",
//               alt: "Airbnb gift card 1",
//               rotation: "rotate-[12deg]",
//             },
//             {
//               src: "https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg",
//               alt: "Airbnb gift card 2",
//               rotation: "rotate-[-8deg]",
//             },
//             {
//               src: "https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg",
//               alt: "Airbnb gift card 3",
//               rotation: "rotate-[6deg]",
//             },
//           ].map((img, i) => (
//             <img
//               key={i}
//               src={img.src}
//               alt={img.alt}
//               className={`w-32 sm:w-40 md:w-48 h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg transform ${img.rotation} transition-transform duration-300 hover:scale-105`}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImageGrid;

// import React from "react";

// const ImageGrid = () => {
//   return (
//     <section className="flex px-1 gap-4 sm:px-1 py-16 max-w-6xl mx-auto bg-white">
//       {/* Header and Button */}
//       <div className="mx-0 text-center mb-12">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//           Shop Airbnb Gift Cards
//         </h1>
//         <button className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition duration-300">
//           Learn More
//         </button>
//       </div>

//       {/* Image Grid */}
//       <div className="flex justify-center items-center gap-6 flex-row">
//         {[
//           {
//             src: "https://m.media-amazon.com/images/I/51QVljg-E4L.jpg",
//             alt: "Airbnb gift card 1",
//             rotation: "rotate-[12deg]",
//           },
//           {
//             src: "https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg",
//             alt: "Airbnb gift card 2",
//             rotation: "rotate-[-8deg]",
//           },
//           {
//             src: "https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg",
//             alt: "Airbnb gift card 3",
//             rotation: "rotate-[6deg]",
//           },
//         ].map((img, i) => (
//           <img
//             key={i}
//             src={img.src}
//             alt={img.alt}
//             className={`w-36 sm:w-44 md:w-48 h-52 sm:h-60 md:h-64 object-cover rounded-xl shadow-lg transform ${img.rotation} transition-transform duration-300 hover:scale-105`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImageGrid;

// import React from "react";

// const ImageGrid = () => {
//   return (
//     <section className="flex px-4 sm:px-6 py-16 max-w-6xl mx-auto mt-30 bg-white">
//       {/* Header and Button */}
//       <div className="text-center mb-10">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Shop Airbnb Gift Cards
//         </h1>
//         <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
//           Learn More
//         </button>
//       </div>

//       {/* Image Grid */}
//       <div className="justify-center items-center gap-6 flex-wrap">
//         <img
//           src="https://m.media-amazon.com/images/I/51QVljg-E4L.jpg"
//           alt="Airbnb gift card 1"
//           className="w-36 sm:w-44 md:w-48 h-52 sm:h-60 md:h-64 object-cover rounded-xl transform rotate-[75deg] shadow-lg"
//         />
//         <img
//           src="https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg"
//           alt="Airbnb gift card 2"
//           className="w-36 sm:w-44 md:w-48 h-52 sm:h-60 md:h-64 object-cover rounded-xl transform rotate-[75deg] shadow-lg"
//         />
//         <img
//           src="https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg"
//           alt="Airbnb gift card 3"
//           className="w-36 sm:w-44 md:w-48 h-52 sm:h-60 md:h-64 object-cover rounded-xl transform rotate-[115deg] shadow-lg"
//         />
//       </div>
//     </section>
//   );
// };

// export default ImageGrid;

// import React from "react";

// const ImageGrid = () => {
//   return (
//     <section className=" flex gap-20 px-4 md:px-6 py-16 max-w-7xl mx-auto text-center bg-white">
//       {/* Header and Button */}
//       <div className="mb-6 mt-6">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Shop Airbnb Gift Cards
//         </h1>
//         <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
//           Learn More
//         </button>
//       </div>

//       {/* Image Grid */}
//       <div className="flex justify-center items-center gap-6 flex-wrap">
//         <img
//           src="https://m.media-amazon.com/images/I/51QVljg-E4L.jpg"
//           alt="Airbnb gift card 1"
//           className="w-48 h-64 object-cover rounded-xl transform rotate-[75deg] shadow-lg"
//         />
//         <img
//           src="https://a0.muscache.com/pictures/09104ce1-4a66-4284-80b2-ad0ea3e46c24.jpg"
//           alt="Airbnb gift card 2"
//           className="w-48 h-64 object-cover rounded-xl transform rotate-[75deg] shadow-lg"
//         />
//         <img
//           src="https://m.media-amazon.com/images/I/41kOb7Ti-qL.jpg"
//           alt="Airbnb gift card 3"
//           className="w-48 h-64 object-cover rounded-xl transform rotate-[115deg] shadow-lg"
//         />
//       </div>
//     </section>
//   );
// };

// export default ImageGrid;
