"use client";

import Link from "next/link";

import { Icons } from "./Icons";

const Leftnavitems = () => {
  return (
    <div className="flex gap-4">
      <Logo />
      <div className="p-2">
        Components
      </div>
      <div className="p-2">
        Pricing
      </div>
    </div>
  );
};



export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Icons.logo className="icon-class w-2" />

      <h2 className="text-base md:text-lg font-bold">Meg UI</h2>
    </Link>
  );
}

export default Leftnavitems;