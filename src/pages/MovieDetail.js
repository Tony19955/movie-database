import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Spinner from '../components/spinner';

import { fetchMovie } from '../redux/search/search.actions';
import { addMovie } from '../redux/favourites/favourites.actions';

import { Button, IconButton, Grid } from '@material-ui/core';
import StarBorder from '@material-ui/icons/StarBorder';

class MovieDetail extends Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);    
  }

  addToFavourites = () => {
    this.props.addMovie(this.props.movie);
  }

  render() {
    const { loading, movie } = this.props;  
    const { Title, Year, Genre, Released, Rated, imdbRating, Poster, Plot, Director, Writer, Actors, imdbID } = movie;

    return (
      <Container>
        <Grid container display="flex" justify="center">
        {loading ? <Spinner /> :
          <Grid item xs={12} sm={10} md={8} lg={6} xl={6}>
            <Card>
              <Main>
                <TitleBox>
                  <IconButton color='primary' onClick={this.addToFavourites}><StarBorder fontSize="large" /></IconButton> 
                  <MovieTitle>{Title}
                    <MovieYear>({Year})</MovieYear>
                  </MovieTitle>
                </TitleBox>
                <Flexbox>
                  <Section>
                    <Tooltip>{Genre}</Tooltip>
                    <Tooltip>{Released}</Tooltip>
                    <Tooltip>{Rated}</Tooltip>
                    <Tooltip>IMDb {imdbRating}</Tooltip>
                  </Section>
                </Flexbox>
                <img src={Poster} alt='Movie wallpaper' />
              </Main>          
              <Information>  
                <h2>About</h2>
                <About>{Plot}</About>          
                <Section><p><strong>Director: </strong>{Director}</p></Section>
                <Section><p><strong>Writer: </strong>{Writer}</p></Section>
                <Section><p><strong>Stars: </strong>{Actors}</p></Section>
                <Buttons>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    href={'https://www.imdb.com/title/' + imdbID}
                  > View on IMDb
                  </Button>
                  <Link to='/'>
                    <Button 
                      variant="contained" 
                      color="primary"                   
                    > Back to search
                    </Button>
                  </Link>
                </Buttons>
              </Information>
            </Card>
          </Grid>
        }
        </Grid>
      </Container>  
    );
  };
};

const Buttons = styled.div`
  display: flex;  
  margin-top: 2rem;
  justify-content: center;
`;

const About = styled.p`
  font-size: .9rem;
  margin: 1rem 0;
`;

const Main = styled.div`
  width: 100%;  
  background: gray;
`;

const Section = styled.div`
  display: flex;
  padding-top: 1rem;    
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem;
  background: white;
  flex-direction: column;
`;

const Tooltip = styled.p`
  padding: .5rem;
  margin: 0 .25rem;
  color: #3f51b5;
  font-weight: 700;
  border-radius: .5rem;
  background: rgb(35, 35, 35);
`;

const TitleBox = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  background: black;
  justify-content: center;
  border-bottom: .1rem solid white;
`;

const Flexbox = styled.div`
  display: flex;
  padding: 0 2rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
`;

const MovieTitle = styled.h1`
  color: white;
  font-size: 2rem;  
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const MovieYear = styled.span`
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  margin-left: 1rem;  
`;

const Card = styled.div`
  display: flex;   
  margin: 8rem 0;
  align-items: center;  
  flex-direction: column;
  border-bottom: .1rem solid white;
`;

const Container = styled.div`  
  width: 100%;  
  padding: 1rem;
`;

const mapStateToProps = state => ({  
  movie: state.movies.movie,
});

const mapDispatchToProps = dispatch => ({    
  fetchMovie: (id) => dispatch(fetchMovie(id)) ,
  addMovie: (movie) => dispatch(addMovie(movie)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);