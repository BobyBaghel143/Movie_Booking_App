import { Route, Routes } from "react-router-dom";

import Home from "../Page/Home";
import MovieListings from "../Page/MovieListing";
import SeatsPage from "../Page/SeatsArrange";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/listing" element={<MovieListings/>} />
      <Route path="/movie/seats" element={<SeatsPage/>} />
    </Routes>
  );
}

export default MainRoutes;
