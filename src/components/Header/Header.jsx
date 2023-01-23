import React from 'react';

import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

//hook
import useStyles from './styles';

const Header = () => {
    
    //hook
    const classes = useStyles();

    return(
        <AppBar position = "static">
            {/* Uses toolbar class material ui*/}
            <Toolbar className={classes.toolbar}>
                {/* Typography is every single text element */}
                <Typography variant="h5" className={classes.title}>
                    Transit<span className={classes.ionText}>ION</span>
                </Typography>
                {/* Box is basically a div which you can set some pre-defined properties */}
                <Box display = "flex">
                    <Typography variant="h6" className={classes.title2}>
                        Explore Waterloo
                    </Typography>

                    {/*Search Bar */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput }}/>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;