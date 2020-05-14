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
                  <img src={Poster} alt='Movie wallpaper' />
                  <Section>
                    <Tooltip><TooltipPar>Genre:</TooltipPar><TooltipProp>{Genre}</TooltipProp></Tooltip>
                    <Tooltip><TooltipPar>Released:</TooltipPar><TooltipProp>{Released}</TooltipProp></Tooltip>
                    <Tooltip><TooltipPar>Rated:</TooltipPar><TooltipProp>{Rated}</TooltipProp></Tooltip>
                    <Tooltip><TooltipPar>IMDb:</TooltipPar><TooltipProp>{imdbRating}</TooltipProp></Tooltip>
                  </Section>
                </Flexbox>
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

  & :last-child {
    margin-left: .25rem;
  }
`;

const About = styled.p`
  font-size: .9rem;
  margin: 1rem 0;
`;

const Main = styled.div`
  width: 100%;  
  background: gray;
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem;
  background: white;
  flex-direction: column;
`;

const Tooltip = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: .5rem 0 .5rem 1rem;
  color: #3f51b5;
  background: white;
  border-radius: .5rem 0 .5rem 0;
`;

const TooltipPar = styled.p`
  padding: .25rem;
  color: white;
  margin-right: .75rem;
  font-weight: 700;
  border-radius: .5rem 0 .5rem 0;
  background: rgb(35, 35, 35);
`;

const TooltipProp = styled.p`
  padding-right: .5rem;
  font-weight: 700;
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
  padding: 0;
  align-items: center;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
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