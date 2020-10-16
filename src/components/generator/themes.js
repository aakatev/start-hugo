import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Title from '../title'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import DescriptionIcon from '@material-ui/icons/Description'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

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

export default function Themes({ themes, setThemes, files }) {
  const classes = useStyles()

  console.log(files)

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

  const [code, setCode] = React.useState(`function add(a, b) {
  return a + b;
}`)

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
      <Title>File</Title>
      <Editor
        value={code}
        onValueChange={(c) => setCode(c)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
      <Grid xs={6} item>
        <Button onClick={() => handleSubmit()} color="primary">
          Close
        </Button>
      </Grid>
    </div>
  )

  return (
    <React.Fragment>
      <Title>Files ({files.length})</Title>
      <Alert severity="warning">
        Warning! Some files (like posts, and other content, or empty directories) will not be displayed here.
      </Alert>
      {files.length === 0 ? (
        <Typography>No files found</Typography>
      ) : (
        files.map((file, index) => (
          <Grid xs={12} key={file.path + Math.random()} item>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <Input
                disabled
                id="outlined-adornment-styles"
                value={file.path}
                //onChange={handleUpdateTheme(index)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleOpen('edit', index)}>
                      <DescriptionIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        ))
      )}
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
