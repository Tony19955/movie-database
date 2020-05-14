import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import MovieSearch from './pages/MovieSearch';
import MovieDetail from './pages/MovieDetail';
import FavouriteMovies from './pages/FavouriteMovies';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {                
      input: {               
        color: "white"
      },
      adornedStart: {
        background: "#3f51b5c4"
      },
      inputAdornedStart: {
        borderLeft: ".1rem solid white",
        paddingLeft: "14px"
      }      
    }
          
  },
  palette: {
    primary: {
      main: "#3f51b5"    
    },
    secondary: {
      main: "#fff"
    },
  },
});

class App extends Component {
  render () {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>          
          <Header />
          <Switch>
            <Route exact path='/' component={MovieSearch} /> 
            <Route path='/movie/:id' component={MovieDetail} />      
            <Route path='/favourites' component={FavouriteMovies} />     
          </Switch>
          <Footer />          
        </ThemeProvider>
      </div>
    );
  }
}

export default App;