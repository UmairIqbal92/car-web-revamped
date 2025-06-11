'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
  TextField,
  Button,
  Container,
  CardMedia,
  Divider,
} from '@mui/material';
import { EmailIcon, FacebookIconLight, InstagramIcon2, LinkedInIcon, PhoneIcon, YouTubeIcon } from '@/app/assets/icons';
import Colors from '@/app/assets/styles';
import Images from '@/app/assets/images';
import "@fontsource/manrope";
import "@fontsource/urbanist";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "@/app/page.module.css"

const Navigations = [
  {
    name: "Hem",
    path: "/"
  },
  {
    name: "Tjänster",
    path: "/services"
  },
  {
    name: "Om oss",
    path: "/about-us"
  },
  {
    name: "Kontakt",
    path: "/contact"
  },
];

const Services = [
  {
    name: "MEK",
    path: "/services/mek"
  },
  {
    name: "DÄCK",
    path: "/services/dack"
  },
  {
    name: "PLÅTSKADOR",
    path: "/services/platskador"
  },
  {
    name: "BILFÖRSÄLJNING",
    path: "/services/bilforsaljning"
  },
  {
    name: "SERVICE",
    path: "/services/service"
  },
  {
    name: "SVETSNING",
    path: "/services/svetsning"
  },
  {
    name: "REKOND",
    path: "/services/rekond"
  },
  {
    name: "DÄCKHOTELL",
    path: "/services/dackhotell"
  },
];

const socialLinks = [
  { name: "facebook", icon: <FacebookIconLight />, path: "https://www.facebook.com" },
  { name: "linkedin", icon: <LinkedInIcon />, path: "https://linkedin.com" },
  { name: "youtube", icon: <YouTubeIcon />, path: "https://www.youtube.com" },
];

