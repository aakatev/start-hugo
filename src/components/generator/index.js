import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'

import Configuration from './configuration'
import Options from './options'
import Themes from './themes'

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
    googleAnalytics: null,
    pagination: null,
  })

  const [configurationError, setConfigurationError] = React.useState(false)

  const [options, setOptions] = React.useState({
    stylesFormat: 'css',
    pregenerateMD: 'yes',
  })

  const [themes, setThemes] = React.useState([
    'https://github.com/Shen-Yu/hugo-chart.git',
  ])


  const [files, setFile] = React.useState([
    { path: 'archetypes/default.md',contentHandler: require('../../../functions/templates/archetype') },
    { path: `assets/styles/main.${options.stylesFormat}`, contentHandler: require('../../../functions/templates/styles') },
    { path: 'layouts/_default/baseof.html', contentHandler: require('../../../functions/templates/base') },
    { path: 'layouts/_default/index.html', contentHandler: require('../../../functions/templates/index') },
    { path: 'layouts/_default/list.html',contentHandler: require('../../../functions/templates/list') },
    { path: 'layouts/_default/single.html',contentHandler: require('../../../functions/templates/single') },
    { path: 'layouts/partials/navbar.html',contentHandler: require('../../../functions/templates/navbar') },
    { path: 'config.toml',contentHandler: require('../../../functions/templates/index') },
  ])

  const generateCode = () => {
    if (
      configuration.name === '' ||
      configuration.url === '' ||
      configuration.publishDirectory === '' ||
      configuration.googleAnalytics === '' ||
      configuration.pagination === ''
    ) {
      setConfigurationError(true)
      return
    }

    var url = `${window.location}api/index`
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        configuration,
        options,
        themes,
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
              configurationError={configurationError}
              setConfiguration={setConfiguration}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Options options={options} setOptions={setOptions} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Themes files={files} themes={themes} setThemes={setThemes} />
          </Paper>
        </Grid>
      </Grid>
      <Grid className={classes.button} item xs={12}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => generateCode()}
          size="large"
        >
          GENERATE
        </Button>
      </Grid>
    </Container>
  )
}

export default Generator
