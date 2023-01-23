import React from 'react';

import useStyles from './styles.js';

const PlaceDetails = ({place}) => {
    return(
        <div>
            <h3>{place.stop_name}</h3>
        </div>
    );
}

export default PlaceDetails;