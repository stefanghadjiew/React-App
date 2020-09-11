import React from "react"
import noImage from "../images/cine-defaut-1.jpg"

const MovieItem = ({name,desc,movieId,userId,token,removeMoviesFromState,movieImgUrl}) => {
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
             <img 
            src = {movieImgUrl || noImage}
            style = {{width:"150px",height:"100px"}}
            />
            <h4>{name} - {desc}</h4>
           
            <button className="btn btn-danger" onClick={deleteMovie}>Remove</button>
        </div>
    )
}


export default MovieItem;