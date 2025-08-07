"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Bungee } from "next/font/google";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const bungee = Bungee({
  weight: "400",
  display: "auto",
});

export const typeColors = {
  normal: "from-gray-400/30",
  fire: "from-red-500/30",
  water: "from-blue-500",
  electric: "from-yellow-400",
  grass: "from-green-500",
  ice: "from-cyan-500",
  fighting: "from-orange-700",
  poison: "from-purple-500",
  ground: "from-amber-800",
  flying: "from-sky-400",
  psychic: "from-pink-500",
  bug: "from-lime-500",
  rock: "from-yellow-700",
  ghost: "from-indigo-500",
  dragon: "from-indigo-700",
  dark: "from-gray-800",
  steel: "from-gray-500",
  fairy: "from-pink-400",
};

const PokemonDetail = ({ params }) => {
  const { id } = params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        console.error("Error fetching Pokémon:", err);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // ✅ Get the first type's color
  const mainType = pokemon.types[0].type.name;
  const typeClass = typeColors[mainType] || "bg-gray-500";

  return (
    <div className="relative min-h-screen bg-cover bg-[url('/images/spotlight1.png')] flex flex-col py-10 gap-20 ">
      <Link href="/" className="items-center ml-5 flex gap-2">
        <FaArrowLeftLong className="text-3xl text-white" />
        <h2 className={`text-2xl ${bungee.className}`}>Back</h2>
      </Link>

    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-50 justify-between">
        <div> </div>
        <div className="flex flex-col item-center justify-center ml-30">
          <h1
            className={`text-3xl flex  items-center justify-center font-bold capitalize ${bungee.className}`}
          >
            {pokemon.name}
          </h1>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width={300}
            height={400}
          />
        </div>
        <div className="mt-4 flex flex-col gap-10">
          <div>
            <p className={`${bungee.className}`}>Type</p>
            <ul className="flex gap-4 ">
              {pokemon.types.map((typeObj, index) => (
                <li
                  key={index}
                  className={`capitalize px-5 py-2 bg-gradient-to-t ${typeClass} via-slate-700/30 to-slate-950/30 rounded-full text-2xl font-semibold text-white ${
                    typeColors[typeObj.type.name]
                  }`}
                >
                  {typeObj.type.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={`${bungee.className}`}>Abilities</p>
            <ul className="flex">
              {pokemon.abilities.map((ability, index) => (
                <li
                  key={index}
                  className="capitalize px-5 py-2 bg-gradient-to-t from-blue-500 via-slate-700/30 to-slate-950/30 rounded-full text-2xl font-semibold text-white"
                >
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/images/Pokeballopen.png"
          alt="pokeballopen"
          width={250}
          height={250}
          className="rotate-260"
        />
      </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
