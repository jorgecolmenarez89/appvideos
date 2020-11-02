import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import config from '../config';
import {Link} from "react-router-dom";
import * as actions from '../actions';

export default () =>{
    let { id } = useParams();
    const [movie, setMovie] = useState({});
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    
    useEffect(() =>{
        const fetchData = async () => {
            let result = await axios.get(`${config.base_url}movie/${id}`,{params: {api_key: config.apikey}})
            setMovie(result.data);
        };
        fetchData();
    }, [])

    const addFavorite = (e) => {
        dispatch(actions.addFavorite(movie))
        setTimeout(function(){ 
            console.log(favorites);
        }, 3000);
    }

    return (
        <section className="container no-nav">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6" 
                    style={{ display: 'flex', flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }} 
                >
                    {movie.original_title &&
                        <h2>{movie.original_title}</h2>
                    }
                    {movie.original_name &&
                        <h2>{movie.original_name}</h2>
                    }
                    <p className="text-justify">{movie.overview}</p>
                    <div style={{ display: 'flex', width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                        <span>Lanzamiento: {movie.release_date}</span> 
                        <span>Votos: {movie.vote_count}</span> 
                        <span>Popularidad: {movie.popularity}</span>
                    </div> 
                    <div className="mt-3" style={{ display: 'flex', width: "100%", flexDirection: "row", justifyContent: "center" }}>
                        <button className="btn btn-red" onClick={addFavorite} >
                            Añadir a Favorito
                        </button>                       
                        <Link className="btn btn-red ml-2" to={{ pathname: '/'}} >
                            Volver
                        </Link>                   
                    </div> 
                </div>
                <div className="col-12 col-sm-12 col-md-6" style={{ display: 'flex', flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}  >
                    {movie.poster_path &&
                        <img src={config.img500_url + movie.poster_path} width="100%"  height="768"
                            alt={movie.original_title}
                        />
                    }
                    {!movie.poster_path &&
                        <h2>No tiene Poster para mostrar</h2>
                    }
                </div>
            </div>
        </section>
    )
}