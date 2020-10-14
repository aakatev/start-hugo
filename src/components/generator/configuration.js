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

export default function Configuration({ configuration, handleConfigurationChange }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Title>Hugo Configuration</Title>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-name">Your website name</InputLabel>
        <Input
          id="outlined-adornment-name"
          value={configuration.name}
          onChange={handleConfigurationChange('name')}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Base URL with protocol e.g. https</InputLabel>
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
