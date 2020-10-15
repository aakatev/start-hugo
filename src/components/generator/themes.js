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

export default function Themes({ themes, setThemes }) {
  const classes = useStyles()

  const handleRemoveTheme = (item) => {
    setThemes([...themes.filter((i) => i !== item)])
  }

  const handleUpdateTheme = (index) => (event) => {
    let newthemes = [...themes]
    newthemes[index] = event.target.value
    setThemes(newthemes)
  }

  const handleAddTheme = (theme) => {
    let newthemes = [...themes, theme]
    setThemes(newthemes)
  }

  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [button, setButton] = React.useState('')
  const [index, setIndex] = React.useState(null)
  const [error, setError] = React.useState(false)

  const handleOpen = (action, index = null) => {
    if (action === 'add') {
      setTitle('Add new theme')
      setButton('Add theme')
    } else if (action === 'edit') {
      setTitle('Edit existing theme')
      setButton('Edit theme')
      setIndex(index)
      setText(themes[index])
    }
    setError(false)
    setOpen(true)
  }

  const handleClose = () => {
    setText('')
    setError(false)
    setTitle('')
    setButton('')
    setIndex(null)
    setOpen(false)
  }

  const handleSubmit = () => {
    if (!/https:\/\/github.com\/.*git$/.test(text)) {
      setError(true)
      return
    } else if (index !== null) {
      let newthemes = [...themes]
      newthemes[index] = text
      setThemes(newthemes)
    } else {
      handleAddTheme(text)
    }
    handleClose()
  }

  const body = (
    <div style={modalStyle} className={classes.modalPaper}>
      <Title>{title}</Title>
      <Grid xs={12} item>
        <FormControl
          error={error}
          fullWidth
          className={classes.margin}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-name">
            {'In a format of https://github.com/<organization>/<repo>.git'}
          </InputLabel>
          <Input
            id="outlined-adornment-styles"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </FormControl>
      </Grid>{' '}
      <Grid xs={6} item>
        <Button onClick={() => handleSubmit()} color="primary">
          {button}
        </Button>
      </Grid>
    </div>
  )

  return (
    <React.Fragment>
      <Title>Themes ({themes.length})</Title>
      <Alert severity="warning">
        Warning! This feature is experimental. The themes will not be added
        directly to the generated project, but you will be provided with a shell
        script to obtain them.
      </Alert>
      {themes.length === 0 ? (
        <Typography>No themes added</Typography>
      ) : (
        themes.map((url, index) => (
          <Grid xs={12} key={url + Date.now() * Math.random()} item>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <Input
                disabled
                id="outlined-adornment-styles"
                value={url}
                onChange={handleUpdateTheme(index)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleOpen('edit', index)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleRemoveTheme(url)}>
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
        <Button onClick={() => handleOpen('add')} color="primary">
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
