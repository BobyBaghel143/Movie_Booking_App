function Signup() {
  return (
    <div className="flex items-center justify-center f-full w-full ">
      <div className="flex flex-col items-center justify-center h-[25rem] w-[25rem] border my-[5rem] gap-[3rem] bg-green-100 rounded-[2rem] ">
        <div className="bg-red-300 h-[4rem] w-[4rem] rounded-full "> </div>
        <div className="flex flex-col items-center justify-center gap-5" >
          <div className="flex gap-3 "> Name : <input type="text" className=" border " /> </div>
          <div className="flex gap-3 "> Email : <input type="email" className="border" /> </div>
          <div className="flex gap-3 "> Pass : <input type="password" className="border" /> </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
