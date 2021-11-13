import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  Container,
  Paper,
  CssBaseline,
} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//components
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
//screens
import HomeScreen from './screens/homescreen/HomeScreen'
import ProductScreen from './screens/productscreen/ProductScreen'
import CartScreen from './screens/cartscreen/CartScreen'
import LoginScreen from './screens/loginscreen/LoginScreen'
import SignupScreen from './screens/signupscreen/SignupScreen'
import ProfileScreen from './screens/profilescreen/ProfileScreen'
import ShippingScreen from './screens/shippingscreen/ShippingScreen'
import PaymentScreen from './screens/paymentscreen/PaymentScreen'
import PlaceOrderScreen from './screens/placeorderscreen/PlaceOrderScreen'
import OrderScreen from './screens/orderscreen/OrderScreen'
import UserListScreen from './screens/userlistscreen/UserListScreen'
import UserEditScreen from './screens/usereditscreen/UserEditScreen'
import ProductListScreen from './screens/productlistcreen/ProductListScreen'

const App = () => {
  const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Alegreya Sans"',
      },
      palette: {
        // type: 'dark',
        primary: { main: '#8fd9a8', secondary: '#7eca9c' },
        secondary: { main: '#ffffff' },
        alternate: { main: '#161616', secondary: '#393e46' },
      },
    })
  )

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>
          <Router>
            <Navbar />
            <Container>
              <Switch>
                <Route path='/' exact component={HomeScreen} />
                <Route path='/product/:id' component={ProductScreen} />
                <Route path='/cart/:id?' component={CartScreen} />
                <Route path='/login' component={LoginScreen} />
                <Route path='/signup' component={SignupScreen} />
                <Route path='/profile' component={ProfileScreen} />
                <Route path='/shipping' component={ShippingScreen} />
                <Route path='/payment' component={PaymentScreen} />
                <Route path='/placeorder' component={PlaceOrderScreen} />
                <Route path='/order/:id' component={OrderScreen} />
                <Route path='/admin/userlist' component={UserListScreen} />
                <Route path='/admin/user/:id/edit' component={UserEditScreen} />
                <Route
                  path='/admin/productlist'
                  component={ProductListScreen}
                />
              </Switch>
            </Container>
            <Footer />
          </Router>
        </Paper>
      </MuiThemeProvider>
    </>
  )
}

export default App
