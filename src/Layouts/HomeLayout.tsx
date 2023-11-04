import HomeFooter from "../Component/Footer";
import Navbar from "../Component/Navbar";
import ReactNode from "../Types/ReactNode";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <HomeFooter />
    </>
  );
}

export default HomeLayout;
