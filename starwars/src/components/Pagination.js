import React from 'react'
//import "../App"

export default function Pagination({gotoNextPage, gotoLastPage}) {
    return (
        <div>
            <button onClick={gotoLastPage}>Previous</button>
            <button onClick={gotoNextPage}>Next</button>
        </div>
    )
}
