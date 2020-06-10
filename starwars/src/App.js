import React, { useState, useEffect } from 'react';
import PokemonList from "./components/Character";
import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  /*
  personal naming conventions----------------------------------------------------.
    im = immutable                                                              
    mut= mutable                                                                
    res = result



  TODO:
  -delete bloat code
  -comps: pokemon list
          pagaentation
  -make new files for components  
  -gonne use state, import apropriate hooks
  -states: a pokemon list, the next list
  -import'ant to remember: make sure to import other components as they are needed
  -use axios to get the pokemon
  -console log results
  -return results *data.results.map(subject of results array value => name of array value) dont forget to iterrate through the results. CHECK FOR I KNOW IM GOING TO FORGET ERROR MESSAGE
  -worry about the axios portion first and build outward, once you see the information//effect you want go ahead and wrap it up in an useEffect hook
  */


  const [ pokemon,setPokemon ] = useState([]);//notes: returns two variables inside of an array.[immutable/mutable]=useState(defaultState)
  const [ currentPageURL, setCurrentPageURL ] = useState("https://pokeapi.co/api/v2/pokemon?limit=5");
  const [ nextPageURL, setNextPageURL ] = useState();
  const [ prevPageURL, setPrevPageURL ] = useState();
  const [ loading, setLoading ] = useState(true);




  useEffect(()=>{
    setLoading(true)
    let cancel
  axios
    .get(currentPageURL,{ cancelToken: new axios.CancelToken( c => cancel = c)})
    .then((res) => {
      setLoading(false)
      setPokemon(res.data.results.map((el, index) => `${el.name} ${el.url}`))
      console.log(res)
      setNextPageURL(res.data.next);
      setPrevPageURL(res.data.previous);
    }); 

    return () => cancel()

 },[currentPageURL])
  // axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
  //    mutPokemon(res.data.results.map((el, index) => `${el.name} ${el.url}   `))
  //    }); 
if(loading) return "Gathering berries, Loading Pokedex, Organizing Pokeballs..."
  return (
    <PokemonList pokemon={pokemon}/>//render ( goes straight to the index.html in the root div. , alike placesng textures over objects. )
  );
}

export default App;
