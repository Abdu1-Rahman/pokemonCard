'use client'
import React, { useState } from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from "./Button";
import { MdCatchingPokemon } from "react-icons/md";
import Link from 'next/link'

const Cards = ({ result, index }) => {
  const colorVariants = [
    "from-green-500",
    "from-blue-500",
    "from-pink-500",
    "from-yellow-500",
    "from-purple-500",
  ];

  const [catchpokemon, setCatchPokemon] = useState(false);
  const handleClick = () => {
    setCatchPokemon(!catchpokemon);
  };

  const backgroundColor =
    colorVariants[Math.floor(index / 4) % colorVariants.length];

  const getPokemonId = (url) => {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

  const pokemonId = getPokemonId(result.url);


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
              catchpokemon ? "text-red-500" : "text-white/15"
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

        <Link href="/details" className="z-1 flex justify-center"><Button  className={"absolute top-50 w-38"} content={"Main Details"} /></Link>

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
