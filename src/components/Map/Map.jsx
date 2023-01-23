import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles.js';


const Map = () => {
    //hook
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat:43.4723, lng:80.5449};

    return(
        <div className = {classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyATgwJuhOVL6uct2fOAaJ6p2aDhdhLkGD4' }}
                defaultCenter={coordinates} //where center is loaded
                center={coordinates}
                defaultZoom={13}
                margin={[50, 50, 50, 50]} //possibly change to fit
                options={''} //
                onChange={''} //when map changes
                onChildClick={''} //when something is clicked
            >
            </GoogleMapReact>
        </div>
    );
}

export default Map;