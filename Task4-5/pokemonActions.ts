
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const REMOVE_POKEMON = "REMOVE_POKEMON";

export const fetchPokemonStart = () => ({ type: FETCH_POKEMON_START });
export const fetchPokemonSuccess = (pokemonList: string[]) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemonList,
});
export const fetchPokemonFailure = (error: string) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
});
export const removePokemon = (pokemon: string) => ({
  type: REMOVE_POKEMON,
  payload: pokemon,
});
