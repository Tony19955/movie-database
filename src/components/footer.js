import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton, Box, Typography } from '@material-ui/core';

function Footer() {
  return (
    <Box display="flex" width="100%" p="0 1rem 1rem 1rem" alignItems="center" flexDirection="column" borderTop=".1rem solid white" position='absolute' bgcolor="rgba(0, 0, 0, 0.7)" bottom="0" left="0">
      <IconButton color='primary'><GitHubIcon color='primary' /></IconButton>      
      <Typography variant='caption' color='secondary'>Created by Matej Mik 
        <Typography component='span' variant='caption' color='primary'> @2020</Typography>
      </Typography>      
    </Box>
  );
}

export default Footer;