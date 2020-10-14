import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Title from './title';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';

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
    publishDirectory: 'docs',
    scripts: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
    styles: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css',
    googleAnalytics: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const generateCode = () => {
    var url= `${window.location}api/index`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //Body
      })
    }).then(response => response.blob())
    .then((blob)=>{
      var zipUrl = window.URL.createObjectURL(blob);
      window.open(zipUrl, '_blank')
    }).catch((error)=>{
    console.log(error)
    })    
  }

  return(
    <Container maxWidth="lg" className={classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Title>Hugo Configuration</Title>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">Website name</InputLabel>
            <Input
              id="outlined-adornment-name"
              value={values.name}
              onChange={handleChange('name')}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Base URL</InputLabel>
            <Input
              id="outlined-adornment-url"
              value={values.url}
              onChange={handleChange('url')}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Build directory</InputLabel>
            <Input
              id="outlined-adornment-url"
              value={values.publishDirectory}
              onChange={handleChange('publishDirectory')}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Google Analytics tracking ID (leave blank if not applied)</InputLabel>
            <Input
              id="outlined-adornment-url"
              value={values.googleAnalytics}
              onChange={handleChange('googleAnalytics')}
            />
          </FormControl>
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Other Options</Title>
          <FormControl component="fieldset">
            <FormLabel component="legend">Stylesheets format</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={'male'} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="CSS" />
              <FormControlLabel value="male" control={<Radio />} label="SASS" />
              <FormControlLabel value="other" control={<Radio />} label="SCSS" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Pregenerate MarkDown</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={'female'} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Yes" />
              <FormControlLabel value="other" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Scripts</Title>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-scripts">Link in a format https://example.com/script.js</InputLabel>
            <Input
              id="outlined-adornment-scripts"
              value={values.scripts}
              onChange={handleChange('scripts')}
            />
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Stylesheets</Title>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">Link in a format https://example.com/styles.css</InputLabel>
            <Input
              id="outlined-adornment-styles"
              value={values.styles}
              onChange={handleChange('styles')}
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