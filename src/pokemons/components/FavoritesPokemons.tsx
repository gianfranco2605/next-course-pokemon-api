"use client";
import { useState } from "react";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {
  //   convert the pokemons object in an array of the object values
  const favoritesPokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );

  const [pokemons, setPokemons] = useState(favoritesPokemons);

  return (
    <>
      {pokemons.length ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <IoHeartOutline className="text-red-500" size={100} />
      <span>No Favorites</span>
    </div>
  );
};

export default FavoritesPokemons;
