'use client';

import React, { Fragment, useRef, useState } from 'react';
import { Box, Button, CardMedia, Container, Grid, IconButton, List, ListItem, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { ArrowdownIcon, ChatIcon, GreaterThanIcon, LessThanIcon, PhoneIcon2, QuoteIcon, StarIcon } from '@/app/assets/icons';
import CircularProgress from '@/app/components/circular_progress';
import PrimaryButton from '@/app/components/button';
import Images from '@/app/assets/images';
import Colors from '@/app/assets/styles';
import "@fontsource/roboto";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import "@fontsource/urbanist";
import "@fontsource/urbanist/900.css";
import "@fontsource/urbanist/800.css";
import "@fontsource/urbanist/700.css";
import "@/app/globals.css";

const slides = [Images.hero_image.src, Images.hero_image.src, Images.hero_image.src];

const servicesData = [
  {
    name: "MEK",
    description: "There are many variations of passages of Lorem Ipsum aagtilable but the majority have suffered",
    image: Images.mek.src,
    path: "/services/mek"
  },
  {
    name: "SERVICE",
    description: "There are many variations of passages of Lorem Ipsum aagtilable but the majority have suffered",
    image: Images.service.src,
    path: "/services/service"
  },
  {
    name: "DÄCK",
    description: "There are many variations of passages of Lorem Ipsum aagtilable but the majority have suffered",
    image: Images.dack.src,
    path: "/services/dack"
  },
  {
    name: "PLÅTSKADOR",
    description: "There are many variations of passages of Lorem Ipsum aagtilable but the majority have suffered",
    image: Images.platskador.src,
    path: "/services/platskador"
  },
  {
    name: "REKOND",
    description: "There are many variations of passages of Lorem Ipsum aagtilable but the majority have suffered",
    image: Images.rekond.src,
    path: "/services/rekond"
  },
  {
    name: "SVETSNING",
    description: "There are many variations of passages of Lorem Ipsum aagtilable but the majority have suffered",
    image: Images.svetsning.src,
    path: "/services/svetsning"
  },
  {
    name: "BILFÖRSÄLJNING",
    description: "There are many variations of passages of Lorem Ipsum aagtilable but the majority have suffered",
    image: Images.bilforsaljning.src,
    path: "/services/bolforsaljning"
  },
  {
    name: "DÄCKHOTELL",
    description: "There are many variations of passages of Lorem Ipsum aagtilable but the majority have suffered",
    image: Images.dackhotell.src,
    path: "/services/dackhotell"
  },
];

const listData = [
  "✲ Svetsning & Plåtskadorl",
  "✲ Reparation & Motorbyte",
  "✲ Rekond & Bilförsäljning",
  "✲ Svetsning & Plåtskadorl",
  "✲ Däckbyte & Däckhotell"
];

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

export default function Home() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handlePaginationClick = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <Fragment>
      <Box component={"section"} sx={{ mt: "-2px" }}>
        <Grid container>
          <Grid size={12}>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              modules={[EffectFade, Autoplay, Navigation]}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {slides.map((img, ind) => (
                <SwiperSlide key={ind}>
                  <Box sx={{ width: '100%', position: "relative" }}>
                    <CardMedia
                      component="img"
                      src={img}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        aspectRatio: { xl: 22 / 10, lg: 22 / 10, md: 16 / 9, sm: 2 / 1, xs: 1 / 1 }
                      }}
                    />
                    <Typography
                      variant="h1"
                      sx={{
                        top: { xl: "12%", lg: "12%", md: "12%", sm: "12%", xs: "8%" },
                        right: { xl: "12%", lg: "12%", md: "12%", sm: "12%", xs: "8%" },
                        position: "absolute",
                        fontFamily: "Roboto",
                        fontWeight: 700,
                        maxWidth: "100%",
                        textAlign: "right",
                        lineHeight: "120px",
                        color: Colors.white,
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <Typography component={"span"} sx={{ fontSize: { xl: 60, lg: 50, md: 40, sm: 20, xs: 20 } }}>VÄLKOMMEN TILL</Typography>
                      <Typography component={"span"} sx={{ fontSize: { xl: 75, lg: 65, md: 55, sm: 32, xs: 28 } }}>STRINDBERGS BILVÅRD</Typography>
                      <Typography component={"span"} sx={{ fontSize: { xl: 60, lg: 50, md: 40, sm: 24, xs: 22 }, color: Colors.primary }}>VI HAR ALLT FÖR DIN BIL</Typography>
                    </Typography>
                    <Box
                      sx={{
                        width: { xl: "263px", lg: "243px", md: "195px", sm: "98px", xs: "98px" },
                        height: { xl: "49px", lg: "44px", md: "32px", sm: "18px", xs: "18px" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#0e0e12",
                        clipPath: {
                          xl: "polygon(15% 0, 100% 0%, 85% 100%, 0% 100%)",
                          lg: "polygon(15% 0, 100% 0%, 85% 100%, 0% 100%)",
                          md: "polygon(15% 0, 100% 0%, 85% 100%, 0% 100%)",
                          sm: "polygon(18% 0, 100% 0%, 82% 100%, 0% 100%)",
                          xs: "polygon(18% 0, 100% 0%, 82% 100%, 0% 100%)",
                        },
                        p: "8px 16px",
                        gap: { xl: "24px", lg: "24px", md: "16px", sm: "6px", xs: "6px" },
                        position: "absolute",
                        bottom: { xl: "20%", lg: "20%", md: "20%", sm: "20%", xs: "0%" },
                        right: { xl: "22%", lg: "21%", md: "16%", sm: "10%", xs: "10%" }
                      }}
                    >
                      {slides.map((_, index) => (
                        <Fragment key={index}>
                          <Typography
                            onClick={() => handlePaginationClick(index)}
                            sx={{
                              fontSize: { xl: "24px", lg: "22px", md: "20px", sm: "14px", xs: "14px" },
                              cursor: "pointer",
                              color: activeIndex === index ? "#e53935" : "#5a5a5e",
                              fontWeight: 500,
                              transition: "color 0.3s",
                            }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </Typography>
                          {index < slides.length - 1 && (
                            <Box
                              sx={{
                                width: "6px",
                                height: "57px",
                                backgroundColor: "#2e2e32",
                                clipPath: "polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)",
                                transform: { xl: "rotate(34deg)", lg: "rotate(34deg)", md: "rotate(34deg)", sm: "rotate(32deg)", xs: "rotate(32deg)" },
                              }}
                            />
                          )}
                        </Fragment>
                      ))}
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid size={12} container justifyContent={"center"}>
            <IconButton
              onClick={() => {
                const section = document.getElementById("services");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              sx={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                background: Colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ":hover": {
                  background: Colors.deep_blue
                }
              }}
            >
              <ArrowdownIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box component={"section"} sx={{ py: 12, borderBottom: "1px solid #E6E6E6" }}>
        <Container maxWidth={"xl"} sx={{ px: { xl: 0, lg: 0, md: 0, sm: 3, xs: 3 } }}>
          <Grid container justifyContent={"center"}>
            <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
              <Grid container spacing={3} justifyContent={"center"}>
                <Grid size={{ xl: 4, lg: 4, md: 4, sm: 5, xs: 12 }}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component={"img"}
                      src={Images.sec_2_image.src}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: { xl: -17, lg: 0, md: 9, sm: 0, xs: 0 },
                        p: "12px 24px",
                        width: "200px",
                        background: Colors.black,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1
                      }}
                    >
                      <ChatIcon />
                      <Box>
                        <Typography variant='body2' sx={{ fontFamily: "Manrope", fontSize: '13px', color: "#6D7076" }}>Call to Questions</Typography>
                        <Typography variant='body1' sx={{ fontWeight: "Urbanist", fontSize: '18px', color: Colors.white }}>079-3301334</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xl: 4, lg: 4, md: 4, sm: 5, xs: 12 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4
                    }}
                  >
                    <Box>
                      <Typography variant="h2" sx={{ fontSize: { xl: "76px", lg: "60px", md: "48px", sm: "32px", xs: "28px" }, color: Colors.black, fontFamily: "Roboto", fontWeight: 700 }}
                      >
                        DÄCKHOTELL STRINDBERGS
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: { xl: "80px", lg: "60px", md: "48px", sm: "32px", xs: "28px" }, color: Colors.primary, fontFamily: "Roboto", fontWeight: 700 }}>BILVÅRD GÄVLE</Typography>
                    </Box>
                    <Typography variant='body1' sx={{ color: "#5A5966", fontFamily: "Roboto" }}>
                      Vi betjänar våra kunder på bästa sätt och dina däck tas väl omhand på ett säkert sätt. Förvaras inomhus i lagom temperatur. Rengöring ingår!v
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component={"section"} id={"services"} sx={{ pt: 12, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-22%",
            left: "-340px",
            p: "36px",
            border: "1px solid #E6E6E6",
            borderRadius: "50%",
          }}
        >
          <Box
            sx={{
              p: "36px",
              border: "1px solid #E6E6E6",
              borderRadius: "50%",
            }}
          >
            <Box
              sx={{
                display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" },
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: Colors.primary
              }}
            />
          </Box>
        </Box>
        <Grid container justifyContent={"center"} rowSpacing={5}>
          <Grid size={{ xl: 4.5, lg: 4.5, md: 4.5, sm: 8, xs: 12 }}>
            <Typography variant="h3" sx={{ fontFamily: "Urbanist", fontSize: "50px", fontWeight: "900 !important", textAlign: "center" }}>
            Vi erbjuder dig <span style={{ color: Colors.primary }}>bästa tjänsterna</span>
            </Typography>
          </Grid>
          <Grid size={12}>
            <Container sx={{ maxWidth: "1366px" }}>
              {/* <Grid container justifyContent={"center"}>
                <Grid size={{ xl: 10, lg: 10, md: 10, sm: 12, xs: 10 }}> */}
              <Grid container rowSpacing={6} columnSpacing={3}>
                {servicesData.map((item, ind) => (
                  <Grid
                    key={ind}
                    size={{ xl: 3, lg: 3, md: 3, sm: 6, xs: 12 }}
                    sx={{
                      transition: "display 0.3s ease-in-out",
                      ":hover": {
                        cursor: "pointer",
                      },
                      "&:hover .title-underline": {
                        textDecoration: "underline"
                      },
                      "&:hover .add": {
                        display: "block"
                      },
                    }}
                  >
                    <Link href={item.path} passHref style={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          boxShadow: "0 4px 4px 0 #00000025"
                        }}
                      >
                        <CardMedia
                          component={"img"}
                          src={item.image}
                          sx={{
                            width: "100%",
                            height: "174px",
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          sx={{
                            background: Colors.white,
                            position: "relative",
                            minHeight: "116px",
                          }}
                        >
                          <Box
                            sx={{
                              width: "calc(100% - 32px)",
                              position: "absolute",
                              top: "-32px",
                              background: Colors.white,
                              p: 2
                            }}
                          >
                            <Typography variant="h6" className='title-underline' sx={{ fontSize: "24px", fontWeight: 800, fontFamily: "Urbanist", color: Colors.black }}>
                              {item.name}
                            </Typography>
                            <Typography variant="body2" sx={{ fontFamily: "Manrope", color: "#6D7076", lineHeight: "26px", letterSpacing: "3%" }}>
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            textTransform: "capitalize",
                            boxShadow: "none",
                            borderRadius: 0,
                            height: "69px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            p: "12px 24px",
                            background: Colors.primary,
                            color: Colors.white,
                            clipPath: {
                              xl: "polygon(0% 0%, 40% 0%, 60% 100%, 0% 100%)",
                              lg: "polygon(0% 0%, 40% 0%, 60% 100%, 0% 100%)",
                              md: "polygon(0% 0%, 45% 0%, 60% 100%, 0% 100%)",
                              sm: "polygon(0% 0%, 45% 0%, 60% 100%, 0% 100%)",
                              xs: "polygon(0% 0%, 45% 0%, 60% 100%, 0% 100%)",
                            },
                            fontSize: "14px",
                            fontFamily: "Manrope",
                            "& .add": {
                              display: "none",
                            },
                          }}
                        >
                          Boka nu &nbsp;<Box component={"span"} className='add' style={{ transition: "all 0.3s ease-in-out", color: Colors.white, fontSize: "16px" }}>+</Box>
                        </Button>
                      </Box>
                    </Link>
                  </Grid>
                ))}
              </Grid>
              {/* </Grid>
              </Grid> */}
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box component={"section"} sx={{ py: 12 }}>
        <Container maxWidth={"xl"}>
          <Grid container spacing={4}>
            <Grid size={12}>
              <Typography variant={"h3"} sx={{ fontSize: "40px", fontFamily: "Outfit", fontWeight: 600, color: Colors.black }}>
                Behöver Du Hjälp Med Bilen? Kontakta Oss Idag
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant={"h3"} sx={{ fontSize: "16px", fontFamily: "Outfit", color: Colors.black }}>
                Vi erbjuder allt från service och reparation till rekond, däckbyte och bilförsäljning. Med personlig service och gedigen erfarenhet är du i trygga händer hos oss.
              </Typography>
            </Grid>
            <Grid size={{ xl: 5.5, lg: 5.5, md: 4.5, sm: 12, xs: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  height: { xl: "calc(100% - 64px)", lg: "calc(100% - 64px)", md: "auto", sm: "auto", xs: "auto " }
                }}
              >
                <List
                  sx={{
                    py: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: { xl: "flex-start", lg: "flex-start", md: "flex-start", sm: "center", xs: "center" },
                    gap: { xl: 0, lg: 0, md: 3, sm: 3, xs: 3 }
                  }}
                >
                  {listData.map((item, ind) => (
                    <ListItem key={ind} sx={{ p: 0, width: { xl: "50%", lg: "50%", md: "100%", sm: "auto", xs: "auto" }, }}>
                      <Typography sx={{ fontSize: "24px", fontWeight: 600, fontFamily: "Outfit" }}>{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: { xl: "flex-start", lg: "flex-start", md: "flex-start", sm: "center", xs: "center" },
                  flexDirection: "row",
                  gap: 2
                }}
              >
                <PrimaryButton color={Colors.primary} title={"Läs Mer"} endIcon={<Box sx={{ width: "8px", height: "8px", borderRadius: "50%", background: Colors.white }} />} boxShadow={"4px 4px 0px 0px #c4c4c4"} />
                <PrimaryButton startIcon={<PhoneIcon2 />} title={"079-3301334"} endIcon={<Box sx={{ width: "8px", height: "8px", borderRadius: "50%", background: Colors.white }} />} boxShadow={"4px 4px 0px 0px #c4c4c4"} />
              </Box>
            </Grid>
            <Grid size={{ xl: 6.5, lg: 6.5, md: 7.5, sm: 12, xs: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xl: "space-between", lg: "space-between", md: "center", sm: "center", xs: "center" },
                  flexWrap: "no-wrap",
                  gap: { xl: 0, lg: 0, md: 3, sm: 1, xs: 1 }
                }}
              >
                {[...Array(3)].map((_, ind) => (
                  <CircularProgress key={ind} percentage={ind == 0 ? 99 : ind == 1 ? 85 : 58} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component={"section"} sx={{ background: Colors.primary, py: 12, }}>
        <Container maxWidth={"xl"}>
          <Grid container justifyContent={"center"}>
            <Grid size={{ xl: 10, lg: 10, md: 12, sm: 12, xs: 12 }}>
              <Grid container rowSpacing={10}>
                <Grid size={12}>
                  <Grid container spacing={4} flexDirection={{ xl: "row", lg: "row", md: "row", sm: "column-reverse", xs: "column-reverse" }}>
                    <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 2
                        }}
                      >
                        <Typography sx={{ fontSize: "60px", fontFamily: "Roboto", fontWeight: 500, color: Colors.white, pb: 1, }}>Verkstaden</Typography>
                        <Typography sx={{ fontSize: "20px", fontFamily: "Roboto", fontWeight: 500, color: Colors.white, pt: 2, borderTop: `2px solid ${Colors.white + 33}` }}>Verkstaden på STRINDBERS BILVÅRD jobbar med helhetslösningar.
                          Vi utför reparationer, motorbyten, byte av växellåda, service och svetsningar. Vi utför även
                          däckarbeten och har däckförvaring. Dessutom monterar vi dragkrokar, fixar plåtskador och lackar. Vi säljer också begagnade bilar.</Typography>
                        <Button
                          variant={"outlined"}
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: Colors.white,
                            borderRadius: 1,
                            border: "2px solid #FFFFFF",
                            p: "20px 16px",
                            ":hover": {
                              background: Colors.white,
                              color: Colors.primary,
                              fontWeight: 600
                            }
                          }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </Grid>
                    <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                      <CardMedia
                        component={"img"}
                        src={Images.sec_4_image_1.src}
                        alt={"Mechanic engineers doing their work"}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "18px"
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={12}>
                  <Grid container spacing={4} alignItems={"center"}>
                    <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                      <CardMedia
                        component={"img"}
                        src={Images.sec_4_image_2.src}
                        alt={"Mechanic engineers doing their work"}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "18px"
                        }}
                      />
                    </Grid>
                    <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 2
                        }}
                      >
                        <Typography sx={{ fontSize: "60px", fontFamily: "Roboto", fontWeight: 500, color: Colors.white, pb: 1, }}>Reservdelar</Typography>
                        <Typography sx={{ fontSize: "20px", fontFamily: "Roboto", fontWeight: 500, color: Colors.white, pt: 2, borderTop: `2px solid ${Colors.white + 33}` }}>Vi har kontakt med olika leverantörer både i Sverige och utomlands och kan skaffa resevervdelar, nya och begagnade, till alla bilar.</Typography>
                        <Button
                          variant={"outlined"}
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: Colors.white,
                            borderRadius: 1,
                            border: "2px solid #FFFFFF",
                            p: "20px 16px",
                            ":hover": {
                              background: Colors.white,
                              color: Colors.primary,
                              fontWeight: 600
                            }
                          }}
                        >Read More</Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component={"section"}
        sx={{
          background: "linear-gradient(181deg, #ffffff00, #cfcfcf4a)",
          py: 12,
          overflow: "hidden",
          position: "relative",
          "::after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: `url(${Images.dotted_bg.src})no-repeat top left`,
            backgroundSize: "contain",
            zIndex: -1
          }
        }}
      >
        <CardMedia
          component={"img"}
          src={Images.triangle_bg.src}
          sx={{
            display: { xl: "block", lg: "block", md: "none", sm: "none", xs: "none" },
            width: "320px",
            height: "400px",
            objectFit: "cover",
            position: "absolute",
            bottom: 229,
            right: -30,
            zIndex: 1
          }}
        />
        <Container maxWidth={"xl"}>
          <Grid container justifyContent={"center"}>
            <Grid size={{ xl: 10, lg: 10, md: 12, sm: 12, xs: 12 }}>
              <Grid container spacing={4}>
                <Grid size={12}>
                  <Grid container justifyContent={"center"}>
                    <Grid size={{ xl: 10, lg: 10, md: 10, sm: 12, xs: 12 }}>
                      <Grid container spacing={4} sx={{ px: 2, overflow: "hidden" }}>
                        <Grid size={12}>
                          <Grid container>
                            <Grid size={12}>
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
                                <Typography variant="body1" sx={{ fontFamily: "Manrope", color: "#6D7076" }}>Vårt Omdöme</Typography>
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
                            </Grid>
                            <Grid size={12}>
                              <Typography variant="h4" sx={{ fontSize: "40px", fontFamily: "Urbanist", fontWeight: 800 }}>Vad Säger Våra Kunder?</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid size={12} sx={{ my: 6 }}>
                          <Swiper
                            modules={[Navigation, Scrollbar, Autoplay]}
                            spaceBetween={40}
                            breakpoints={{
                              0: {
                                slidesPerView: 1
                              },
                              768: {
                                slidesPerView: 2
                              },
                              1280: {
                                slidesPerView: 3
                              },
                            }}
                            scrollbar={{ draggable: true }}
                            style={{ overflow: "visible" }}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: true,
                            }}
                          >
                            {reviewsData.map((item, ind) => (
                              <SwiperSlide key={ind} style={{ display: "flex" }}>
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
                                      justifyContent: "center",
                                      alignItems: "center"
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
                                </Box>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </Grid>
                      </Grid>
                    </Grid>
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
                  bottom: -60,
                  height: "335px",
                  position: "relative",
                  backgroundSize: "cover !important",
                  background: `url(${Images.bg_footer.src})no-repeat`,
                  zIndex: 1
                }}
              >
                <Grid container rowSpacing={2}>
                  <Grid size={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }}>
                    <Typography variant="h4" sx={{ fontFamily: "Urbanist", fontSize: { md: "40px", sm: "32px", xs: "32px" }, fontWeight: 900, color: Colors.white }}>Har du någon fråga? Välkommen att kontakta oss 079-3301334</Typography>
                  </Grid>
                  <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                    <PrimaryButton title={"Boka nu"} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: 129,
            width: "100%",
            height: "100px",
            background: Colors.white
          }}
        />
      </Box>
    </Fragment >
  );
}