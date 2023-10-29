import { AiFillStar } from 'react-icons/ai';

type CartProps = {
    MovieImage: string;
}

function HomeMovieCart({MovieImage}:CartProps) {
    return (
        <div className=' flex flex-col items-center justify-center  h-[450px] w-[265px] lg:h-[416px] lg:w-[242px]'>
            <img src={MovieImage} className='h-[95%] w-full rounded-tl-lg rounded-tr-lg ' />
            <div className='bg-black w-full text-white rounded-bl-lg rounded-br-lg py-1'>
                  <AiFillStar  className="inline text-2xl text-red-500 mx-2 " />
                  <span> 8/10 </span>
                <span> 52.5k Votes </span>
            </div>
        </div>
    );
}

export default HomeMovieCart;