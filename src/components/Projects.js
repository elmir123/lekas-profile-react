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
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));
  

const Projects = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        </Grid>
        </div>
    )
}

export default Projects