import React from "react";
import Header from "./Header.jsx"; // make sure this path is correct
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import Headerf from "./components/Headerf.jsx";
import Header2 from "./components/Header2.jsx";
import Head from "./components/Head.jsx";
import HomePage from "./components/HomePage.jsx";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
        {/* <HomePage /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

// import React from "react";
// import Header from "./components/Headerf.js";
// import Footer from "./components/Footer.jsx";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//     //   <div className="px-4 py-4 flex flex-col min-h-screen">
//     //       <Header />
//     //       <Outlet />

//     // </div>
//   );
// };

// export default Layout;
