'use client';

import Images from '@/app/assets/images';
import Colors from '@/app/assets/styles';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react'

function Contact_Opening() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 12 }}>
        <Box
          sx={{
            background: `url(${Images.contact_img.src})no-repeat center`,
            width: "100%",
            height: "488px",
            position: "relative"
          }}
        >
          <Box sx={{ position: "absolute", width: "100%", height: "100%", background: Colors.black + 70 }} />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h2" sx={{ fontSize: { xl: 64, lg: 64, md: 48, sm: 48, xs: 48 }, fontWeight: 700, fontFamily: "Urbanist", color: Colors.white, textAlign: "center" }}>Kontakt</Typography>
            <Typography variant="h3" sx={{ fontSize: { xl: 32, lg: 32, md: 20, sm: 20, xs: 20 }, fontWeight: 600, fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}>Telefon: 123-456789</Typography>
            <Typography variant="h3" sx={{ fontSize: { xl: 32, lg: 32, md: 20, sm: 20, xs: 20 }, fontWeight: 600, fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}>E-post: support@abcdefgh.se</Typography>
            <Typography variant="h3" sx={{ fontSize: { xl: 32, lg: 32, md: 20, sm: 20, xs: 20 }, fontWeight: 600, fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}>Flex Shop</Typography>
            <Typography variant="h3" sx={{ fontSize: { xl: 32, lg: 32, md: 20, sm: 20, xs: 20 }, fontWeight: 600, fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}>99822 541 Navle</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 12 }}>
        <Box
          sx={{
            background: `url(${Images.open_img.src})no-repeat center`,
            width: "100%",
            height: "488px",
            position: "relative"
          }}
        >
          <Box sx={{ position: "absolute", width: "100%", height: "100%", background: Colors.black + 70 }} />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h2" sx={{ fontSize: { xl: 64, lg: 64, md: 48, sm: 48, xs: 48 }, fontWeight: 700, fontFamily: "Urbanist", color: Colors.white, textAlign: "center" }}>ÖPPET</Typography>
            <Typography variant="h3" sx={{ fontSize: { xl: 32, lg: 32, md: 20, sm: 20, xs: 20 }, fontWeight: 600, fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}> Mån – Fre            08:00 – 17:00</Typography>
            <Typography variant="h3" sx={{ fontSize: { xl: 32, lg: 32, md: 20, sm: 20, xs: 20 }, fontWeight: 600, fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}> Lördag                10:00 – 15:00</Typography>
            <Typography variant="h3" sx={{ fontSize: { xl: 32, lg: 32, md: 20, sm: 20, xs: 20 }, fontWeight: 600, fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}>Lunchstängt        12:00 – 13:00</Typography>
            <Typography variant="h3" sx={{ fontSize: { xl: 32, lg: 32, md: 20, sm: 20, xs: 20 }, fontWeight: 600, fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}>(vardagar)</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Contact_Opening