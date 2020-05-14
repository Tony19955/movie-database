import React, { Component } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import { connect } from 'react-redux';

import { fetchMoviesStart, fetchMovies, setLoading } from '../redux/search/search.actions';

class Search extends Component {

  handleChange = e => {
    this.props.fetchMoviesStart(e.target.value);
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.searchTerm);  
    this.props.setLoading();
  };

  render() {    
    return (
      <Container onSubmit={this.handleSubmit}>
      <TextField 
          onChange={this.handleChange}
          focused
          color="secondary"
          autoComplete="off"        
          id="outlined-search" 
          type="search" 
          variant="outlined" 
          fullWidth={true} 
          placeholder='Search a movie, episode, documentary..'        
          InputProps={{              
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={this.handleSubmit} color="secondary">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />      
      </Container>
    );
  };
};

const Container = styled.form`   
  width: 100%;
  display: flex;  
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = state => ({    
  searchTerm: state.movies.searchTerm
});


const mapDispatchToProps = dispatch => ({    
  fetchMoviesStart: (searchTerm) => dispatch(fetchMoviesStart(searchTerm)),
  fetchMovies: (searchTerm) => dispatch(fetchMovies(searchTerm)),
  setLoading: () => dispatch(setLoading())
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);