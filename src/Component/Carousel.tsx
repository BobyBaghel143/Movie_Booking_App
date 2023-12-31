import CarouselImage1 from "../Assets/c1.jpg";
import CarouselImage2 from "../Assets/c2.jpg";
import CarouselImage3 from "../Assets/c3.png";
import CarouselImage4 from "../Assets/c4.jpg";

function HomeCarousel() {
  return (
    <div className="carousel w-full h-[150px] my-3 rounded-md lg:h-[400px]">
      <div id="slide1" className="carousel-item relative  w-full ">
        <div className="flex items-center justify-center carousel-item  w-full ">
          <img src={CarouselImage1} className="w-[93vw]" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle"> ❮ </a>
          <a href="#slide2" className="btn btn-circle"> ❯ </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <div className="flex items-center justify-center carousel-item w-full ">
          <img src={CarouselImage2} className=" w-[93vw]" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle"> ❮ </a>
          <a href="#slide3" className="btn btn-circle"> ❯ </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <div className="flex items-center justify-center carousel-item w-full  ">
          <img src={CarouselImage3} className=" w-[93vw] " />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle"> ❮ </a>
          <a href="#slide4" className="btn btn-circle"> ❯ </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <div className="flex items-center justify-center carousel-item w-full  ">
          <img src={CarouselImage4} className=" w-[93vw] " />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle"> ❮ </a>
          <a href="#slide1" className="btn btn-circle"> ❯ </a>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
