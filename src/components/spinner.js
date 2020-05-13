import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
  return (
    <div>
      <CircularProgress disableShrink />
    </div>
  );
}

export default Spinner;