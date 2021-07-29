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
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));
  

const Projects = () => {
    const classes = useStyles();

    return (
        <div>
            <h1>My Projects</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h3>hootertutor</h3>
              <img class="projectImg" src="https://github.com/elmir123/hootertutor/raw/main/Screenshot.png" alt="HooterTutor"/>

              <p>
                  The objective of this application is to enable students to quickly and easily find help through a simple platform. Students can define a topic of study, a duration for their session and a university to search for available tutors. A tutor can sign up and check in to the platform to announce their availability to students. Once a tutor is available, they can accept incoming requests from Students for a tutoring session. The motivation for this project is to improve the remote learning experience for Students in high school and university by improving ease of access to learning services.
              </p>
              <a href="https://hootertutor.herokuapp.com/" class="btn btn-danger">Deployed Version</a>
              <a href="https://github.com/elmir123/hootertutor" class="btn btn-primary">Code on GitHub</a>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h3>Leftover Variables</h3>
              <img class="projectImg" src="https://github.com/elmir123/left-over-variables/raw/main/Images/screen.png" alt="LefoverVariables"/>

              <p>
              A web application that will allow a user to:
Enter, store and maintain grocery items from their fridge and pantry

Track expiry dates on grocery items

Provide the option to use these grocery items to search and find delicious recipes that utilize these ingredients

Review nutritional information on the grocery items

Save a recipe to a favorites page to be referenced later


              </p>
              <a href="https://elmir123.github.io/left-over-variables/" class="btn btn-danger">Deployed Version</a>
              <a href="https://github.com/elmir123/left-over-variables" class="btn btn-primary">Code on GitHub</a>
            <div class="clearfix"></div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h3>Weather dashboard</h3>
              <img class="projectImg" src="https://github.com/elmir123/lekas-weather-dashboard/raw/main/assets/images/screen.png" alt="Lekas Weather Dashboard"/>

              <p>
              This simple to use Weather Application displays the weather for selected city.

This website utilizes:

localstorage to store city search history
openweathermap API to display frocasts
bootstrap as CSS framework
              </p>
              <a href="https://elmir123.github.io/lekas-weather-dashboard/" class="btn btn-danger">Deployed Version</a>
              <a href="https://github.com/elmir123/lekas-weather-dashboard" class="btn btn-primary">Code on GitHub</a>
              <div class="clearfix"></div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h3>Note Taker</h3>
              <img class="projectImg" src="https://github.com/elmir123/lekas-notes-taker/raw/main/public/assets/imgs/screen1.png" alt="Note Taker"/>

              <p>
              Simple Application to allow user to keep notes

Using this application you can add notes for later. As you add notes they will apear on the left side.

Viwing notes: You can view old notes by clicking on the Note title. You can add new note by clicking on the Pen icon on the right.

You can delete the note by clicking on the bin icon next to the title of the note.
              </p>
              <a href="https://lekas-note-taker.herokuapp.com/notes" class="btn btn-danger">Deployed Version</a>
              <a href="https://github.com/elmir123/lekas-notes-taker" class="btn btn-primary">Code on GitHub</a>
          </Paper>
        </Grid>
        </Grid>
        </div>
    )
}

export default Projects