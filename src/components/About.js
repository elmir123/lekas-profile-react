import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      backgroundColor: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary,
    },
  }));
const About = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className="pageTitle">About Me</h1>
            <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        
        </Grid>
        </div>
    )
}

export default About