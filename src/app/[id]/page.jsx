"use client";
import Image from 'next/image'
import React, { useEffect, useState } from "react";

const PokemonDetail = ({ params }) => {
  const { id } = params; // ✅ ID from URL
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

  return (
    <div className="min-h-screen bg-gradient-to-t flex items-center justify-center from-blue-500 via-slate-700 to-slate-950">
      <div className="shadow-2xl bg-gradient-to-t m-30 from-green-500 via-slate-750 to-slate-950 rounded-2xl h-120 w-250 flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
        <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={300}
                  height={400}
                />
      </div>
    </div>
  );
};

export default PokemonDetail;
