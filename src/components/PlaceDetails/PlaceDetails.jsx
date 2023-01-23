import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({place}) => {

    const classes = useStyles();
    

    return(
        <Card elevation={6}>
            <CardMedia
                style={{height: 200}}
                image='https://www.grt.ca/en/about-grt/resources/ION/Station-pages/1326Reg23IONsta13Frederick-1000x560px.jpg'
                title={place.stop_name}
            />
            <CardContent>
                <Typography gutterBottom variant="h7">{place.stop_name}</Typography>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;