import { MuiThemeProvider, createMuiTheme, responsiveFontSizes, Container} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import HomeScreen from './screens/homescreen/HomeScreen'

const App = () => {

   const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Alegreya Sans"',
      },
      palette: {
        primary: { main: '#8fd9a8' }, 
        secondary: { main: '#e4efe7' },
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
            <Route path='/' component={HomeScreen} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </MuiThemeProvider>   
    </>
  );
}

export default App
