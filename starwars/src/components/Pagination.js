import React from 'react'
import { Button,ButtonGroup,Card} from 'reactstrap'
//import "../App"

export default function Pagination({gotoNextPage, gotoLastPage}) {
    return (
        <Card>
        
        <ButtonGroup>
            <Button color="primary" onClick={gotoLastPage}>Previous</Button>
            <Button color="warning" onClick={gotoNextPage}>Next</Button>
        </ButtonGroup>
        
        </Card>
    )
}
