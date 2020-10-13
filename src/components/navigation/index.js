import React from 'react'

import NavigationAppBar from './appbar'
import NavigationDrawer from './drawer'

const Navigation = () => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <NavigationAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <NavigationDrawer handleDrawerClose={handleDrawerClose} open={open} />
    </React.Fragment>
  )
}

export default Navigation