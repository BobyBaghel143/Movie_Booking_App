import { useEffect, useState } from "react";

import Banner1 from "../Assets/IccBanner.png";
import Banner2 from "../Assets/IccBanner1.jpg";
// import Poster1 from "../Assets/posterImage.jpg";
// import Poster2 from "../Assets/posterImage1.png";
// import Poster5 from "../Assets/posterImage2.png";
// import Poster3 from "../Assets/posterImage3.png";
// import Poster4 from "../Assets/posterImage4.png";
import HomeBanner from "../Component/Banner";
import HomeCarousel from "../Component/Carousel";
import HomeFooter from "../Component/Footer";
import HomeMovieCart from "../Component/MovieCart";
import Navbar from "../Component/Navbar";
import axiosInstance from "../Config/AxiosInstance";
import Movie from "../Types/Movie";
import HomeLayout from "../Layouts/HomeLayout";

type MoviePoster = [{
  id: string,
  poster:string,
}]

function Home() {
  const [moviePosters, setMoviePosters] = useState<MoviePoster>([{ id: "", poster: "" }]);

  async function fetchMovies() {
    try {
      const response = await axiosInstance.get("     ");
      const movieData = response.data.data.map((movie: Movie) => {
        return {
          id: movie._id,
          poster: movie.poster,
        };
      });
      console.log(movieData);
      setMoviePosters(movieData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <HomeLayout>
      <HomeCarousel />
      <div className="min-h-[48rem] w-[80vw] flex flex-col mx-auto  ">
        <HomeBanner Image={Banner1} />
        <div className="text-2xl  font-bold text-black mt-6 text-center lg:text-start "> Recommended Movie </div>
        <div className="flex items-center justify-center gap-4 mt-2 flex-col lg:flex-row mb-4 ">
          {/* <HomeMovieCart MovieImage={Poster1} />
          <HomeMovieCart MovieImage={Poster3} />
          <HomeMovieCart MovieImage={Poster4} />
          <HomeMovieCart MovieImage={Poster2} />
          <HomeMovieCart MovieImage={Poster5} /> */}

          {moviePosters &&  moviePosters.map((moviePoster) => {
              return (
                <HomeMovieCart key={moviePoster.id} MovieImage={moviePoster.poster} />
              );
            })}
        </div>
        <HomeBanner Image={Banner2} />
      </div>
      <HomeFooter />
    </HomeLayout>
  );
}

export default Home;
