type Banner = {
  Image: string;
};

function HomeBanner({ Image }: Banner) {
  return (
    <div className="h-20 w-full mt-4">
      <img src={Image} className="h-full w-full rounded-lg " />
    </div>
  );
}
export default HomeBanner;
