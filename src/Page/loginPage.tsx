

function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center bg-yellow-100 h-full w-full " >
            <div className="navbar bg-gray-300">
              <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Navbar</a>
              </div>
              <div className="flex itemx-center justify-center gap-4">
               <button className="btn  btn-secondary"> Log out </button>
               <button className="btn  bg-blue-500 text-white "> Login </button>
              </div>
            </div>
            <div className=" flex items-center justify-center border border-green-500 h-[32rem] w-[60rem] rounded-md my-7 bg-fuchsia-200 " >
              <div className="flex flex-col items-center justify-center gap-6 border border-red-500  h-[70%] w-[80%] rounded-md bg-sky-200 " >
                  <div className="flex items-center justify-around w-full " >
                      <div>Theatre</div>
                      <select className="select select-primary w-full max-w-xs">
                        <option disabled selected>Select theatre</option>
                        <option>Shiela Theater</option>
                        <option>INOX Nehru Place</option>
                        <option>PVR Priya Vasant</option>
                        <option>Meghdoot Theatre</option>
                        <option>M2K Cinemas Rohini</option>
                        <option>Batra Reels Cinemasr</option>
                      </select>
                  </div>
                  <div className="flex items-center justify-around w-full" >
                      <div>Movies</div>
                      <select className="select select-primary w-full max-w-xs">
                        <option disabled selected>Select Movie</option>
                        <option>Rocky Aur Rani Kii Prem Kahaani</option>
                        <option>12th Fail</option>
                        <option>Tiger 3</option>
                        <option>Leo</option>
                        <option>Dilwale dulhaniya le jayenge</option>
                        <option>Sainik</option>
                        <option>Gadar 2</option>
                      </select>
                  </div>
                  <button className="btn  bg-sky-400 text-xl text-white w-[73%] mt-[2rem] hover:bg-green-400 ">Add movie to theatre</button>
              </div>
            </div>
        </div>
    );
}
export default LoginPage;
