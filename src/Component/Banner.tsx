type Banner = {
  Image: string;
};

function HomeBanner({ Image }: Banner) {
  return (
    <div className=" flex items-center justify-center my-4">
      <img src={Image} />
    </div>
  );
}
export default HomeBanner;
