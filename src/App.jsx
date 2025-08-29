import { Outlet, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; 
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
       <div className="pt-16"> 
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

    </div>
    </div>
  );
}



