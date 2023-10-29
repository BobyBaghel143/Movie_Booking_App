import { BsSearch } from 'react-icons/bs';

import dummy from '../Assets/dummy.jpg';
import logo from '../assets/logo.png';


function Navbar() {
  return (
    <div className=" bg-[#333545]">
      <div className="navbar bg-[#333545] w-[80vw] mx-auto ">
        <div className="flex-1">
          <div className='h-12 mr-2' >
            <img className=" h-[100%] w-36 " src={logo} />
          </div>
          <div className="form-control w-3/5 flex flex-row items-center  ">
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
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li> <a className="justify-between"> Profile <span className="badge">New</span></a> </li>
              <li> <a>Settings</a> </li>
              <li> <a>Logout</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Navbar;
