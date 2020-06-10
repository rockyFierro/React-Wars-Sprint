import React from 'react'


/*
TODO:
-pass a destructured variable through as props ({ variable })
-loop through data with map
-pass a key on anything iterable....iterating

*/
export default function PokemonList({ pokemon }) {
    return (
        <div>
            {
                pokemon.map((el,index) => (
                    <>
                        <div key={el}>{el}</div>
                    
                        <img key={index} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
                        alt={el}/>
                        {console.log(pokemon)}
                    </>
                ))}
        </div>
    )
}
