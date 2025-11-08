import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
          <div className="h-[89px]"></div>
      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
