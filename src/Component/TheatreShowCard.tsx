import { BsInfoCircle } from "react-icons/bs";

import ShowTimingCard from "./ShowTimingCard";
import TheatreNameCard from "./TheatreNameCard";

function ThreateShowCard({num}:{num:number}) {
  return (
    <div className=" w-full border-md px-4 pt-4 pb-2">
      <div className="flex justify-start items-start" >
        <div className="min-w-[28%] max-w-[5%] ">
          <TheatreNameCard title="Batra Reels Cinema: New Friends" />
        </div>

        <div className="flex gap-2 min-w-[7%]  max-w-[10%] font-light ">
          <div className="text-2xl"> <BsInfoCircle />  </div>
          <div> INFO </div>
        </div>

        <div>
          <div className="flex items-center justify-start w-auto flex-wrap">
            {Array(num).fill(0).map(() => {
              return (
                <ShowTimingCard time="07:11" />
                
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
