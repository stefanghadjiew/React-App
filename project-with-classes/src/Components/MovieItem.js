import React from "react"

const MovieItem = ({name,desc}) => {
    
    return (
        <div className="container">
            <h4>{name}</h4>
            <h4>{desc}</h4>
        </div>
    )
}


export default MovieItem;