function Footer() {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        background: `url(${Images.footer.src})no-repeat`,
        backgroundSize: "cover",
        py: { xl: 12, lg: 9, md: 6, sm: 3, xs: 3 },
        pt: pathname === "/about-us" ? { xl: "96px", lg: "96px", md: 6, sm: 3, xs: 3 } : 0,
        pb: pathname === "/about-us" || pathname === "/contact" ? { xl: 12, lg: 9, md: 6, sm: 3, xs: 3 } : 0,
        position: "relative"
      }}>
      <Box
        sx={{
          display: pathname === "/" || pathname === "/about-us" ? "block" : "none",
          top: { xl: -128, lg: -128, md: -128, sm: -96, xs: -96 },
          width: "100%",
          height: { xl: "130px", lg: "130px", md: "130px", sm: "96px", xs: "96px" },
          position: "absolute",
          background: pathname === "/about" ? { xl: Colors.white, lg: Colors.white, md: Colors.white, sm: Colors.deep_blue, xs: Colors.deep_blue } : Colors.deep_blue
        }}
      />
      <Container maxWidth="xl">
        <Grid container spacing={{ xl: 4, lg: 4, md: 4, sm: 3, xs: 3 }}>
          {/* Logo */}
          <Grid size={{ xl: 1.5, lg: 2, md: 2.5, sm: 12, xs: 12 }}>
            <Link href={"/"}>
              <CardMedia
                component="img"
                src={Images.logo.src}
                alt="Footer Logo"
                sx={{
                  height: "auto",
                  width: { xl: "100%", lg: "100%", md: "100%", sm: "32%", xs: "64%" },
                  objectFit: "contain",
                  m: "0 auto",
                }}
              />
            </Link>
          </Grid>
          <Grid size={{ xl: 10.5, lg: 10, md: 9.5, sm: 12, xs: 12 }}>
            <Grid container spacing={{ xl: 4, lg: 4, md: 2, sm: 4, xs: 4 }} justifyContent={{ xl: "flex-start", lg: "flex-start", md: "flex-start", sm: "center", xs: "center" }}>
              <Grid size={12} sx={{ display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
                <Grid container>
                  <Grid size={{ xl: 9.6, lg: 9.6, md: 9.6, sm: 12, xs: 12 }}>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        justifyContent: { xl: "flex-end", lg: "flex-end", md: "flex-end", sm: "center", xs: "center" },
                        gap: 2
                      }}
                    >
                      {socialLinks.map((item, ind) => (
                        <IconButton key={ind}
                          sx={{
                            background: '#9D9D9D24',
                            width: "34px",
                            height: "34px",
                            ":hover": {
                              background: '#9D9D9D',
                            }
                          }}
                          onClick={() => {
                            window.open(item.path, { target: "_blank" })
                          }}
                        >
                          {item.icon}
                        </IconButton>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid size={12}>
                <Grid container>
                  <Grid size={{ xl: 9.6, lg: 9.6, md: 9.6, sm: 12, xs: 12 }}>
                    <Divider
                      sx={{
                        borderColor: "#373745"
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* Navigation Links */}
              <Grid size={{ xl: 1, lg: 1.2, md: 1.2, sm: 3, xs: 12 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                  }}
                >
                  <Typography variant='h6' sx={{ fontSize: "25px", fontWeight: 600, fontFamily: "Urbanist", color: Colors.white }}>Direct</Typography>
                  <Stack
                    // spacing={1}
                    sx={{
                      flexDirection: { xl: "column", lg: "column", md: "column", sm: "column", xs: "row" },
                      justifyContent: "space-between",
                      gap: 2
                    }}
                  >
                    {Navigations.map((link, ind) => (
                      <Link key={ind} href={link.path} passHref className={styles.link}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "18px",
                            color: "#6D7076 !important",
                            textDecoration: "none !important",
                            fontFamily: "Manrope",
                            ":hover": {
                              color: '#e62424',
                              cursor: 'pointer'
                            }
                          }}
                        >
                          {link.name}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Grid>

              <Grid size={{ xl: 1.65, lg: 1.9, md: 1.9, sm: 3, xs: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                  }}
                >
                  <Typography variant='h6' sx={{ fontSize: "25px", fontWeight: 600, fontFamily: "Urbanist", color: Colors.white }}>Services</Typography>
                  <Stack
                    sx={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 2
                    }}
                  >
                    {Services.slice(0, 4).map((link, ind) => (
                      <Link key={ind} href={link.path} passHref className={styles.link}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "18px",
                            color: "#6D7076 !important",
                            textDecoration: "none !imoirtant",
                            fontFamily: "Manrope",
                            ":hover": {
                              color: '#e62424',
                              cursor: 'pointer'
                            }
                          }}
                        >
                          {link.name}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Grid>

              <Grid size={{ xl: 1.45, lg: 1.6, md: 1.6, sm: 3, xs: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                  }}
                >
                  <Typography variant='h6' sx={{ fontSize: "25px", fontWeight: 600, fontFamily: "Urbanist", color: Colors.white, visibility: "hidden" }}>Service</Typography>
                  <Stack
                    sx={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 2
                    }}
                  >
                    {Services.slice(4, 8).map((link, ind) => (
                      <Link key={ind} href={link.path} passHref className={styles.link}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "18px",
                            color: "#6D7076 !important",
                            textDecoration: "none !important",
                            fontFamily: "Manrope",
                            ":hover": {
                              color: '#e62424',
                              cursor: 'pointer'
                            }
                          }}
                        >
                          {link.name}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Grid>

              <Grid size={{ xl: 2.7, lg: 3, md: 3.6, sm: 12, xs: 12 }}>
                <Grid container rowGap={"12px"}>
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
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5
                        }}
                      >
                        <InstagramIcon2 />
                        <Typography variant="body1" sx={{ color: Colors.white, fontSize: "20px", fontWeight: 700, textAlign: "center", fontFamily: "Urbanist" }}>Instagram:</Typography>
                      </Box>
                      <Typography component="a" href="#" variant="body1" sx={{ color: `${Colors.white}!important`, textAlign: "center", textDecoration: "none", fontSize: "20px", fontFamily: "Urbanist", fontWeight: 600 }}>@umairiqbal</Typography>
                    </Box>
                  </Grid>
                  <Grid size={12}>
                    <Grid container spacing={2} justifyContent={"center"}>
                      {[Images.footer_img_1, Images.footer_img_2, Images.footer_img_3, Images.footer_img_4, Images.footer_img_5, Images.footer_img_6].map((img, idx) => (
                        <Grid size={4} key={idx} sx={{ backgroundColor: '#4e4e4e', height: 76, width: 76 }}>
                          <CardMedia
                            component={"img"}
                            src={img.src}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover"
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid size={{ xl: 5.2, lg: 4.2, md: 3.7, sm: 12, xs: 12 }}>
                <Stack gap={1}>
                  <Typography variant='body1' sx={{ fontWeight: 700, fontFamily: "Urbanist", fontSize: "25px", color: Colors.white }}>Connect with us</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body1" sx={{ fontFamily: "Manrope", color: "#6D7076" }}>8:00 - 17:00</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PhoneIcon />
                    <Typography variant="body1" sx={{ fontFamily: "Manrope", color: "#6D7076" }}>35528353253252</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <EmailIcon />
                    <Typography variant="body1" sx={{ fontFamily: "Manrope", color: "#6D7076" }}>support@testabcd.com</Typography>
                  </Stack>
                  {/* Newsletter */}
                  <Stack direction="row" mt={1}>
                    <TextField
                      fullWidth={true}
                      placeholder="Email Address"
                      size="small"
                      variant="outlined"
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: 0,
                        input: { p: 2 },
                        "& fieldset": {
                          border: "none"
                        }
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        background: Colors.primary,
                        borderRadius: 0,
                        p: 2,
                        flexShrink: 0
                      }}
                    >
                      Subscribe
                    </Button>
                  </Stack>
                  <Typography variant="body1" sx={{ mt: 1, fontWeight: 700, color: Colors.white, fontFamily: "Urbanist" }}>
                    Subscribe to get latest updates on daily basis
                  </Typography>
                </Stack>
              </Grid>

              <Grid size={12} sx={{ display: { xl: "none", lg: "none", md: "none", sm: "block", xs: "block" } }}>
                <Grid container>
                  <Grid size={{ xl: 9, lg: 9, md: 12, sm: 12, xs: 12 }}>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        justifyContent: { xl: "flex-end", lg: "flex-end", md: "center", sm: "center", xs: "center" },
                        gap: 2
                      }}
                    >
                      {socialLinks.map((item) => (
                        <IconButton
                          key={item.name}
                          sx={{
                            background: '#9D9D9D24',
                            width: "34px",
                            height: "34px",
                            ":hover": {
                              background: '#9D9D9D',
                            }
                          }}
                        >
                          {item.icon}
                        </IconButton>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;