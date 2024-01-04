import { PokemonGrid, PokemonsResponse, SinglePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SinglePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Questo non deve succedere");

  return pokemons;
};
// mandatory async await in the component
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        List of Pokemon &apos;s <small>Static</small>
        <PokemonGrid pokemons={pokemons} />
      </span>
    </div>
  );
}
