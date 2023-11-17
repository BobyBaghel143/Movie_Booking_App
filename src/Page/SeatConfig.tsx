import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import processSeatConfig from "../Utils/ProcessSeatConfig";


type Seat = {
  number: number,
  status: number,
}

type Row = {
  number: string,
  seats: Seat[],
}

type SeatState = [Row];

function SeatConfig() {
  const { state } = useLocation();

  const [seats, setSeats] = useState<SeatState>([{ number: "", seats: [{ number: 0, status: 0 }] }]);

  function processSeatColor(seat: Seat) {
    if (seat.status == 0) return '';
    else if (seat.status == 1) return 'border border-green-300 rounded hover:bg-green-300';
    else if (seat.status == 3) return 'border border-yellow-300 rounded bg-yellow-300';
    else return 'border border-gray-400  bg-gray-300';
  }

  function processSeatSelection(seatId: string) {
    const [rowNumber, seatNumber] = seatId.split("-");
    const updatedSeats = seats.map((row: Row) => {
      if (row.number != rowNumber) return row;
      else {
        const updatedRowSeats = row.seats.map((seat: Seat) => {
          if (seat.number != +seatNumber) return seat;
          else {
            seat.status = (seat.status == 1) ? 3 : 1;
            return seat;
          }
        });
        row.seats = updatedRowSeats;
        return row;
      }
    });
    setSeats(updatedSeats);
  }

  useEffect(() => {
    const seatsConfigJson = processSeatConfig(state.config);
    console.log(seatsConfigJson);
    setSeats(seatsConfigJson.rows);
  }, []);

  return (

    <HomeLayout>
      Config 
      {seats.length}
      <div className="flex flex-col items-center justify-center p-16">
        {
          seats.map((row: Row) => {
            return (
              <div key={row.number} className="flex items-center justify-center gap-8" >
                <div> {row.number} </div>
                <div className="flex gap-2 my-2 mx-1" >
                  {row.seats.map((seat: Seat) => {
                    return (
                      seat.status == 0 ? (
                      <div className="h-[2rem] w-[2rem]"></div>
                      ):(
                      <div
                        key={`${row.number}-${seat.number}`}    
                        onClick={()=>processSeatSelection(`${row.number}-${seat.number}`)}
                        className={`${processSeatColor(seat)} px-3 py-1 h-[2rem] w-[2rem] flex items-center justify-center cursor-pointer  `} >
                        {seat.number}
                      </div>
                      )
                    );
                  })}
                </div>

              </div>
            )
          })
        }
      </div>
    </HomeLayout>
  );
}

export default SeatConfig;