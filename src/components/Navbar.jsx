import React from "react";
import Image from "next/image";
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed z-20 w-full bg-transparent flex items-center justify-between h-20 md:h-30 px-4">
      <div className="absolute left-0"></div>

      <div className="flex justify-center w-full">
        <Image
          className="md:pt-2 h-20 w-50 md:w-[400] md:h-[150]"
          src="/images/Pokemonlogo.png"
          alt="Logo"
          width={250}
          height={250}
        />
      </div>

      <Link href="/collection" className="absolute top-4 right-4">
        <Image src={"/images/collection.png"} width={60} height={60} alt="collection" />
      </Link>
    </div>
  );
};

export default Navbar;
