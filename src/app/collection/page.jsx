import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  weight:"400",
  display:"auto"
})

const page = () => {
  return (
    <div className="bg-gradient-to-t from-blue-500  via-slate-700 to-slate-950 min-h-screen">
      <header className="justify-between flex p-10 gap-3">
        <Link href="/" className=" items-center flex gap-2">
          <FaArrowLeftLong className="text-3xl text-white" />
          <h2 className={`text-2xl ${bungee.className}`}>Back</h2>
        </Link>
        <h2 className={`text-5xl  ${bungee.className}`}>Collections</h2>
        <div></div>
      </header>
    </div>
  );
};

export default page;
