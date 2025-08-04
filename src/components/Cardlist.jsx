"use client";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";

const Cardlist = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // to stop fetching when no more data

  // Fetch Pokémon from API
  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
      );
      const data = await res.json();

      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        const newList = [...pokemonList, ...data.results];
        setPokemonList(newList);
        setFilteredPokemon(
          newList.filter((p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setOffset((prev) => prev + 20);
      }
    } catch (err) {
      console.error("Failed to fetch Pokémon", err);
    }
    setLoading(false);
  };

  // Initial fetch
  useEffect(() => {
    fetchPokemon();
  }, []);

  // Filter Pokémon on search change
  useEffect(() => {
    const filtered = pokemonList.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, pokemonList]);

  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Search Form */}
      <form className="max-w-md mx-auto p-4" onSubmit={handleSearch}>
        <div className="flex w-80 items-center justify-center relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Pokémon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      {/* Pokémon Cards */}
      <div className="grid lg:grid-cols-4 gap-8 md:m-10">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((result, index) => (
            <Cards result={result} index={index} key={result.name} />
          ))
        ) : (
          <p className="text-center text-gray-500">No Pokémon found.</p>
        )}
      </div>

      {/* Load More Button */}
      {hasMore && !searchTerm && (
        <div className="text-center my-5">
          <button
            onClick={fetchPokemon}
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded hover:opacity-90"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cardlist;
