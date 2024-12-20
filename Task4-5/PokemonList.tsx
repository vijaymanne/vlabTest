import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonStart, removePokemon } from "../store/actions/pokemonActions";
import { RootState } from "../store";
import List from "../ui/List";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonStart());
  }, [dispatch]);

  const handleRemove = (pokemon: string) => {
    dispatch(removePokemon(pokemon));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <List items={list} handleRemove={handleRemove} />
    </div>
  );
};

export default PokemonList;
