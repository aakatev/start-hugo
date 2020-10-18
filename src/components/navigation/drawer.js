import React from 'react'

import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography';

import useStyles from '../styles'

const NavigationDrawer = ({ handleDrawerClose, open }) => {
  const classes = useStyles()

  return (
    <Drawer
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.drawerMain}>
        <Typography variant="h2" component="h1" gutterBottom>
          Usage instructions
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          1. Install Hugo on your machine
        </Typography>
        <Typography variant="body1">Tip: <a href="https://gohugo.io/getting-started/installing/">Hugo official docs</a> is the best way to start</Typography>
        <Typography className={classes.marginTop} variant="h5" component="h2" gutterBottom>
          2. Generate a new project using Hugo Generator
        </Typography>
        <Typography variant="body1">Tip: If you are not familiar with Hugo yet, leave default settings as they are</Typography>
        <Typography className={classes.marginTop} variant="h5" component="h2" gutterBottom>
          3. Unzip generated project, and start developing
        </Typography>
        <Typography variant="body1">Tip: To start Hugo development server run <code>hugo server</code></Typography>
      </div>
    </Drawer>
  )
}

export default NavigationDrawer
