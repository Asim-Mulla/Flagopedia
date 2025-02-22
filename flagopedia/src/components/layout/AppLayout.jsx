import { Outlet } from "react-router-dom";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";
import "./AppLayout.css";

export const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
