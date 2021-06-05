import { muiThemeProvider, createMuiTheme, responsiveFontSizes, Container} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'

const App = () => {

   const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Segoe UI"',
      },
      palette: {
        primary: { main: '#e4efe7' },
        secondary: { main: '#1eae98' },
      },
    })
  );

  return (
    <>
    <muiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <h1>Comixology</h1>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </muiThemeProvider>   
    </>
  );
}

export default App;
