type Banner = {
  Image: string;
};

function HomeBanner({ Image }: Banner) {
  return (
    <div className="h-12  w-full my-4 lg:h-20 ">
      <img src={Image} className="h-full w-full rounded-lg " />
    </div>
  );
}
export default HomeBanner;
