import { IoMdHeart } from "react-icons/io";
import {IoFastFoodOutline} from "react-icons/io5"
import { TfiTicket } from "react-icons/tfi";

type Prop = {
    title:string
}

function TheatreNameCard({title}:Prop) {
  return (
    <div className="flex gap-4">
      <div className="h-[30px] w-[30px] text-3xl  hover:text-red-500 ">
        <IoMdHeart />
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <div className="text-semibold"> {title} </div>
        <div className="flex gap-6">
          <div className="text-green-500 flex items-center gap-1">
            <div className="text-2xl"> <TfiTicket /> </div>
            <div>M-Ticket</div>
          </div>
          <div className="text-orange-500 flex items-center gap-2 ">
            <div className="text-2xl"> <IoFastFoodOutline /> </div>
            <div>Food & Beverage</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheatreNameCard;
