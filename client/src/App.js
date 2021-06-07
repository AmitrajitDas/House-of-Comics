import { MuiThemeProvider, createMuiTheme, responsiveFontSizes, Container} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'

const App = () => {

   const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Alegreya Sans"',
      },
      palette: {
        primary: { main: '#e4efe7' },
        secondary: { main: '#8fd9a8' },
      },
    })
  );

  return (
    <>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <h1>Comixology</h1>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </MuiThemeProvider>   
    </>
  );
}

export default App
