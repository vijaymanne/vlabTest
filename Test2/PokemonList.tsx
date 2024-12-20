import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./UI/List";

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList: React.FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        const names = response.data.results.map((pokemon: Pokemon) => pokemon.name);
        setPokemonNames(names);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Pokémon data.");
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Pokémon List</h1>
      {/* Pass the Pokémon names to the List component */}
      <List items={pokemonNames} />
    </div>
  );
};

export default PokemonList;
