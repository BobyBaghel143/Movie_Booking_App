import { useLocation, useNavigate } from "react-router-dom";

import axiosInstance from "../Config/AxiosInstance";
import HomeLayout from "../Layouts/HomeLayout";

function Bookings() {
  const { state } = useLocation();
  const navigate = useNavigate();

  async function makePayment() {
    const response = await axiosInstance.post("/mba/api/v1/payments", {
        showId: state.showId,
        bookingId: state.booking.data._id,
        amount: state.booking.data.totalCost,
      },
      {
        headers: {
          "x-access-token": import.meta.env.VITE_ACCESS_TOKEN,
        },
      }
    );
    if (response.data.success) {
      navigate("/");
    }
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[full] w-[full]  p-7 ">
        <div className="flex flex-col items-center justify-between h-[22rem] w-[36rem] shadow-2xl  p-6 rounded-lg text-xl ">
          <div className="flex  justify-between w-full">
            <div className="font-semibold" >Theatre </div> <div>{state.booking.data.theatreId.name}</div>
          </div>
          <div className="flex items-center  justify-between w-full ">
            <div className="font-semibold">Total Price </div> <div>{state.booking.data.totalCost}</div>
          </div>
          <div className="flex  justify-between w-full">
            <div className="font-semibold">Booking Id </div> <div>{state.booking.data._id}</div>
          </div>
          <div className="flex  justify-between  w-full">
            <div className="font-semibold">Show Id </div> <div>{state.showId}</div>
          </div>
          <div className="flex items-center justify-center w-full">
            <button onClick={makePayment} className=" bg-blue-500 px-5 py-1 rounded text-white font-semibold w-full hover:bg-blue-400 cursor-pointer text-xl"> Make Payment </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Bookings;
