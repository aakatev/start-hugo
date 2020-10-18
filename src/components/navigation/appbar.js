import React from 'react'

import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NotificationsIcon from '@material-ui/icons/Notifications'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from '@material-ui/core/Link'
import Badge from '@material-ui/core/Badge';

import useStyles from '../styles'

const NavigationAppBar = ({ handleDrawerOpen, open }) => {
  const classes = useStyles()

  return (
    <AppBar position="absolute" className={clsx(classes.appBar)}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Hugo Generator
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton)}
        >
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon fontSize="large" />
          </Badge>
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/aakatev/start-hugo"
          color="inherit"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationAppBar
