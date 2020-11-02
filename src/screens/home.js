import React from 'react';

import Trending from './trending';
import Popular from './popular';
import Tops from './tops';

import {
    Input, Label
} from 'reactstrap';

export default () =>{

    return (
        <div className="container-fluid no-nav">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="form-group mt-4">
                        <Input type="search" placeholder="Search movies" />
                    </div>
                </div>
            </div>
            <Trending />
            <Popular />
            <Tops />
        </div>
    )
}