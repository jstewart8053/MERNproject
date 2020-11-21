import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';


const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography varaiant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" heighth='60' />
      </AppBar>
    </Container>

  );
}

export default App;
