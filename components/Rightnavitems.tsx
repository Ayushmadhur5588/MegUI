import { Social } from "@/constants/constant";
import Link from "@/node_modules/next/link";

const Rightnavitems = () => {
  return (
    <div className="lg:flex hidden gap-4">
      <div className="pr-5 p-2">
        {Social.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="hover:text-gray-900 text-gray-500 px-4"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <input
        placeholder="Search"
        className="p-2 border border-gray-500 rounded-lg"
      />
    </div>
  );
};

export default Rightnavitems;
