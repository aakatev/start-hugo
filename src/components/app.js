import React from 'react'

import useStyles from './styles'
import Navigation from './navigation'
import Generator from './generator'


function App() {
  const classes = useStyles()
  return (
    <div className={classes.appRoot}>
      <Navigation />
      <main className={classes.appContent}>
        <div className={classes.appBarSpacer} />
        <Generator />
      </main>
    </div>
  )
}


export default App