"use client";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { Bungee } from "next/font/google";
import Cards from "../../components/Cards";
import { toast } from "react-toastify";

const bungee = Bungee({
  weight: "400",
  display: "auto",
});

const Page = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const removeFromFavorites = (name) => {
    const updated = favorites.filter((card) => card.name !== name);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    toast("Removed from Collection!");
  };

  return (
    <div className="bg-gradient-to-t from-blue-500 via-slate-700 to-slate-950 min-h-screen">
      <header className="justify-between flex p-10 gap-3">
        <Link href="/" className="items-center flex gap-2">
          <FaArrowLeftLong className="text-3xl text-white" />
          <h2 className={`text-2xl ${bungee.className}`}>Back</h2>
        </Link>
        <h2 className={`text-5xl ${bungee.className}`}>Collections</h2>
        <div></div>
      </header>

      <div className="px-10 pb-20">
        {favorites.length === 0 ? (
          <p className="text-white text-lg mt-10">
            No cards in your collection yet.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
            {favorites.map((card, index) => (
              <Cards
                key={card.name}
                result={card}
                index={index}
                mode="collection"
                onRemove={removeFromFavorites}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
