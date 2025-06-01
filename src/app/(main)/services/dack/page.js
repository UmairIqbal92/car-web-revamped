'use client';

import React, { Fragment, useState } from 'react';
import { Box, Collapse, Container, Grid, TextField, Typography, styled } from '@mui/material';
import Images from '@/app/assets/images';
import Colors from '@/app/assets/styles';
import PrimaryButton from '@/app/components/button';
import Contact_Opening from '@/app/components/contact_opening';
import "@fontsource/poppins";

const CustomTextField = styled(TextField)({
  background: "#EEF4FF",
  "& .MuiOutlinedInput-root": {
    fontFamily: "Poppins",
    "& fieldset": {
      border: "none"
    }
  }
});

function Dack() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleFormVisible = () => setIsFormVisible((prevVisible) => !prevVisible);

  return (
    <Fragment>
      <Box component={"section"}
        sx={{
          position: "relative",
          background: `url(${Images.dack_bg_img.src})no-repeat center`,
          backgroundSize: "cover",
          width: "100%",
          height: "398px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: Colors.black + "70"
          }}
        />
        <Container maxWidth={"xl"} sx={{ height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative"
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "50px", fontFamily: "Urbanist", color: Colors.white, textTransform: "uppercase" }}>DÄCK</Typography>
            <Typography variant="body1" sx={{ fontSize: "20px", fontFamily: "Urbanist", color: Colors.white }}>Hem  /  DÄCK</Typography>
          </Box>
        </Container>
      </Box>
      <Box component={"section"} sx={{ py: 4 }}>
        <Container maxWidth={"xl"}>
          <Grid container rowSpacing={4}>
            <Grid size={12}>
              <Box
                sx={{
                  background: Colors.soft_gray,
                  p: 3
                }}
              >
                <Grid container>
                  <Grid size={12}>
                    <Grid container rowSpacing={isFormVisible ? 8 : 0}>
                      <Grid size={12}>
                        <Grid container justifyContent={"center"}>
                          <Grid size={{ xl: 4, lg: 4, md: 8, sm: 10, xs: 12 }}>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 3
                              }}
                            >
                              <Typography variant="h2" sx={{ fontSize: 64, fontWeight: 900, fontFamily: "Urbanist", textAlign: "center" }}>Boka tid online</Typography>
                              <Typography variant="h5" sx={{ fontSize: 25, fontWeight: 700, fontFamily: "Urbanist", textAlign: "center" }}>Boka gärna en tid, men drop-in går också bra i mån av tid!</Typography>
                              <PrimaryButton color={Colors.primary} title={"Boka tid"} onClick={handleFormVisible} />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Collapse in={isFormVisible}>
                        <Grid size={12}>
                          <Grid container justifyContent={"center"} rowSpacing={5}>
                            <Grid size={{ xl: 9, lg: 9, md: 10, sm: 12, xs: 12 }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: 2
                                }}
                              >
                                <Typography variant="h4" sx={{ fontSize: 32, fontFamily: "Poppins", fontWeight: 700 }}>Book your appointment now</Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Poppins", fontWeight: 600 }}>So our team can reach out to you on time</Typography>
                              </Box>
                            </Grid>
                            <Grid size={{ xl: 9, lg: 9, md: 10, sm: 12, xs: 12 }}>
                              <Grid container spacing={3}>
                                <Grid size={{ xl: 4, lg: 4, md: 4, sm: 8, xs: 12 }}>
                                  <Grid container spacing={3}>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Förnamn *</Typography>
                                        <CustomTextField placeholder="e.g: John" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Efternamn *</Typography>
                                        <CustomTextField placeholder="e.g: Doe" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Företagsnamn</Typography>
                                        <CustomTextField placeholder="e.g: 123456789" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Din email *</Typography>
                                        <CustomTextField placeholder="e.g: john.doe@example.com" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Telefonnummer *</Typography>
                                        <CustomTextField placeholder="e.g: 123456789" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Däckreparation</Typography>
                                        <CustomTextField />
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid size={{ xl: 4, lg: 4, md: 4, sm: 8, xs: 12 }}>
                                  <Grid container spacing={3}>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Märke (t.ex. Ford)</Typography>
                                        <CustomTextField placeholder="e.g: Ford" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Modell (t.ex. Mustang)</Typography>
                                        <CustomTextField placeholder="e.g: Mustang" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Registreringsnummer</Typography>
                                        <CustomTextField placeholder="e.g: 123456789" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Datum/Tid</Typography>
                                        <CustomTextField />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Däckstorlek</Typography>
                                        <CustomTextField />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Hjulskifte</Typography>
                                        <CustomTextField />
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid size={{ xl: 4, lg: 4, md: 4, sm: 8, xs: 12 }}>
                                  <Grid container spacing={3}>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Däckbalansering</Typography>
                                        <CustomTextField />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Däckhotell</Typography>
                                        <CustomTextField />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Omläggning</Typography>
                                        <CustomTextField />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Däckreparation</Typography>
                                        <CustomTextField />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 1
                                        }}
                                      >
                                        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Skriv ditt meddelande</Typography>
                                        <CustomTextField multiline={true} rows={6} placeholder="Message" />
                                      </Box>
                                    </Grid>
                                    <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          justifyContent: "flex-end"
                                        }}
                                      >
                                        <PrimaryButton color={Colors.primary} title={"Bekräfta"} />
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Collapse>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid size={12}>
              <Contact_Opening />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Dack