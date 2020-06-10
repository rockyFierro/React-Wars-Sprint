import React, { useState } from 'react';
import PokemonList from "./components/PokemonList";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  /*
  personal naming conventions----------------------------------------------------.
  |  prefix'd:                                                                   |\
  |  im = immutable                                                              |\
  |  mut= mutable                                                                |\
  '------------------------------------------------------------------------------'\ 
    \  \     \\\\   \\\\   \\\\             \      \\    \\ \ \ \ \\\\    \ \\  \\\
  
  TODO:
  -delete bloat code
  -comps: pokemon list
          pagaentation
  -make new files for components
  -gonne use state, import apropriate hooks
  -states: a pokemon list, the next list
  -import'ant to remember: make sure to import other components as they are needed
  -

  */


  const [ imPokemon,mutPokemon ] = useState(['pikachu','farfetched']);//notes: returns two variables inside of an array.[immutable/mutable]=useState(defaultState)
  return (
    <PokemonList pokemon={imPokemon}/>
  );
}

export default App;
