import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardMedia, CardActions, CardContent, Typography, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({    
  card: {
    height: '100%',
    width: "100%",    
    display: 'flex',
    flexDirection: 'column'   
  },
  cardMedia: {
    paddingTop: '100%'
  },
  cardContent: {
    background: '#121212',
  },  
  title: {
    color: 'white',
    fontSize: '.9rem',
    fontWeight: 'bold'
  }, 
  year: {
    color: 'white'    
  }, 
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    border: '.1rem solid #3f51b5',
    background: '#2c387e',
    padding: '0'
  },  
  button: {
    color: 'white',
    width: '100%',
    height: '100%'

  }    
}));

const MovieCard = ({ movie }) => {
  const { Poster, Title, Year, imdbID } = movie;
  const classes = useStyles();
  return (    
    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
    <Card className={classes.card}>   
      <CardMedia 
        className={classes.cardMedia}       
        image={Poster}    
        title="Movie wallpaper"      
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title}>
          {Title}
        </Typography>
        <Typography className={classes.year}>
          {Year}
        </Typography>
      </CardContent>
      <Link to={'/movie/' + imdbID}>
        <CardActions className={classes.buttonContainer}>
          <Button className={classes.button}>
            View
          </Button>          
        </CardActions>
      </Link>      
    </Card>
    </Grid>
  )
}

export default MovieCard;