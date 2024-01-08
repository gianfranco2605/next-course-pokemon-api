import { PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Favorites",
  description: "All my Favorites",
};

// mandatory async await in the component
export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        List of Pokemon &apos;s{" "}
        <small className="text-red-500">Global State</small>
        <PokemonGrid pokemons={[]} />
      </span>
    </div>
  );
}
