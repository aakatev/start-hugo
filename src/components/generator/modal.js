import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Title from '../title'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

const useStyles = makeStyles((theme) => ({
  paper: {
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

export default function FileModal({ handleClose, open, text, code }) {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Title>File: {text}</Title>
        <Editor
          value={code}
          onValueChange={(c) => setCode(c)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          readOnly
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
        <Grid xs={6} item>
          <Button onClick={() => handleClose()} color="primary">
            Close
          </Button>
        </Grid>
      </div>
    </Modal>
  )
}
