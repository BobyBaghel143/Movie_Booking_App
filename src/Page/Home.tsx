import Poster1 from "../Assets/posterImage.jpg";
import Poster2 from "../Assets/posterImage1.png";
import Poster5 from "../Assets/posterImage2.png";
import Poster3 from "../Assets/posterImage3.png";
import Poster4 from "../Assets/posterImage4.png";
import HomeCarousel from "../Component/Carousel";
import HomeMovieCart from "../Component/MovieCart";
import Navbar from "../Component/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <div className="flex items-center justify-center gap-6">
        <HomeMovieCart MovieImage={Poster1} />
        <HomeMovieCart MovieImage={Poster3} />
        <HomeMovieCart MovieImage={Poster4} />
        <HomeMovieCart MovieImage={Poster2} />
        <HomeMovieCart MovieImage={Poster5} />
      </div>
    </div>
  );
}

export default Home;
