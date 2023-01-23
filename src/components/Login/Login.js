import React from 'react';
import {Typography, Box, InputBase, Grid, Paper} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import LogCard from './LogCard.jsx';  

const Login = () => {

    return(
        <LogCard login="Login"></LogCard>
    );
}

export default Login;