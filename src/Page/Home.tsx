import { useEffect, useState } from "react";

import Banner1 from "../Assets/IccBanner.png";
import Banner2 from "../Assets/IccBanner1.jpg";
import HomeBanner from "../Component/Banner";
import HomeCarousel from "../Component/Carousel";
import HomeMovieCart from "../Component/MovieCart";
import axiosInstance from "../Config/AxiosInstance";
import HomeLayout from "../Layouts/HomeLayout";
import Movie from "../Types/Movie";

type MoviePoster = [
  {
    id: string;
    poster: string;
  }
];

function Home() {
  const [moviePosters, setMoviePosters] = useState<MoviePoster>([ { id: "", poster: "" }]);

  async function fetchMovies() {
    try {
      const response = await axiosInstance.get("/mba/api/v1/auth/movies");
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
        <div className="text-2xl  font-bold text-black mt-6 text-center lg:text-start"> Recommended Movie </div>
        <div className="flex items-center justify-center gap-4 mt-2 flex-col lg:flex-row mb-4 ">
          {/* <HomeMovieCart MovieImage={Poster1} />
          <HomeMovieCart MovieImage={Poster3} />
          <HomeMovieCart MovieImage={Poster4} />
          <HomeMovieCart MovieImage={Poster2} />
          <HomeMovieCart MovieImage={Poster5} /> */}

          {moviePosters && moviePosters.map((moviePoster) => {
            return (
              <HomeMovieCart
                key={moviePoster.id}
                MovieImage={moviePoster.poster}
              />
            );
          })}
        </div>
        <HomeBanner Image={Banner2} />
      </div>
    </HomeLayout>
  );
}

export default Home;
