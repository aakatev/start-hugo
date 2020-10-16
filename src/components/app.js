import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Navigation from './navigation'
import Generator from './generator'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Generator />
      </main>
    </div>
  )
}


export default App