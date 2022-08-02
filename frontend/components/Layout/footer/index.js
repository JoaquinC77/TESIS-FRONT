import React from 'react'
import { Button, Container, Grid, Box } from '@mui/material';
import Link from 'next/link'

const footer = () => {
  return (
    <>
      <Box 
      id="footer"
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white">
      
          
        <Container maxWidth="lg" >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Ayuda</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contacto
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Nosotros
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Como funciona
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Cuenta</Box>
              <Box>
                <Link href="/" color="inherit">
                  Log In
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Registrarse
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Autos</Box>
              <Box>
                <Link href="/" color="inherit">
                  Catalogo
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Reservar hora
                </Link>
              </Box>
            </Grid>
          </Grid>
          
        </Container>
      </Box>

    </>
  )
}

export default footer
