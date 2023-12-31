import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ThreateShowCard from "../Component/TheatreShowCard";
import axiosInstance from "../Config/AxiosInstance";
import HomeLayout from "../Layouts/HomeLayout";

type MovieShows = {
  id: string;            // show id
  timing: string;
  format: string;
  movieId: string;
  theatreId: string;
  price: number;
  noOfSeats: number;
  seatConfiguration: string;
};

type TheatreData = {
  id: string;        // theatreId
  theatreName: string;
  shows: [MovieShows];
};

type theatre = {
  city: string;
  createdAt: string;
  updatedAt: string;
  movies: [string];
  name: string;
  owner: string;
  pincode: number;
  _v: number;
  _id: string;
};

type show = {
  createdAt: string,
  updatedAt: string,
  timing: string,
  format: string,
  movieId: string,
  price: number,
  noOfSeats: number,
  _v: number,
  _id: string,
  theatreId: theatre,
  seatConfiguration: string,
};

type TheatreState = {
  [key: string]: TheatreData;
};



function MovieListings() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [theatreData, setTheatreData] = useState<TheatreState>({});

  async function fetchShowDetails() {
    try {
      const response = await axiosInstance.get(`mba/api/v1/shows?movieId=${state.movieId}`);
      const shows = response.data.data;
      const showState: TheatreState = {};
        shows.map((show: show) => {
        if (show.theatreId._id in showState) {
          showState[show.theatreId._id].shows.push({
            id: show._id, // show id
            timing: show.timing,
            format: show.format,
            price: show.price,
            movieId: show.movieId,
            theatreId:show.theatreId._id,
            noOfSeats: show.noOfSeats,
            seatConfiguration: show.seatConfiguration ? show.seatConfiguration : "",
          });
        } else {
          showState[show.theatreId._id] = {
            id: show.theatreId._id, // theatreId
            theatreName: show.theatreId.name,
            shows: [
              {
                id: show._id, // show id
                timing: show.timing,
                format: show.format,
                price: show.price,
                movieId: show.movieId,
                theatreId: show.theatreId._id,
                noOfSeats: show.noOfSeats,
                seatConfiguration: show.seatConfiguration ? show.seatConfiguration : "",
              },
            ],
          };
        }
      });
      console.log(showState);
      setTheatreData(showState);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!state || !state.movieName) navigate("/");
    fetchShowDetails();
  });

  return (
    <HomeLayout>
      <div className="min-h-[80vh] bg-slate-300 ">
        <div className="bg-[#333545] text-white">
          <div className=" text-7xl pt-8 pb-6 w-[80vw] mx-auto font-light">
            {state && state.movieName && state.movieName}
            {/* 12 Fail */}
            <div className=" flex gap-3 mt-6 ">
              <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent hover:bg-white hover:text-black ">
                Drama
              </button>
              <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent hover:bg-white hover:text-black ">
                Biography
              </button>
            </div>
          </div>
        </div>

        {/* Theatre listing */}
        <div className="bg-slate-300 mt-4 w-[100vw]">
          <div className="w-[80vw] mx-auto rounded-xl bg-[#ffffff] ">
            {theatreData && Object.keys(theatreData).map((theatreId: string) => {
                return (
                  <ThreateShowCard shows={theatreData[theatreId].shows} key={theatreId} name={theatreData[theatreId].theatreName}/>
                );
              })}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default MovieListings;
