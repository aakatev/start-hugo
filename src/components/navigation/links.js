import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AssessmentIcon from '@material-ui/icons/Assessment'
import TheatersIcon from '@material-ui/icons/Theaters'
import VideocamIcon from '@material-ui/icons/Videocam'
import SettingsIcon from '@material-ui/icons/Settings'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Learn more about Hugo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideocamIcon />
      </ListItemIcon>
      <ListItemText primary="Explore Hugo starter themes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TheatersIcon />
      </ListItemIcon>
      <ListItemText primary="Checkout some awesome Hugo repos" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Read my Learn Hugo series"/>
    </ListItem>
  </div>
)