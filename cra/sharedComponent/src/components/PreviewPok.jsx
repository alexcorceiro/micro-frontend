// host/src/PreviewPok.jsx
import React, { useEffect, useState } from 'react';

export default function PreviewPok() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Variable pour vérifier si le composant est monté

    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await response.json();
        if (isMounted) { 
          setPokemon(data);
          console.log('pokemon', JSON.stringify(data, null, 2))
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) { 
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Nettoyage : définir isMounted sur false pour éviter les mises à jour d'état
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Bienvenue à l'Association Sportive des Joueurs de Pokémon</h1>
      <h2>Nos jeux autoriser :</h2>
      <ul>
        {pokemon.game_indices.map((gameIndex, index) => (
          <li key={index}>
            {gameIndex.version.name} 
          </li>
        ))}
      </ul>
    </div>
  );
}
