import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Input} from '@material-ui/core';
import useStyles from './styles.js';

import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';

import { places } from './ListInfo.js';

function fetchPlaces(){
    return places;
}


const List = () => {

    const classes = useStyles();
    //useState hook
    const [type, setType] = useState('busstops');
    const [rating, setRating] = useState('');

    const places = fetchPlaces();

    return(
        <div className = {classes.container}>
            <Typography variant="h4">Bus Stops Near You</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="busstops"> Bus Stops </MenuItem> {/**Change value restaurants!!! */}
                    <MenuItem value="busroutes">Bus Routes </MenuItem>
                    <MenuItem value="bustimes">Bus Times</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Stop Times</InputLabel>
                <Select value={rating} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value={0}> All </MenuItem> {/**Change value restaurants!!! */}
                    <MenuItem value={3}> Within 3 Minutes </MenuItem>
                    <MenuItem value={4}> Outside of 5 Minutes</MenuItem>
                    <MenuItem value={4.5}> Outside of 10 Minutes</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, index)=>(
                    <Grid item key={index} xs={12}>
                        <PlaceDetails place={place}/> {/**Import from place details component, pass in the place prop*/}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;