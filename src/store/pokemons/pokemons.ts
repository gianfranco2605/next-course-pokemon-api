import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SinglePokemon } from "@/pokemons";

/**
 * {
 *   '1': { id: 1, name: 'bulbasaur' },
 *   '2': { id: 2, name: 'pikachu' },
 *
 */

interface PokemonsState {
  [key: string]: SinglePokemon;
}

// Reading local storage
const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};

const initialState: PokemonsState = {
  // spread operator
  ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "2": { id: "2", name: "Ivysaur" },
  // "3": { id: "3", name: "Charmander" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SinglePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        //return;
        // bad practice to save in Local Storage in redux, just for practice
      } else {
        state[id] = pokemon;
      }
      // remember in local storage just strings (JSON.stringify)
      localStorage.setItem("favorite-pokemons", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
