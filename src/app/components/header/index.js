'use client';

import React, { Fragment, useState } from 'react';
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
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  Collapse,
} from '@mui/material';
import { FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon, ExpandMore, MenuIcon } from "@/app/assets/icons";
import "@fontsource/manrope";
import "@fontsource/urbanist";
import "@fontsource/urbanist/700.css";
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
];

function Header() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const open = Boolean(anchorEl);

  const toggleDrawer = () => setIsDrawerOpen(newOpen => !newOpen);
  const toggleCollapse = () => setIsExpanded(newOpen => !newOpen);


  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSocialSite = (index) => {
    if (index === 0) {
      window.open("https://www.facebook.com/profile.php?id=61556684804381", { target: "_blank" });
    } else if (index === 1) {
      window.open("https://www.instagram.com/strindbergs.bilvard/", { target: "_blank" });
    }
  }

  return (
    <Fragment>
      <Drawer
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
        sx={{
          "& .MuiPaper-root": {
            background: Colors.deep_blue,
            width: 290
          }
        }}
      >
        <List sx={{ p: 0 }}>
          <ListItem
            sx={{
              position: "sticky",
              top: 8,
              flexDirection: "column",
              alignItems: "flex-start",
              background: Colors.deep_blue,
              zIndex: 1
            }}
          >
            <ListItemButton sx={{ width: "100%", pb: 2 }}>
              <Box component={Link} passHref href={"/"} sx={{ display: { xl: "none", lg: "none", md: "none", sm: "flex", xs: "flex" }, justifyContent: "center" }} >
                <Image
                  src={Images.logo.src}
                  alt="Logo"
                  width={94}
                  height={54}
                  style={{
                    objectFit: "contain"
                  }}
                />
              </Box>
            </ListItemButton>
            <Divider sx={{ borderWidth: "1.5px", borderColor: Colors.primary, width: "-webkit-fill-available" }} />
          </ListItem>
          {Navigations.map((obj, index) => obj.path ? (
            <ListItem
              key={index}
              disablePadding
              component={Link}
              passHref
              href={obj.path}
              onClick={() => toggleDrawer(false)}
              sx={{
                textDecoration: "none",
                color: Colors.white,
                textTransform: "uppercase"
              }}
            >
              <ListItemButton>
                <ListItemText sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Urbanist !important",
                    fontWeight: 700,
                    fontSize: 16,
                  }
                }}
                  primary={obj.name}
                />
              </ListItemButton>
            </ListItem>
          ) : (
            <Fragment key={index}>
              <ListItem
                key={index}
                disablePadding
                sx={{
                  color: Colors.white,
                  textTransform: "uppercase"
                }}
              >
                <ListItemButton onClick={() => toggleCollapse()}>
                  <ListItemText sx={{
                    "& .MuiTypography-root": {
                      fontFamily: "Urbanist !important",
                      fontWeight: 700,
                      fontSize: 16,
                    }
                  }}
                    primary={obj.name}
                  />
                  <ListItemIcon sx={{ minWidth: 24, "svg": { "path": { fill: Colors.white } } }}>
                    <ExpandMore />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <Collapse in={isExpanded}>
                <List sx={{ px: 2 }}>
                  {services.map((item, ind) => (
                    <ListItem
                      key={ind}
                      disablePadding
                      component={Link}
                      href={item.path}
                      passHref
                      sx={{
                        textDecoration: "none",
                        color: Colors.white,
                        textTransform: "uppercase"
                      }}
                    >
                      <ListItemButton>
                        <ListItemText sx={{
                          "& .MuiTypography-root": {
                            fontFamily: "Urbanist !important",
                            fontWeight: 700,
                            fontSize: 16,
                          }
                        }}
                          primary={item.name}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          ))}
        </List>
      </Drawer>
      <Box
        component={"header"}
        sx={{
          //   position: { xl: "static", lg: "static", md: "static", sm: "sticky", xs: "sticky" },
          //   top: { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 },
          //   zIndex: 111,
          background: { md: `linear-gradient(45deg, ${Colors.deep_blue} 50%, ${Colors.primary} 50%)`, sm: `linear-gradient(45deg, ${Colors.deep_blue} 50%, ${Colors.primary} 50%)`, xs: `linear-gradient(45deg, ${Colors.deep_blue} 50%, ${Colors.primary} 50%)`, }
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xl: 0, lg: 0, md: 0, sm: 2, xs: 2 } }}>
          {/* Top Social and Timing Bar */}
          <Box sx={{ backgroundColor: { xl: Colors.white, lg: Colors.white, md: Colors.white, sm: Colors.deep_blue, xs: Colors.deep_blue } }}>
            <Grid container alignItems="center">
              <Grid size={{ xl: 1.8, lg: 1.8, md: 1.8, sm: 2.8, xs: 2.8 }}>
                <Box
                  sx={{
                    px: { xl: 6, lg: "46px", md: 3, sm: 2, xs: 1 },
                    display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" },
                    alignItems: "center",
                    gap: 1
                  }}
                >
                  <FacebookIcon />
                  <Typography variant='body2' sx={{ fontFamily: "Manrope", fontWeight: 600 }}>Find us</Typography>
                </Box>

                <Box component={Link} passHref href={"/"} sx={{ display: { xl: "none", lg: "none", md: "none", sm: "flex", xs: "flex" }, justifyContent: "center" }} >
                  <Image
                    src={Images.logo.src}
                    alt="Logo"
                    width={94}
                    height={54}
                    style={{
                      objectFit: "contain"
                    }}
                  />
                </Box>
              </Grid>

              <Grid size={{ xl: 10.2, lg: 10.2, md: 10.2, sm: 9.2, xs: 9.2 }}>
                <Box
                  sx={{
                    backgroundColor: '#e62424',
                    color: 'white',
                    px: { xl: 7, lg: 6, md: 5, sm: 0, xs: 0 },
                    pl: { xl: 7, lg: 6, md: 5, sm: "96px", xs: 4 },
                    pr: { xl: 7, lg: 6, md: 5, sm: 0, xs: 0 },
                    py: "15px",
                    clipPath: { xl: 'polygon(2.8% 0, 100% 0, 100% 100%, 0% 100%)', lg: 'polygon(2.8% 0, 100% 0, 100% 100%, 0% 100%)', md: 'polygon(2.8% 0, 100% 0, 100% 100%, 0% 100%)', sm: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)', xs: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)', },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: "Manrope", }}>
                    8:00 - 17:00
                  </Typography>
                  <IconButton
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={() => toggleDrawer()}
                    sx={{
                      display: { xl: "none", lg: "none", md: "none", sm: "flex", xs: "flex" },
                      background: "transparent",
                      border: `2px solid ${Colors.white}`,
                      ":hover": {
                        background: Colors.white,
                        border: `2px solid ${Colors.primary}`,
                        color: Colors.primary
                      }
                    }}
                  >
                    <MenuIcon hover={isHover} />
                  </IconButton>
                  <Box
                    sx={{
                      pr: 4,
                      display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" },
                      alignItems: "center",
                      gap: 3
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: "Manrope", display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
                      079-3301334
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: "Manrope", display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
                      support@strindbergsbilvard.se
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Logo with angled background */}
          <Box sx={{ backgroundColor: '#ffffff', display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" } }}>
            <Grid container>
              <Grid size={2.1}>
                <Box
                  sx={{
                    px: { xl: 5, lg: 4, md: 3, sm: 2, xs: 1 },
                    height: 110,
                    backgroundColor: '#111118',
                    display: 'flex',
                    alignItems: 'center',
                    clipPath: 'polygon(0% 0%, 86% 0%, 55.5% 100%, 0% 100%)',
                  }}
                >
                  <Link href={"/"} passHref>
                    <Image
                      src={Images.logo.src}
                      alt="Logo"
                      width={104}
                      height={74}
                      style={{
                        objectFit: "cover"
                      }}
                    />
                  </Link>
                </Box>
              </Grid>

              <Grid size={9.9}>
                <Grid container sx={{ height: "100%" }}>
                  <Grid size={8} sx={{ position: "relative" }}>
                    <List sx={{ display: "flex", gap: 1, height: "100%", py: 0, justifyContent: "center" }}>
                      {Navigations.map((item, ind) => (
                        <Fragment key={ind}>
                          {item.name === "Tjänster" ? (
                            <ListItem key={ind} sx={{ justifyContent: "center", width: "auto" }} disablePadding>
                              <ListItemButton
                                onClick={(e) => handleOpen(e)}
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
                                <ListItemIcon sx={{ minWidth: "24px" }}><ExpandMore /></ListItemIcon>
                              </ListItemButton>
                            </ListItem>
                          ) : (
                            <ListItem key={ind} sx={{ justifyContent: "center", width: "auto" }} disablePadding>
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
                          onMouseEnter={() => setHoveredIndex(ind)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          onClick={() => handleSocialSite(ind)}
                          key={ind}
                          sx={{
                            width: "36px",
                            height: "36px",
                            background: Colors.white + "0D",
                            borderRadius: 0,
                            ":hover": {
                              background: Colors.primary,
                              color: Colors.white
                            }
                          }}
                        >
                          <Icon hover={hoveredIndex === ind} />
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
    </Fragment >
  )
}

export default Header