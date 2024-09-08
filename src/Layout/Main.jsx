import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
