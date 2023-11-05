type Props = {
    text: string;
}

function Seats({ text }: Props) {
    return (
        <div className="flex flex-row items-center  gap-6" >
        <div>{text}</div>
        <div className="flex flex-row items-center justify-center gap-2" >
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >1</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >2</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >3</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >4</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >5</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >6</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >7</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >8</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >9</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >10</div>
          <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-sm border border-green-400  text-green-400 hover:text-white  hover:bg-green-500  " >11</div>
        </div>
        </div>


    );
}

export default Seats;