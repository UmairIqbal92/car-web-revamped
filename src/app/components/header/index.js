'use client';

import React, { Fragment, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Typography,
  IconButton,
  Container,
  Grid,
  List,
  ListItem,
  Menu,
  MenuItem,
  ListItemButton,
} from '@mui/material';
import { FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon } from "@/app/assets/icons";
import "@fontsource/manrope";
import "@fontsource/urbanist";
import Images from '@/app/assets/images';
import Colors from '@/app/assets/styles';
import Link from 'next/link';

const Navigations = [
  { name: "Hem", path: "/" },
  { name: "Tjänster" },
  { name: "Om oss", path: "/about-us" },
  { name: "Kontakt", path: "/contact" },
];

const services = [
  { name: "MEK", path: "/services/mek" },
  { name: "SERVICE", path: "/services/service" },
  { name: "DÄCK", path: "/services/dack" },
  { name: "PLÅTSKADOR", path: "/services/platskador" },
  { name: "REKOND", path: "/services/rekond" },
  { name: "SVETSNING", path: "/services/svetsning" },
  { name: "BILFÖRSÄLJNING", path: "/services/bilforsaljning" },
  { name: "DÄCKHOTELL", path: "/services/dackhotell" },
]

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const timeoutRef = useRef();

  const handleOpen = (e) => {
    clearTimeout(timeoutRef.current);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  const cancelClose = () => {
    clearTimeout(timeoutRef.current);
  };

  return (
    <Box sx={{ background: Colors.deep_blue }} >
      <Container maxWidth="xl" sx={{ px: { xl: 0, lg: 0, md: 0, sm: 2, xs: 2 } }}>
        {/* Top Social and Timing Bar */}
        <Box sx={{ backgroundColor: '#fff' }}>
          <Grid container alignItems="center">
            <Grid size={1.8}>
              <Box
                sx={{
                  px: { xl: 6, lg: 5.5, md: 3, sm: 2, xs: 1 },
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                }}
              >
                <FacebookIcon />
                <Typography variant='body2' sx={{ fontFamily: "Manrope", fontWeight: 600 }}>Find us</Typography>
              </Box>
            </Grid>

            <Grid size={10.2}>
              <Box
                sx={{
                  backgroundColor: '#e62424',
                  color: 'white',
                  px: 7,
                  py: "15px",
                  clipPath: 'polygon(3.2% 0, 100% 0, 100% 100%, 0% 100%)',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: "Manrope", display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
                  8:00 - 17:00
                </Typography>
                <Box
                  sx={{
                    pr: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 3
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: "Manrope", display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
                    +123456789
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: "Manrope", display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
                    support@abc.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Logo with angled background */}
        <Box sx={{ backgroundColor: '#ffffff', display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
          <Grid container>
            <Grid size={1.9}>
              <Box
                sx={{
                  px: { xl: 5, lg: 4, md: 3, sm: 2, xs: 1 },
                  height: 110,
                  backgroundColor: '#111118',
                  display: 'flex',
                  alignItems: 'center',
                  clipPath: 'polygon(0% 0%, 95% 0%, 55.5% 100%, 0% 100%)',
                }}
              >
                <Image
                  src={Images.logo.src}
                  alt="Logo"
                  width={104}
                  height={74}
                  style={{
                    objectFit: "cover"
                  }}
                />
              </Box>
            </Grid>

            <Grid size={10.1}>
              <Grid container sx={{ height: "100%" }}>
                <Grid size={8} sx={{ position: "relative" }}>
                  <List sx={{ display: "flex", gap: 1, height: "100%", py: 0, justifyContent: "center" }}>
                    {Navigations.map((item, ind) => (
                      <Fragment key={ind}>
                        {item.name === "Tjänster" ? (
                          <ListItem key={ind} sx={{ justifyContent: "center", width: "auto" }}>
                            <ListItemButton
                              onMouseEnter={handleOpen}
                            >
                              <Typography
                                variant='subtitle1'
                                sx={{
                                  textDecoration: "none",
                                  fontFamily: "Urbanist",
                                  fontWeight: 700,
                                  fontSize: 16,
                                  color: Colors.black,
                                  textTransform: "uppercase"
                                }}
                              >
                                {item.name}
                              </Typography>
                            </ListItemButton>
                          </ListItem>
                        ) : (
                          <ListItem key={ind} sx={{ justifyContent: "center", width: "auto" }}>
                            <Link href={item.path} passHref style={{ textDecoration: "none" }} >
                              <ListItemButton>
                                <Typography
                                  variant='subtitle1'
                                  sx={{
                                    textDecoration: "none",
                                    fontFamily: "Urbanist",
                                    fontWeight: 700,
                                    fontSize: 16,
                                    color: Colors.black,
                                    textTransform: "uppercase"
                                  }}
                                >
                                  {item.name}
                                </Typography>
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        )}
                      </Fragment>
                    ))}
                  </List>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        sx: {
                          width: "290px",
                          borderRadius: 0
                        },
                        onMouseLeave: handleClose
                      },
                      list: {
                        sx: {
                          borderTop: `5px solid ${Colors.primary}`
                        },
                      }
                    }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    {services.map((service, ind) => (
                      <Link key={service.name} href={service.path} passHref style={{ textDecoration: "none" }}>
                        <MenuItem
                          sx={{
                            p: "12px 16px",
                            borderBottom: ind !== services.length - 1 && "1px solid #E6E6E6",
                            ":hover": {
                              color: Colors.primary
                            }
                          }}
                        >
                          <Typography
                            sx={{
                              textDecoration: "none",
                              fontFamily: "Urbanist",
                              fontWeight: 700,
                              fontSize: 18,
                              color: Colors.black,
                              textTransform: "uppercase"
                            }}
                          >
                            {service.name}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: "-11.5%",
                      width: "14.5%",
                      height: "100%",
                      background: Colors.soft_gray,
                      clipPath: 'polygon(0% 100%, 22.5% 100%, 100% 0%, 77.5% 0%)',
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: "-7%",
                      width: "14.5%",
                      height: "100%",
                      background: Colors.soft_gray,
                      clipPath: 'polygon(0% 100%, 22.5% 100%, 100% 0%, 77.5% 0%)',
                    }}
                  />
                </Grid>
                <Grid size={4} sx={{ position: "relative", overflow: "hidden" }}>
                  <Box
                    sx={{
                      background: Colors.deep_blue,
                      width: "100%",
                      height: "100%",
                      clipPath: 'polygon(22.5% 0, 100% 0, 100% 100%, 0% 100%)',
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2
                    }}
                  >
                    {[FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon].map((Icon, ind) => (
                      <IconButton
                        key={ind}
                        sx={{
                          width: "36px",
                          height: "36px",
                          background: Colors.white + "0D",
                          borderRadius: 0
                        }}
                      >
                        <Icon />
                      </IconButton>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: "-16%",
                      width: "25%",
                      height: "100%",
                      background: Colors.white,
                      clipPath: 'polygon(100% 100%, 0% 100%, 90% 0%, 100% 0%)',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Header