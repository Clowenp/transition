import React from 'react';

//component frmo material ui adds to baseline padding, colours ,etc 
import { CssBaseline, Grid} from '@material-ui/core';

import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';
import PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx';

const App = () => {
    return(
        <div>
            <CssBaseline />
            < Header />
            < Grid container spacing={3} style={{ width: '100%'}}>
                {/* makes item take full screen when opened in mobile
                and 4/12 spaces on med sized screen*/}
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>

                <Grid item xs={12} md={4}>
                    <Map />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;