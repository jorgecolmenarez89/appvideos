import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import * as actions from '../actions';
import config from '../config';

const Favorites = () => {
    const favorites = useSelector(store => store.favorites);
    const dispatch = useDispatch();

    const deleteFavorite = (e, item) => {
        dispatch(actions.removeFavorites(item))
    }
   
    return (
        <div className="container no-nav">
            <div className="row">
                <div className="col-12 mt-3">
                    <h2>Mi lista de favoritas</h2>
                    <br/>
                    {favorites.favorites.map((item, i) => (
                        <div className=" row mb-2" style={{ display: 'flex' }} >
                            <div className="ml-3 col-12 col-sm-5 col-md-3 text-center">
                                <img src={config.img_url + item.poster_path} 
                                    alt={item.name} width="150" height="225"  
                                />
                            </div>
                            <div className="col-12 col-sm-7 col-md-9" style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                {item.original_title &&
                                    <h2>{item.original_title}</h2>
                                }
                                {item.original_name &&
                                    <h2>{item.original_name}</h2>
                                }
                                <p className="text-justify">
                                    {item.overview}
                                </p>
                                <div>
                                    <button className="btn btn-red" onClick={(e) => deleteFavorite(e, item) } >
                                    Quitar de la lista
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {favorites.favorites.length == 0 &&
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <h2>No se han añadido favoritos</h2>
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
}

export default connect(
    null,
    {
        removefavorite: actions.removeFavorites
    }
)(Favorites)