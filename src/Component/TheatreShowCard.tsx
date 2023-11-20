import { BsInfoCircle } from "react-icons/bs";

import ShowTimingCard from "./ShowTimingCard";
import TheatreNameCard from "./TheatreNameCard";

type MovieShows = {
  id: string,           // show id
  timing: string,
  format: string,
  movieId: string,
  theatreId: string,
  price: number,
  noOfSeats: number,
  seatConfiguration: string,
};

function formatTime(timeString: string) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

type TheatreShowCardProps = {
  name: string;
  shows: [MovieShows];
};

function ThreateShowCard({ name, shows }: TheatreShowCardProps) {

  
  return (
    <div className=" w-full border-md px-4 pt-4 pb-2">
      <div className="flex justify-start items-start">
        <div className="min-w-[28%] max-w-[5%] ">
          <TheatreNameCard name={name} />
        </div>

        <div className="flex gap-2 min-w-[7%]  max-w-[10%] font-light ">
          <div className="text-2xl"> <BsInfoCircle /> </div>
          <div> INFO </div>
        </div>

        <div>
          <div className="flex items-center justify-start w-auto flex-wrap">
            {shows.map((show: MovieShows) => {
              return (
                <ShowTimingCard
                  movieId={show.movieId}
                  theatreId={show.theatreId}
                  showId={show.id}
                  config={show.seatConfiguration}
                  format={show.format}
                  price={show.price.toString()}
                  timing={formatTime(new Date(show.timing).toLocaleTimeString())}
                  key={show.id}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-start mb-3 gap-3 ml-2">
            <div className="h-[12px] w-[12px] bg-yellow-500 rounded-full"></div>
            <div>Cancellatioin Available</div>
          </div>
        </div>
      </div>
      <div className="divider"> </div>
    </div>
  );
}

export default ThreateShowCard;
