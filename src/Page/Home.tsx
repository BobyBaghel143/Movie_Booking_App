import Banner from "../Assets/IccBanner.png";
import Poster1 from "../Assets/posterImage.jpg";
import Poster2 from "../Assets/posterImage1.png";
import Poster5 from "../Assets/posterImage2.png";
import Poster3 from "../Assets/posterImage3.png";
import Poster4 from "../Assets/posterImage4.png";
import HomeBanner from "../Component/Banner";
import HomeCarousel from "../Component/Carousel";
import HomeMovieCart from "../Component/MovieCart";
import Navbar from "../Component/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <HomeBanner Image={Banner} />
      <div className="text-2xl  font-bold text-black mt-6" >Recommended Movie</div>
      <div className="flex items-center justify-center gap-6 mt-2">
        <HomeMovieCart MovieImage={Poster1} />
        <HomeMovieCart MovieImage={Poster3} />
        <HomeMovieCart MovieImage={Poster4} />
        <HomeMovieCart MovieImage={Poster2} />
        <HomeMovieCart MovieImage={Poster5} />
      </div>
      <HomeBanner Image={Banner} />
    </div>
  );
}

export default Home;
