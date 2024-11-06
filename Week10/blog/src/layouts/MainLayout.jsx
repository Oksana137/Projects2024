import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex flex-1 items-center p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
