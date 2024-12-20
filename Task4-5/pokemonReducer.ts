import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  REMOVE_POKEMON,
} from "../actions/pokemonActions";

const initialState = {
  list: [] as string[],
  loading: false,
  error: null as string | null,
};

export type PokemonState = typeof initialState;

const pokemonReducer = (state = initialState, action: any): PokemonState => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return { ...state, loading: true, error: null };
    case FETCH_POKEMON_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case FETCH_POKEMON_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case REMOVE_POKEMON:
      return {
        ...state,
        list: state.list.filter((pokemon) => pokemon !== action.payload),
      };
    default:
      return state;
  }
};

export default pokemonReducer;
