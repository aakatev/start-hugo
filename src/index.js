import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0a1922',
    },
    secondary: {
      main: '#33ba91',
    },
  },
})
const Root = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.Fragment>
)

ReactDOM.render(<Root />, document.getElementById('app'))
