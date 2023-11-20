import { Route, Routes } from "react-router-dom";

import Bookings from "../Page/Bookings";
import CelenderPage from "../Page/CelenderPage";
import Home from "../Page/Home";
import LoginPage from "../Page/loginPage";
import MovieListings from "../Page/MovieListing";
import SeatConfig from "../Page/SeatConfig";
import Signup from "../Page/SignupPage";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/listing" element={<MovieListings />} />
      <Route path="/movie/seatSelection" element={<SeatConfig />} />
      <Route path="/movie/bookings" element={<Bookings />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/celender" element={<CelenderPage />} />
    </Routes>
  );
}

export default MainRoutes;
