import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POKEMON_START,
  fetchPokemonSuccess,
  fetchPokemonFailure,
} from "../actions/pokemonActions";

function* fetchPokemonSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    const pokemonList = response.data.results.map((pokemon: { name: string }) => pokemon.name);
    yield put(fetchPokemonSuccess(pokemonList));
  } catch (error: any) {
    yield put(fetchPokemonFailure("Failed to fetch Pokémon data."));
  }
}

export default function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMON_START, fetchPokemonSaga);
}
