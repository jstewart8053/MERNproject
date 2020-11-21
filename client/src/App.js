import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories1 from "./images/memories1.jpg";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories1} alt="memories" heighth='60' />
      </AppBar>
    </Container>

  );
}

export default App;
