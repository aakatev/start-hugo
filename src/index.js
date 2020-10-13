import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import CssBaseline from '@material-ui/core/CssBaseline';

const Root = () => (
  <React.Fragment>
    <CssBaseline />
    <App/>
  </React.Fragment>
)

ReactDOM.render(<Root />, document.getElementById('app'))
