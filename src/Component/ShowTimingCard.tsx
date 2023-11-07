type Props = {
    timing: string,
    format: string,
    price:string,
}

function ShowTimingCard({timing, format, price}:Props) {
    return (
        <div className=" w-32 px-2 py-1 mx-2 my-2 group relative flex flex-col items-center justify-center border border-black text-sm text-green-400 rounded-lg  cursor-pointer " >
            <div>{timing} PM </div>
            <div>{format}</div>
            {/* <div>Recliners</div> */}
            
            <div className="bg-white top-[100%] left-[10%] text-black group-hover:block  shadow-lg py-2 px-4 z-10 absolute hidden rounded-md" >
                <div className="flex flex-col items-center justify-center ">
                    {/* <div> Rs. 200 </div> */}
                    <div> {price} </div>
                    <div className="text-green-500" > Available </div>
                </div>
            </div>
      </div>
    );
}

export default ShowTimingCard;



/**
 * .parent:hover .child{
 *  display:block
 * }
 */