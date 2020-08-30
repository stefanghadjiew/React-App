import React from "react"

const MovieItem = ({name,desc,movieId,userId,token,removeMoviesFromState}) => {
    const deleteMovie = async () => {
       const url = `/api/users/${userId}/movies/${movieId}`
        try {
            await fetch(url,{
                method:"DELETE",
                headers: {
                    "Content-type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
        })
            .then(res=>res.json())
            .then(deletedMovie => removeMoviesFromState(deletedMovie._id))
        }catch(err){
            throw err;
        }
    }

    return (
        <div className="movie-container">
            <h4>{name} - {desc}</h4>
            <button className="btn btn-danger" onClick={deleteMovie}>Remove</button>
        </div>
    )
}


export default MovieItem;