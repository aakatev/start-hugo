import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3)
  }
}));

const Content = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  const [values, setValues] = React.useState({
    name: 'Hugo Starter Project',
    url: 'example.com',
    scripts: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
    styles: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css'
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const generateCode = () => {
    fetch('https://nifty-kilby-32cac7.netlify.app/api/index')
  }

  return(
    <Container maxWidth="lg" className={classes.container}>
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">Website Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              value={values.name}
              onChange={handleChange('name')}
              labelWidth={60}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Base URL</InputLabel>
            <OutlinedInput
              id="outlined-adornment-url"
              value={values.url}
              onChange={handleChange('url')}
              labelWidth={60}
            />
          </FormControl>
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          section 2
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-scripts">Scripts</InputLabel>
            <OutlinedInput
              id="outlined-adornment-scripts"
              value={values.scripts}
              onChange={handleChange('scripts')}
              labelWidth={60}
            />
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">Stylesheets</InputLabel>
            <OutlinedInput
              id="outlined-adornment-styles"
              value={values.styles}
              onChange={handleChange('styles')}
              labelWidth={60}
            />
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
    <Grid className={classes.button} item xs={12}>
      <Button variant="outlined" color="primary" onClick={()=>generateCode()}>
        GENERATE
      </Button>
    </Grid>
  </Container>
  )
}

export default Content