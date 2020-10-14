import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Title from '../title'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function Configuration({ configuration, setConfiguration }) {
  const classes = useStyles()

  const handleConfigurationChange = (prop) => (event) => {
    setConfiguration({ ...configuration, [prop]: event.target.value })
  }

  const handleConfigurationToggle = (prop) => (event) => {
    setConfiguration({
      ...configuration,
      [prop]: event.target.checked ? '' : null,
    })
  }

  const isToggleOn = (prop) => configuration[prop] !== null

  return (
    <React.Fragment>
      <Title>Hugo Configuration</Title>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-name">
          Your website name
        </InputLabel>
        <Input
          id="outlined-adornment-name"
          value={configuration.name}
          onChange={handleConfigurationChange('name')}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          Base URL with protocol e.g. https
        </InputLabel>
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
            checked={isToggleOn('pagination')}
            onChange={handleConfigurationToggle('pagination')}
          />
        }
        label="Pagination"
      />
      {configuration.pagination === null ? (
        ''
      ) : (
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            Number of posts per page
          </InputLabel>
          <Input
            id="outlined-adornment-url"
            value={configuration.pagination}
            type="number"
            onChange={handleConfigurationChange('pagination')}
          />
        </FormControl>
      )}
      <FormControlLabel
        control={
          <Checkbox
            checked={isToggleOn('googleAnalytics')}
            onChange={handleConfigurationToggle('googleAnalytics')}
          />
        }
        label="Google Analytics"
      />
      {configuration.googleAnalytics === null ? (
        ''
      ) : (
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
      )}
    </React.Fragment>
  )
}
