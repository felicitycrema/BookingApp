// import React from "react";
// import Header2 from "./Header2.jsx";
// import Head from "./Head.jsx";
// import Footer from "./Footer.jsx";
// import Experiences from "./Experiences.jsx";
// import ImageGrid from "./ImageGrid.jsx";
// import Questions from "./Questions.jsx";
// import Getaways from "./Getaways.jsx";
// import City from "./City.jsx";
// import { Link } from "react-router-dom";


// const HomePage = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white text-gray-800">
//       {/* <Header2 /> */}

//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="bg-black text-white text-center px-4 py-20">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Welcome to Airbnb
//             </h1>
//             <p className="text-lg text-gray-300 mb-8">
//               Find places to stay, things to do, and more.
//             </p>
//             {/* <button className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
//               Explore Now
//             </button> */}
//             <Link to="/places">
//               <button className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
//                 Explore Now
//               </button>
//             </Link>
//           </div>
//         </section>

//         {/*City*/}
//         <section className="bg-white py-8 px-2">
//           <City />
//         </section>

//         {/* Experiences Section */}
//         <section className="py-8 px-2 md:px-4 bg-gray-50 mt-2">
//           {/* <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
//             Top Experiences
//           </h2> */}
//           <Experiences />
//         </section>

//         {/* Gift Cards Section */}
//         <section className="bg-white py-8 px-2">
//           <ImageGrid />
//         </section>
//         {/*Questions*/}
//         <section className="bg-white py-8 px-2">
//           <Questions />
//         </section>
//         {/*Getaways*/}
//         <section className="bg-white py-8 px-2">
//           <Getaways />
//         </section>
//       </main>

//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2.jsx";
import Head from "./Head.jsx";
import Footer from "./Footer.jsx";
import Experiences from "./Experiences.jsx";
import ImageGrid from "./ImageGrid.jsx";
import Questions from "./Questions.jsx";
import Getaways from "./Getaways.jsx";
import City from "./City.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/places");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* <Header2 /> */}

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-black">
          <section
            className="text-white text-center px-4 py-20 bg-cover bg-center rounded-md sm:mx-6"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80')",
            }}
          >
            <div className="max-w-4xl mx-auto bg-opacity-40 p-8 rounded-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Airbnb
              </h1>
              <h3 className="text-3xl text-gray-200 mb-8">
                Not sure where to go? Perfect
              </h3>
              <button
                onClick={handleExploreClick}
                className="px-6 py-3 bg-gray-200 text-red-950 rounded-full hover:bg-gray-950 transition"
              >
                I'm flexible
              </button>
            </div>
          </section>
          <div className="mt-4 flex justify-center">
            <input className="bg-gray-300 text-center px-4 py-2 rounded-sm mb-24" />
          </div>
        </div>

        {/* City */}
        <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <City />
          </div>
        </section>

        {/* Experiences */}
        <section className="py-8 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Experiences />
          </div>
        </section>

        {/* Gift Cards */}
        <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ImageGrid />
          </div>
        </section>

        {/* Questions */}
        <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Questions />
          </div>
        </section>

        {/* Getaways */}
        <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Getaways />
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header2 from "./Header2.jsx";
// import Head from "./Head.jsx";
// import Footer from "./Footer.jsx";
// import Experiences from "./Experiences.jsx";
// import ImageGrid from "./ImageGrid.jsx";
// import Questions from "./Questions.jsx";
// import Getaways from "./Getaways.jsx";
// import City from "./City.jsx";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleExploreClick = () => {
//     navigate("/places");
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white text-gray-800">
//       {/* <Header2 /> */}

//       <main className="flex-grow">
//         {/* Hero Section */}
//         {/* <section className="bg-black text-white text-center px-4 py-20">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Welcome to Airbnb
//             </h1>
//             <p className="text-lg text-gray-300 mb-8">
//               Find places to stay, things to do, and more.
//             </p>
//             <button
//               onClick={handleExploreClick}
//               className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//             >
//               Explore Now
//             </button>
//           </div>
//         </section> */}
//         <div className="bg-black">
//           <section
//             className="text-white text-center px-4 py-20 bg-cover bg-center mx-10 rounded-md"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80')",
//             }}
//           >
//             <div className="max-w-4xl mx-auto bg-opacity-40 p-8 rounded-xl">
//               <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                 Welcome to Airbnb
//               </h1>
//               <h3 className="text-3xl text-gray-200 mb-8">
//                 Not sure where to go? Perfect
//                 {/* Find places to stay, things to do, and more. */}
//               </h3>
//               <button
//                 onClick={handleExploreClick}
//                 className="px-6 py-3 bg-gray-200 text-red-950 rounded-full hover:bg-gray-950 transition"
//               >
//                 I'm flexible
//                 {/* Explore Now */}
//               </button>
//             </div>
//           </section>
//           <div className="mt-4  flex justify-center">
//             <input className="bg-gray-300 text-center px-4 py-2 rounded-sm mb-24" />
//           </div>
//         </div>

//         {/* City */}
//         <section className="bg-white py-8 px-2">
//           <City />
//         </section>

//         {/* Experiences Section */}
//         <section className="py-8 px-2 md:px-4 bg-gray-50 mt-2">
//           <Experiences />
//         </section>

//         {/* Gift Cards Section */}
//         <section className="bg-white py-8 px-2">
//           <ImageGrid />
//         </section>

//         {/* Questions */}
//         <section className="bg-white py-8 px-2">
//           <Questions />
//         </section>

//         {/* Getaways */}
//         <section className="bg-white py-8 px-2">
//           <Getaways />
//         </section>
//       </main>

//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default HomePage;
