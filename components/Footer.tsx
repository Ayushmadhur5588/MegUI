import Link from "@/node_modules/next/link";
import { Pages, Social, Legal } from "@/constants/constant";
import { Logo } from "./Leftnavitems";

const Footer = () => {
  return (
    <div className="h-72 px-10 pt-10 border-t border-gray-300">
    <div className="grid lg:grid-cols-4 md:grid-cols-4">
      <div className="col-span-2  pb-10">
        {" "}
        <Logo />
      </div>

      <div className="col-span-1 pb-10">
        {Pages.map((item) => (
          <Link key={item.id} href={item.href}>
            <div className="hover:text-blue-500 hover:underline my-2 text-gray-600">{item.name}</div>
          </Link>
        ))}
      </div>
      <div className="col-span-1 pb-10">
        {Social.map((item) => (
          <Link key={item.id} href={item.href}>
            <div className="hover:text-blue-500 hover:underline my-2 pb-1 text-gray-600"> {item.name}</div>
          </Link>
        ))}
      </div>
    </div>
    <div className="mt-8 border-t border-gray-300 mx-10 py-10">
        <div className="sm:flex sm:justify-between">
          <p className="text-sm text-gray-500 pb-5">
            Copyright &copy; 2025 MegUI All rights reserved.
          </p>

          <p className="text-sm text-gray-500 pb-5">Designed with ❤️ by Ayush</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
