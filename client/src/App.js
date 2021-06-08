import { MuiThemeProvider, createMuiTheme, responsiveFontSizes, Container} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//components
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
//screens
import HomeScreen from './screens/homescreen/HomeScreen'
import ProductScreen from './screens/productscreen/ProductScreen'


const App = () => {

   const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Alegreya Sans"',
      },
      palette: {
        primary: { main: '#8fd9a8', secondary: '#7eca9c'}, 
        secondary: { main: '#ffffff' },
        alternate: { main: '#161616', secondary: '#393e46'},
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
            <Route exact path='/'  component={HomeScreen} />
            <Route exact path='/product/:id'  component={ProductScreen} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </MuiThemeProvider>   
    </>
  );
}

export default App
