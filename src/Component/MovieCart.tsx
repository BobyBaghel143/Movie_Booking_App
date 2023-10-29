import { AiFillStar } from 'react-icons/ai';

type CartProps = {
    MovieImage: string;
}

function HomeMovieCart({MovieImage}:CartProps) {
    return (
        <div className=' flex flex-col items-center justify-center  h-[450px] w-[265px] '>
            <img src={MovieImage} className='h-[95%] w-full rounded-tl-lg rounded-tr-lg ' />
            <div className='flex items-center justify-start text-xl bg-black w-full text-white rounded-bl-lg rounded-br-lg gap-2'>
                <div className='flex items-center justify-start mr-3 gap-2'>  
                  <AiFillStar  className="inline text-3xl text-red-500 ml-3 " />
                  <span> 8/10 </span>
                </div>
                <span> 52.5k Votes </span>
            </div>
        </div>
    );
}

export default HomeMovieCart;