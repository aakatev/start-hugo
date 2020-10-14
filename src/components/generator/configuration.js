import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Title from '../title'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'

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

export default function Configuration({ configuration, handleConfigurationChange }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Title>Hugo Configuration</Title>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-name">Website name</InputLabel>
        <Input
          id="outlined-adornment-name"
          value={configuration.name}
          onChange={handleConfigurationChange('name')}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Base URL</InputLabel>
        <Input
          id="outlined-adornment-url"
          value={configuration.url}
          onChange={handleConfigurationChange('url')}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          Build directory
        </InputLabel>
        <Input
          id="outlined-adornment-url"
          value={configuration.publishDirectory}
          onChange={handleConfigurationChange('publishDirectory')}
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            onChange={handleConfigurationChange}
            name="gilad"
          />
        }
        label="Google Analytics"
      />
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          Google Analytics tracking ID
        </InputLabel>
        <Input
          id="outlined-adornment-url"
          value={configuration.googleAnalytics}
          onChange={handleConfigurationChange('googleAnalytics')}
        />
      </FormControl>
    </React.Fragment>
  )
}
