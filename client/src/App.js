import { MuiThemeProvider, createMuiTheme, responsiveFontSizes, Container, Paper } from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//components
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
//screens
import HomeScreen from './screens/homescreen/HomeScreen'
import ProductScreen from './screens/productscreen/ProductScreen'
import CartScreen from './screens/cartscreen/CartScreen'


const App = () => {

   const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Alegreya Sans"',
      },
      palette: {
        // type: 'dark',
        primary: { main: '#8fd9a8', secondary: '#7eca9c'}, 
        secondary: { main: '#ffffff' },
        alternate: { main: '#161616', secondary: '#393e46'},
      },
    })
  );

  return (
    <>
    <MuiThemeProvider theme={theme}>
    <Paper>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/product/:id'  component={ProductScreen} />
            <Route path='/cart/:id?'  component={CartScreen} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </Paper>
    </MuiThemeProvider>   
    </>
  );
}

export default App
