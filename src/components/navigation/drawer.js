import React from 'react'

import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const drawerWidth = '100vw'

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  main: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4)
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  marginTop: {
    marginTop: theme.spacing(3)
  }
}))

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
      <div className={classes.main}>
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
        <Typography className={classes.marginTop} variant="h5" component="h2" gutterBottom>
          4. If you added Hugo themes, run the bootstrap script
        </Typography>
        <Typography variant="body1">Tip: This step is currently supported on Mac and Linux machines and requires <code>git</code> to be installed</Typography>
      </div>
    </Drawer>
  )
}

export default NavigationDrawer
