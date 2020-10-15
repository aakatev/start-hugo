import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Title from '../title'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'

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
  modalPaper: {
    position: 'absolute',
    width: '80vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

export default function Themes({ assets, setAssets }) {
  const classes = useStyles()

  const hanldeRemoveAsset = (item) => {
    setAssets([...assets.filter((i) => i !== item)])
  }

  const hanldeUpdateAsset = (index) => (event) => {
    let newAssets = [...assets]
    newAssets[index] = event.target.value
    setAssets(newAssets)
  }

  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.modalPaper}>
      <Title>Add new theme</Title>
      <Grid xs={12} item>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">
            In a format of https://github.com/budparr/gohugo-theme-ananke.git
          </InputLabel>
          <Input
            id="outlined-adornment-styles"
            value={'url'}
            onChange={hanldeUpdateAsset()}
          />
        </FormControl>
      </Grid>{' '}
      <Grid xs={6} item>
        <Button onClick={handleOpen} color="primary">
          Add theme
        </Button>
      </Grid>
    </div>
  )

  return (
    <React.Fragment>
      <Title>Themes ({assets.length})</Title>
      <Alert severity="warning">
        Warning! This feature is experimental. The themes will not be added
        directly to the generated project, but you will be provided with a shell
        script to obtain them.
      </Alert>
      {assets.length === 0 ? (
        <Typography>No themes added</Typography>
      ) : (
        assets.map((url, index) => (
          <Grid xs={12} key={url + index} item>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <Input
                disabled
                id="outlined-adornment-styles"
                value={url}
                onChange={hanldeUpdateAsset(index)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => hanldeRemoveAsset(url)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => hanldeRemoveAsset(url)}>
                      <DeleteIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        ))
      )}
      <Grid xs={6} item>
        <Button onClick={handleOpen} color="primary">
          Add theme
        </Button>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </React.Fragment>
  )
}
