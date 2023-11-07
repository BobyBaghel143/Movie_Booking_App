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
    name: string,
  }
];

function Home() {
  const [moviePosters, setMoviePosters] = useState<MoviePoster>([ { id: "", poster: "", name:"" }]);

  async function fetchMovies() {
    try {
      const response = await axiosInstance.get("/mba/api/v1/movies");
      const movieData = response.data.data.map((movie: Movie) => {
        return {
          id: movie._id,
          poster: movie.poster,
          name:movie.name,
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
          {moviePosters && moviePosters.map((moviePoster) => {
            return (
              <HomeMovieCart
                key={moviePoster.id}
                movieImage={moviePoster.poster}
                movieId={moviePoster.id}
                movieName={moviePoster.name}
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
