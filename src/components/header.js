import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import GradeIcon from '@material-ui/icons/Grade';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';

import { ReactComponent as Logo } from '../assets/corn-movie.svg';

const useStyles = makeStyles((theme) => ({
  title: {  
    fontFamily: 'Bungee Inline, cursive',
    fontSize: '1.2rem',
    color: '#5d72eb',   
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  header: {
    padding: '.5rem',
    background: 'rgba(0, 0, 0, 0.7)',
    borderBottom: '.1rem solid white'
  },
  logo: {
    marginRight: '1rem'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {   
    textDecoration: 'none'
  }
}));


function Header() {  
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Link className={classes.link} to='/'>
          <Button className={classes.title}><Logo className={classes.logo} />MOVIE</Button>
        </Link> 
        <Link to='/favourites'>
          <IconButton color='primary'><GradeIcon fontSize="large" /></IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
