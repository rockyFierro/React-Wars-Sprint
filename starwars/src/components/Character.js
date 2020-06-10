import React from 'react'
import {  Card, CardImg, CardHeader, CardBody,CardDeck,
    Col,Row, Container } from 'reactstrap'


/*
TODO:
-pass a destructured variable through as props ({ variable })
-loop through data with map
-pass a key on anything iterable....iterating

*/
export default function PokemonList({ pokemon }) {
    return (
        <Container>
            {
                pokemon.map((el,index) => (
                    <Row sm="8">
                       <Col sm>     
                            <Card className="text-center" >
                                <CardBody>
                                <CardHeader key={el}><h1>{el}</h1></CardHeader>
                                <Row sm="3">
                                <Col xs="5">
                                <CardImg top key={index} src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${1 + index}.png`}
                                alt={el}/></Col>
                                <Col xs="5">
                                <CardImg top key={index} src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${1 + index}.png`}
                                alt={el}/></Col>                                                      
                                <Col xs="5">
                                <CardImg top key={index} src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${1 + index}.png`}
                                alt={el}/>
                                </Col>
                                </Row>
                                </CardBody>
                                {console.log(pokemon)}
                            </Card>
                        </Col>
                    </Row>
                ))
            }
            
        </Container>
    )
}
