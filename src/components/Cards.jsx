'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from "./Button";
import { MdCatchingPokemon } from "react-icons/md";
import Link from 'next/link';
import { toast } from 'react-toastify';

const Cards = ({ result, index, mode = "default", onRemove }) => {
  const colorVariants = [
    "from-green-500",
    "from-blue-500",
    "from-pink-500",
    "from-yellow-500",
    "from-purple-500",
  ];

  const [isFavorite, setIsFavorite] = useState(false);

  // Get Pokemon ID from the URL
  const getPokemonId = (url) => {
  if (!url) return null;
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
};

// Fallback to existing ID if available
const pokemonId = result.id || getPokemonId(result.url);

  // Check if this Pokémon is already in favorites on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyFav = favorites.some((poke) => poke.name === result.name);
    setIsFavorite(alreadyFav);
  }, [result.name]);

  const handleClick = () => {
     if (mode === "collection" && onRemove) {
      onRemove(result.name);
      return;
    }
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.some((poke) => poke.name === result.name)) {
      favorites.push({
        name: result.name,
        id: pokemonId,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
      toast("Saved to Collection!");
    } else {
      // Optional: Remove from favorites if clicked again
      const updated = favorites.filter((poke) => poke.name !== result.name);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
      toast("Removed from Collection!")
    }
  };

  const backgroundColor =
    colorVariants[Math.floor(index / 4) % colorVariants.length];

  return (
    <div className="flex hover:scale-105 transition duration-500 items-center justify-center">
      <div
        className={`relative flex items-center justify-center border-1 h-80 w-80 rounded-3xl bg-gradient-to-t ${backgroundColor} via-slate-700 to-slate-950`}
      >
        <Image
          className="z-1 absolute bottom-40"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
          width={190}
          height={190}
          alt="pokimage"
        />

         <button onClick={handleClick} className="z-1 cursor-pointer">
    <MdCatchingPokemon
      className={`absolute top-2 right-3 text-3xl ${
        (mode === "collection" || isFavorite) ? "text-red-500" : "text-white/15"
      }`}
    />
  </button>

        <div className="flex absolute gap-35 top-40 justify-center items-center">
          <GoDotFill />
          <p className="absolute text-2xl font-semibold capitalize">
            {result.name}
          </p>
          <GoDotFill />
        </div>

        <Link href={`${pokemonId}`} className="z-1 flex justify-center">
          <Button className={"absolute top-50 w-38"} content={"Main Details"} />
        </Link>

        <Image
          className="absolute top-5 opacity-10"
          src="/images/pokeball.png"
          alt="pokeball"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default Cards;
