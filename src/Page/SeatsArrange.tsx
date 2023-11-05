import Seats from "../Component/Seats";

function SeatsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col gap-8">
            <div>GOLD-Rs. 280.00</div>
            <div className="flex flex-col items-center justify-center gap-2">
               <Seats text="A" />
               <Seats text="B" />
               <Seats text="C" />
               <Seats text="D" />
               <Seats text="E" />
               <Seats text="F" />
               <Seats text="G" />
               <Seats text="H" />
            </div>
        </div>
    </div>
  );
}

export default SeatsPage;
