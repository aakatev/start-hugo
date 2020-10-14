import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'

import Configuration from './configuration'
import Options from './options'
import Assets from './assets'

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
    margin: theme.spacing(3),
  },
}))

const Generator = () => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const [configuration, setConfiguration] = React.useState({
    name: 'Hugo Starter Project',
    url: 'https://example.com',
    publishDirectory: 'docs',
    googleAnalytics: '',
  })

  const handleConfigurationChange = (prop) => (event) => {
    setConfiguration({ ...configuration, [prop]: event.target.value })
  }

  const generateCode = () => {
    var url = `${window.location}api/index`
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //Body
      }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        var zipUrl = window.URL.createObjectURL(blob)
        window.open(zipUrl, '_blank')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Configuration
              configuration={configuration}
              handleConfigurationChange={handleConfigurationChange}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Options />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
           <Assets/>
          </Paper>
        </Grid>
      </Grid>
      <Grid className={classes.button} item xs={12}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => generateCode()}
        >
          GENERATE
        </Button>
      </Grid>
    </Container>
  )
}

export default Generator