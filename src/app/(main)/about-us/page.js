'use client';

import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import Images from '@/app/assets/images';
import Colors from '@/app/assets/styles';
import "@fontsource/urbanist";
import { AchievementIcon, GreaterThanIcon, GreaterThanIcon2, LessThanIcon, LessThanIcon2, QuoteIcon, StarIcon } from '@/app/assets/icons';
import PrimaryButton from '@/app/components/button';

const reviewsData = [
  {
    review: "Fantastisk service och mycket kunnig personal. Jag lämnade in bilen för bromsbyte och rekond – kom tillbaka som ny!",
    user: "Umair T."
  },
  {
    review: "Otroligt nöjd med resultatet! Min bil fick både service och plåtskador fixade. Personalen är vänlig och pålitlig.",
    user: "Alex Hammarström"
  },
  {
    review: "Lämnade in bilen för hjulskifte och rekond. Allt gick snabbt och smidigt. Rekommenderar Strindbergs Bilvård varmt!",
    user: " Lisa Lee"
  },
];

function About() {
  return (
    <Fragment>
      <Box component={"section"}
        sx={{
          position: "relative",
          background: `url(${Images.about_bg_img.src})no-repeat center`,
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
            background: Colors.black + "DD"
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
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "50px", fontFamily: "Urbanist", color: Colors.white, textTransform: "uppercase" }}>Om oss</Typography>
            <Typography variant="body1" sx={{ fontSize: "20px", fontFamily: "Urbanist", color: Colors.white }}>Hem  /  Om oss</Typography>
          </Box>
        </Container>
      </Box>
      <Box component={"section"}
        sx={{ py: 8, mt: "50px", }}
      >
        <Container>
          <Grid container justifyContent={"center"}>
            <Grid size={{ xl: 10, lg: 11, md: 12, sm: 12, xs: 12 }}>
              <Grid container justifyContent={"space-between"} rowSpacing={5} columnSpacing={5}>
                <Grid size={{ xl: 5.8, lg: 5.8, md: 5.8, sm: 12, xs: 12 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      component={"img"}
                      src={Images.service.src}
                      sx={{
                        width: "100%",
                        height: "462px",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        width: "calc(100% - 64px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        background: Colors.primary,
                        gap: 1,
                        p: 3,
                        mt: "-48px"
                      }}
                    >
                      <AchievementIcon />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="body1" sx={{ fontFamily: "Urbanist", fontSize: "20px", fontWeight: 800, color: Colors.white }}>STRINDBERGS BILVÅRD</Typography>
                        <Typography variant="body2" sx={{ fontFamily: "Manrope", color: Colors.white }}>bäst i branschen</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 4
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        }}
                      >
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          {[...Array(3)].map((_, ind) => (
                            <LessThanIcon key={ind} />
                          ))}
                        </Box>
                        <Typography variant="body1" sx={{ fontFamily: "Manrope", color: "#6D7076" }}>Välkommen till</Typography>
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          {[...Array(3)].map((_, ind) => (
                            <GreaterThanIcon key={ind} />
                          ))}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1
                        }}
                      >
                        <Box>
                          <Typography variant="h1" sx={{ fontSize: { xl: "80px", lg: "74px", md: "68px", sm: "62px", xs: "54px" }, fontFamily: "Urbanist", fontWeight: 900, color: Colors.black }}>
                            STRINDBERGS
                          </Typography>
                          <Typography variant="h2" sx={{ fontSize: { xl: "80px", lg: "74px", md: "68px", sm: "62px", xs: "54px" }, fontFamily: "Urbanist", fontWeight: 900, color: Colors.primary }}>
                            BILVÅRD
                          </Typography>
                        </Box>
                        <Typography variant="h5" sx={{ fontSize: "25px", fontFamily: "Manrope", color: "#6D7076" }}>
                          Vi har lång erfarenhet av branschen och behärskar alla biltyper och modeller och vet vilka behandlingar som får dem att glänsa och få ett högre andrahandsvärde. Vi vet hur man rengör en bil och ger den ett bättre skydd mot väder, vind och alla typer av föroreningar.
                        </Typography>
                      </Box>
                    </Box>
                    <PrimaryButton
                      title={"Get to Know Us"}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component={"section"}
        sx={{
          background: { xl: `url(${Images.why_choose_us.src})no-repeat`, lg: `url(${Images.why_choose_us.src})no-repeat`, md: `url(${Images.why_choose_us.src})no-repeat`, sm: "none", xs: "none" },
          backgroundSize: "cover !important",
          backgroundPosition: "center center !important",
          p: { xl: "200px", lg: "140px", md: 10, sm: 6, xs: 3 },
        }}
      >
        <Grid container>
          <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontSize: { xl: "50px", lg: "50px", md: "42px", sm: "42px", xs: "34px" }, fontFamily: "Urbanist", fontWeight: 900 }}>
                Respekt, engagemang och ansvar är våra kärnvärden
              </Typography>
              <Typography>
                Med hjälp av dessa ledord så ser vi till att du som kund alltid känner dig trygg när du lämnar in bilen hos oss. Dessutom utför vi alla våra tjänster med en uttalad miljöfilosofi.
              </Typography>
              <Typography>Vill du veta mer om vår verksamhet och vad vi kan hjälpa dig med när det handlar om att ta hand om din bil? Då är du välkommen att kontakta oss!</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box component={"section"}
        sx={{ pt: 8, pb: "164px", background: `url(${Images.feedback_bg.src})no-repeat`, backgroundSize: "cover", position: 'relative' }}
      >
        <Container maxWidth="xl">
          <Grid container justifyContent={"center"}>
            <Grid size={{ xl: 10, lg: 11, md: 12, sm: 12, xs: 12 }}>
              <Grid container spacing={4}>
                <Grid size={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      {[...Array(3)].map((_, ind) => (
                        <LessThanIcon2 key={ind} />
                      ))}
                    </Box>
                    <Typography variant="body1" sx={{ fontFamily: "Manrope", color: Colors.white, textAlign: "center" }}>Our Feedbacks</Typography>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      {[...Array(3)].map((_, ind) => (
                        <GreaterThanIcon2 key={ind} />
                      ))}
                    </Box>
                  </Box>
                </Grid>
                <Grid size={12}>
                  <Typography variant="h3" sx={{ fontFamily: "Urbanist", color: Colors.white, fontWeight: 800, fontSize: "40px", textAlign: "center" }}>See What Students are Talking About?</Typography>
                </Grid>
                <Grid size={12} sx={{ mt: 6 }}>
                  <Grid container spacing={4} rowSpacing={{ xl: 0, lg: 0, md: 0, sm: 8, xs: 8 }}>
                    {reviewsData.map((item, ind) => (
                      <Grid key={ind} size={{ xl: 4, lg: 4, md: 4, sm: 6, xs: 12 }} sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            background: Colors.white,
                            position: "relative",
                            p: 4,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: 4,
                            boxShadow: "0px 0px 15px 5px #a9a9a91d"
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 2,
                              position: "absolute",
                              top: "-47px",
                              right: "50%",
                              transform: "translate(50%, 0%)"
                            }}
                          >
                            <QuoteIcon />
                            <Box
                              sx={{
                                display: "flex",
                                gap: 0.5
                              }}
                            >
                              {[...Array(5)].map((_, ind) => (
                                <StarIcon key={ind} />
                              ))}
                            </Box>
                          </Box>
                          <Box sx={{ mt: 8 }}>
                            <Typography variant='body1' sx={{ fontFamily: "Manrope", color: "#6D7076", lineHeight: "30px" }}>{item.review}</Typography>
                          </Box>
                          <Box
                            sx={{
                              position: "relative",
                              background: Colors.soft_gray,
                              height: "65px",
                              display: "flex",
                              justifyContent: "center"
                            }}
                          >
                            <Box
                              sx={{
                                width: "55px",
                                height: "55px",
                                borderRadius: "50%",
                                background: "#2A2A30",
                                border: "4px solid #FFFFFF",
                                position: "absolute",
                                top: -32,
                                left: 32,
                              }}
                            />
                            <Typography variant="h6" sx={{ mt: 1, fontSize: "20px", fontFamily: "Urbanist", fontWeight: 600 }}>{item.user}</Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 0,
                              height: 0,
                              borderLeft: "56px solid transparent",
                              borderRight: "0px solid transparent",
                              borderTop: "43px solid #FFFFFF",
                              position: "absolute",
                              bottom: -43,
                              right: 70
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={"xl"}>
          <Grid container justifyContent={"center"}>
            <Grid size={{ xl: 10, lg: 10, md: 12, sm: 12, xs: 12 }}>
              <Box
                sx={{
                  p: 4,
                  border: `8px solid ${Colors.deep_blue}`,
                  borderRadius: 6,
                  bottom: { xl: -140, lg: -140, md: -140, sm: -64, xs: -64 },
                  height: "335px",
                  position: "relative",
                  backgroundSize: "cover !important",
                  background: `url(${Images.bg_footer.src})no-repeat`,
                  zIndex: 1
                }}
              >
                <Grid container rowSpacing={2}>
                  <Grid size={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }}>
                    <Typography variant="h4" sx={{ fontFamily: "Urbanist", fontSize: "40px", fontWeight: 900, color: Colors.white }}>Har du någon fråga? Välkommen att kontakta oss 1231313131313</Typography>
                  </Grid>
                  <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                    <PrimaryButton title={"Book Now"} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: { xl: 128, lg: 128, md: 80, sm: 48, xs: 48 },
            width: "100%",
            height: { xl: "180px", lg: "180px", md: "180px", sm: "224px", xs: "224px" },
            background: Colors.white
          }}
        />
      </Box>
    </Fragment>
  )
}

export default About;