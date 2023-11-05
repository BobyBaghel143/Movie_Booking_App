import { BsSearch } from "react-icons/bs";
import { RxTextAlignJustify } from "react-icons/rx";

import dummy from "../Assets/dummy.jpg";
import logo1 from "../assets/logo.png";

function Navbar() {
  return (
    <div className=" bg-[#333545]">
      <div className="navbar bg-[#333545] w-[80vw] mx-auto ">
        <div className="flex-1">
          <div className='h-16 w-36 mr-2' >
            <img className="h-full w-full" src={logo1} />
          </div>
          <div className="form-control  w-[164px] flex flex-row items-center md:w-2/5  lg:w-3/5 ">
            <div className='h-[2.5rem] w-[2rem] flex items-center justify-center  bg-white rounded-tl-md rounded-bl-md' >
              <BsSearch />
            </div>
            <div className='form-control lg:w-4/5'>
              <input type="text" placeholder="Search" className=" h-[2.5rem]  w-full rounded-tr-md rounded-br-md "/>
            </div>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={dummy} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 bg-[#333545] text-white ">
              <li> <a className="justify-between hover:text-yellow-400"> Profile <span className="badge">New</span></a> </li>
              <li> <a className='hover:text-yellow-400' >Settings</a> </li>
              <li> <a className='hover:text-yellow-400' >Logout</a> </li>
            </ul>
          </div>

          <div className="flex items-center gap-3" >
            <div className="dropdown dropdown-bottom dropdown-end bg-transparent">
              <label tabIndex={0} className="btn m-1 px-3 py-1 ">Click</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
            <button className="text-white bg-red-500  px-3 py-1 rounded-md text-sm font-semibold ">Sign In</button>
            <div className="text-white text-3xl  "> <RxTextAlignJustify /> </div>
          </div>
        </div>
      </div>

      <div className="text-white bg-[#22232d] flex  ">
        <div className=" flex items-center justify-between w-[80vw]  mx-auto">
          <div className="flex items-center gap-4 ">
            <div>Movie</div>
            <div>Event</div>
            <div>Stream</div>
            <div>Sports</div>
            <div>Activities</div>
            <div>Buzz</div>
          </div>
          <div className="flex items-center gap-4">
            <div>ListYourShow</div>
            <div>Corporates</div>
            <div>Offers</div>
            <div>Gift_Cards</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
