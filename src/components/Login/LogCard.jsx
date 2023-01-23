import React from 'react';
import {Typography, Box, TextField, Grid, Paper} from '@material-ui/core';
import {Link} from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import useStyles from './styles.js';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

  const themeDark = createMuiTheme({
    palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      }
    }
  });

function LogCard({login}) {

  const classes = useStyles();

    const [dark, setDark] = React.useState(true);

    const paperStyle = {
        padding: "20px",
        margin: "20px auto",
        height: "70vh",
        width: "350px",
    }

    const BlackTextTypography = withStyles({
        root: {
          color: "#000000",
          fontWeight: "bold"
        }
      })(Typography);

  return (

    <MuiThemeProvider theme={themeDark}>
        <CssBaseline />
        <Grid>
            <Paper evaluation={30} style={paperStyle}>
                <Grid align='center'>
                    <Box marginTop='10px'>
                        <BlackTextTypography variant='h5'>{login}</BlackTextTypography>
                    </Box>
                    <Box marginTop='33px'>
                        <TextField InputProps={{
                                    style: {
                                      color: 'black',
                                    },
                                  }} label="Username" 
                                  placeholder='Enter Username' 
                                  width="250px" 
                                  required/>
                        <br/>
                        <br/>
                        <TextField InputProps={{
                                    style: {
                                      color: 'black',
                                    },
                                  }} label="Password" 
                                  placeholder='Enter Password' 
                                  type='password'
                                  width="250px" 
                                  required/>
                        <br/>
                        <FormControlLabel
                          
                          control={
                            <Checkbox
                              name="checkedB"
                              color="black"
                              />
                          }
                          label={
                            <Box marginRight="30px" component="div" color="black">
                               Remember Me
                             </Box>
                          }
                        />
                        <br/>
                        <Button style={{
                              marginTop: "10px",
                              borderRadius: 35,
                              backgroundColor: "#000000",
                              padding: "18px 36px",
                              fontSize: "18px"
                              }}
                              component={Link} to="/home"
                              >{login}
                        </Button>
                        <br/>
                        <br/>
                        <BlackTextTypography>
                          <Box>
                            No Account? No Problem.
                            <Link to="/signup">
                                Sign Up
                            </Link>
                          </Box>
                        </BlackTextTypography>
                    </Box>
                </Grid>
            </Paper>
            <Box 
                display="flex"
                justifyContent="center">
                <Box
                    component="img"
                    sx={{
                    height: 130,
                    width: 145,
                    }}
                    alt="Transition Logo"
                    src={require('./transition.png')}
                />
            </Box>
        </Grid>
    </MuiThemeProvider>
  )
}

export default LogCard;