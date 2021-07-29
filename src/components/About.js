import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cns_logo from "../assets/imgs/cns_logo_react.png";
import ocea_logo from "../assets/imgs/ocea-logo.png";
import summerfest from "../assets/imgs/summerfest.png";
import dawn_new from "../assets/imgs/dawn-new.png";
import cropped_erin from "../assets/imgs/cropped-erin-1.png";


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
          <Paper className={classes.paper}>
              <p><h3>Elmir Lekovic</h3> has 18 years of IT experience. 13 years working experience as a Full Stack Developer using Linux, Django/Python, CSS, HTML, JavaScript. Working Experience with: React, Node.js, WordPress. Self-starting entrepreneur. Demonstrated time management, organizational, multi-tasking, trouble-shooting, and prioritization skills with an emphasis on communication and team work.
Always open to new experiences and excited for technical challenges.
            </p>
</Paper>
        
        </Grid>

        <Grid item xs={12}>
            <Paper className={classes.paper}>
            <h2>My Clients</h2>
            </Paper>
            <Carousel>
                <div>
                    <img className="curasel_image" src={cns_logo} alt="CANADIAN NUCLEAR SOCIETY" />
                    <p className="legend">CANADIAN NUCLEAR SOCIETY</p>
                </div>
                <div>
                    <img className="curasel_image" src={ocea_logo} alt="OTTAWA CHILDBIRTH EDUCATION ASSOCIATION" />
                    <p className="legend">OTTAWA CHILDBIRTH EDUCATION ASSOCIATION</p>
                </div>
                <div>
                    <img className="curasel_image" src={summerfest} alt="DEEP RIVER SUMMERFEST" />
                    <p className="legend">DEEP RIVER SUMMERFEST</p>
                </div>
                <div>
                    <img className="curasel_image" src={dawn_new} alt="DAWN CANADA" />
                    <p className="legend">DAWN CANADA</p>
                </div>
                <div>
                    <img className="curasel_image" src={cropped_erin} alt="ERIN SHAHEEN" />
                    <p className="legend">ERIN SHAHEEN</p>
                </div>
            </Carousel>
        </Grid>

        
        </Grid>
        </div>
    )
}

export default About