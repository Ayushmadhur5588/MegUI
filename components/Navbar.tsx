import Leftnavitems  from "./Leftnavitems"
import Rightnavitems from "./Rightnavitems";

export default function Navbar() {
  return (
  <nav className="py-4 w-full h-16 border-b border-gray-300 z-50 top-0 sticky lg:px-6 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
   <div className="flex justify-between"> <Leftnavitems />
    <Rightnavitems /></div>
   
  </nav>
  );




