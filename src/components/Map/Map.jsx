import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles.js';

const {REACT_APP_GOOGLE_API} = process.env;

const Map = () => {
    //hook
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat:43.4715, lng:-80.5420};

    return(
        <div className = {classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: REACT_APP_GOOGLE_API }}
                defaultCenter={coordinates} //where center is loaded
                center={coordinates}
                defaultZoom={15}
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