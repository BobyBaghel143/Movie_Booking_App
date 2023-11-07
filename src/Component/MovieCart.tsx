import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


type HomeMovieCartProps = {
    movieImage: string,
    movieId: string,
    movieName:string,
}

function HomeMovieCart({ movieImage, movieId, movieName }: HomeMovieCartProps) {
    
    const navigate = useNavigate();
    function navigateToMovieListing() {
        navigate("/movie/listing", { state: { movieId, movieName } });
    }

    return (
        <div onClick={navigateToMovieListing} className=' flex flex-col items-center justify-center  h-[450px] w-[265px] lg:h-[416px] lg:w-[242px]'>
            <img src={movieImage} className='h-[95%] w-full rounded-tl-lg rounded-tr-lg ' />
            <div className='bg-black w-full text-white rounded-bl-lg rounded-br-lg py-1'>
                  <AiFillStar  className="inline text-2xl text-red-500 mx-2 " />
                  <span> 8/10 </span>
                <span> 52.5k Votes </span>
            </div>
        </div>
    );
}

export default HomeMovieCart;