import ThreateShowCard from "../Component/TheatreShowCard";
import HomeLayout from "../Layouts/HomeLayout";

function MovieListings() {
  return (
    <HomeLayout>
      <div className="min-h-[80vh] bg-slate-300 ">
        <div className="bg-[#333545] text-white" >
          <div className=" text-7xl pt-8 pb-6 w-[80vw] mx-auto font-light" >  12 Fail
            <div className=" flex gap-3 mt-6 " >
              <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent hover:bg-white hover:text-black " >Drama</button>
              <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent hover:bg-white hover:text-black " >Biography</button>
            </div>
          </div>
        </div>
         
        {/* Theatre listing */}
        <div className="bg-slate-300 mt-4 w-[100vw]" >
          <div className="w-[80vw] mx-auto rounded-xl bg-[#ffffff] " >
            <ThreateShowCard num={3} />
            <ThreateShowCard num={15} />
            <ThreateShowCard num={2} />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default MovieListings;
