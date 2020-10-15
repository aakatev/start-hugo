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
import Button from '@material-ui/core/Button'

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

export default function Assets({ assets, setAssets }) {
  const classes = useStyles()

  const hanldeRemoveAsset = (item) => {
    setAssets([...assets.filter(i => i !==item)])
  }

  const hanldeUpdateAsset = (index) => (event) => {
    let newAssets = [...assets]
    newAssets[index] = event.target.value
    setAssets(newAssets)
  }

  return (
    <React.Fragment>
      <Title>Assets</Title>
      {assets.map((url, index) => (
        <Grid xs={12} key={url+index} item>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">
              Link in a format https://example.com/style.css
            </InputLabel>
            <Input
              id="outlined-adornment-styles"
              value={url}
              onChange={hanldeUpdateAsset(index)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => hanldeRemoveAsset(url)}>
                    <DeleteIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      ))}
      <Grid xs={6} item>
        <Button color="primary">Add CSS/JS</Button>
      </Grid>
    </React.Fragment>
  )
}
