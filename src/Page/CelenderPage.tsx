
function CelenderPage() {
    return (
        <div className="flex items-center justify-center h-full w-full" >
            <div className="flex flex-col items-center justify-between h-[23rem] w-[70%] mt-12 bg-blue-300 rounded-[2rem] p-6  "> 
                <div className="bg-white h-12 w-full rounded-md" >
                    <input  className="w-full h-full rounded-md shadow-md cursor-pointer  pl-[1rem] " placeholder="Add show for movie" />
                </div>
                <div className=" text-lg rounded-md  " >
                    <input  type="datetime-local" />
                </div>
                <div className="flex flex-col h-400px w-full items-center" >
                  <button className="btn w-[80%] text-lg bg-green-400 text-white cursor-pointer ">Add new show</button>
                </div>
            </div>
        </div>
    );
}

export default CelenderPage;