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

const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            
            <h1 className="pageTitle">Contact Me</h1>
            <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Elmir Lekovic</h3>
            <p>
                Website: <a href="http://webroots.ca">webroots.ca</a>
                <br />E-mail: <a href="mailto:elmir123@gmail.com">elmir123@gmail.com</a>
                <br />GitHub: <a href="https://github.com/elmir123">https://github.com/elmir123</a>
                <br />Linkedin: <a href="https://www.linkedin.com/in/elmir-lekovic/">https://www.linkedin.com/in/elmir-lekovic/</a>
            </p>
        </Paper>
        </Grid>
        </Grid>

        </div>
    )
}

export default Contact