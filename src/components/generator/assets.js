import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Title from '../title'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    overflow: 'auto',
    flexDirection: 'row',
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3),
  },
}))


export default function Assets() {
  const classes = useStyles()
  
  return (
    <React.Fragment>
      <Title>Assets</Title>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Type</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={'CSS'}
          onChange={() => {}}
        >
          <MenuItem value={'CSS'}>CSS</MenuItem>
          <MenuItem value={'JS'}>JS</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-name">
          Link in a format https://example.com/styles.css
        </InputLabel>
        <Input
          id="outlined-adornment-styles"
          value={'https://example.com/styles.css'}
          onChange={()=>{}}
        />
      </FormControl>
    </React.Fragment>
  )
}
