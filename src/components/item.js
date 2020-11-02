import React from 'react';
import config from '../config';
import {Link} from "react-router-dom";

export default (props) =>{
    return (
        <div className="ml-1 mr-1 pointer pb-3">
            <Link to={{ pathname: `/detail/${props.item.id}`}} >
                <img src={config.img_url + props.item.poster_path} 
                    alt={props.item[props.propertyDisplay]} width="150" height="225"  
                />
            </Link>
            <div className="text-center">
                <Link to={{ pathname: `/detail/${props.item.id}`}} >
                    <span>{props.item[props.propertyDisplay]}</span>
                </Link>
            </div>
        </div>
    )
}