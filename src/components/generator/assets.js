import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Title from '../title'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';

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
      <Grid container spacing={1} alignItems="flex-end">
        <Grid xs={12} md={1} item>
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
        </Grid>
        <Grid xs={12} md={11} item>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">
              Link in a format https://example.com/styles.css
            </InputLabel>
            <Input
              id="outlined-adornment-styles"
              value={'https://example.com/styles.css'}
              onChange={() => {}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => {}}>
                    <DeleteIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid xs={6} item>
        <Button color="primary">Add CSS/JS</Button>
      </Grid>
    </React.Fragment>
  )
}
