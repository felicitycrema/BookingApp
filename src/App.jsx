import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
// import PageLayout from "./pages/PageLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import PlacesFormPage from "./pages/PlacesFormPage.jsx";
import PlacePage from "./pages/PlacePage.jsx";
import AccountPage from "./pages/ProfilePage.jsx";
import PlacesPage from "./pages/PlacesPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import HomePage from "./components/HomePage.jsx";
import MyReservations from "./pages/MyReservations.jsx";
import LeaveReviewPage from "./pages/LeaveReviewPage.jsx";
import RatingsPage from "./pages/RatingsPage.jsx";
import PlacesSearch from "./pages/PlacesSearch.jsx";
// import AirbnbPayment from "./pages/AirbnbPayment.jsx";

// import HotelListingModal from "./modal/HotelListingModal.jsx";
// import Footer from "./components/Footer.jsx";

// axios.defaults.baseURL = "http://127.0.0.1:4000";
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route index element={<IndexPage />} /> */}
          <Route path="/places" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          {/* <Route path="/account/places/new" element={<HotelListingModal />} /> */}
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/places/:id" element={<PlacePage />} />
          <Route path="account/bookings" element={<BookingsPage />} />
          <Route path="account/bookings/:id" element={<BookingPage />} />
          {/* <Route
            path="account/bookings/:id/payment"
            element={<AirbnbPayment />}
          /> */}
          <Route path="/payment/:bookingId" element={<PaymentPage />} />
          {/* <Route path="/account" element={<Footer />} />         */}
          <Route path="/account/my-reservations" element={<MyReservations />} />
          <Route
            path="/account/bookings/:bookingId/review"
            element={<LeaveReviewPage />}
          />
        </Route>
        <Route path="/account/ratings" element={<RatingsPage />} />
        <Route path="/search" element={<PlacesSearch />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;

