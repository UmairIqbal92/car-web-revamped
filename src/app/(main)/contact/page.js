'use client';

import React, { Fragment, useRef, useState } from 'react';
import { Box, Container, Grid, TextField, Typography, styled, useTheme, useMediaQuery } from '@mui/material';
import { EmailIcon2, MarkerIcon, TelephoneIcon } from '@/app/assets/icons';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import "@fontsource/urbanist";
import Images from '@/app/assets/images';
import Colors from '@/app/assets/styles';
import PrimaryButton from '@/app/components/button';

const CustomTextField = styled(TextField)({
  background: Colors.soft_gray,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none"
    }
  }
});

const contactDetails = [
  {
    text1: "Have any question?",
    text2: "Free + 23 (000)-8050",
    icon: <TelephoneIcon />
  },
  {
    text1: "Send Email",
    text2: "Demo@gmail.com",
    icon: <EmailIcon2 />
  },
  {
    text1: "Visit Anytime",
    text2: "6391 Elgin St. Delaware 10299",
    icon: <MarkerIcon />
  },
];

function Contact() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const recaptchaRef = useRef(null);
  const formRef = useRef(null);

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("md"));
  const isMd = useMediaQuery(theme.breakpoints.up("sm"));
  const isSm = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const onSubmit = (formData) => {
    // if (!captchaToken) {
    //   alert("Please verify you're not a robot");
    //   return;
    // } else {
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message.");
        }
      );
    // }
  };

  return (
    <Fragment>
      <Box component={"section"}
        sx={{
          position: "relative",
          background: `url(${Images.contact_bg_img.src})no-repeat center`,
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
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "50px", fontFamily: "Urbanist", color: Colors.white, textTransform: "uppercase" }}>Kontakt</Typography>
            <Typography variant="body1" sx={{ fontSize: "20px", fontFamily: "Urbanist", color: Colors.white }}>Hem  /  Kontakt</Typography>
          </Box>
        </Container>
      </Box>
      <Box component={"section"} sx={{ my: "50px" }}>
        <Grid container rowSpacing={6}>
          <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Container maxWidth="xl">
              <Box
                sx={{
                  p: { xl: "40px 80px", lg: "40px 80px", md: "32px 84px" }, sm: 3, xs: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="h2" sx={{ fontSize: { xl: 64, lg: 64, md: 64, sm: 56, xs: 48 }, fontWeight: 600, fontFamily: "Urbanist", textAlign: "center" }}>VÄLKOMMEN!</Typography>
                <Typography variant="body1" sx={{ fontSize: 25, fontWeight: 300, fontFamily: "Urbanist", textAlign: "center" }}>Om du har några frågor, tveka inte att kontakta oss. Vi ser fram emot att höra från dig!</Typography>
                <Grid
                  container
                  spacing={3}
                  sx={{ width: "100%" }}
                  ref={formRef}
                  component={"form"}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <CustomTextField
                      type={"text"}
                      fullWidth
                      placeholder="Your name"
                      {...register("name", {
                        required: "Please enter your full name"
                      })}
                      error={errors?.name && true}
                      helperText={errors?.name?.message}
                    />
                  </Grid>
                  <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <CustomTextField
                      type={"email"}
                      fullWidth
                      placeholder="Email Address"
                      {...register("email", {
                        required: "Please enter email address"
                      })}
                      error={errors?.email && true}
                      helperText={errors?.email?.message}
                    />
                  </Grid>
                  <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <CustomTextField
                      type={"tel"}
                      fullWidth
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Please enter phone number"
                      })}
                      error={errors?.phone && true}
                      helperText={errors?.phone?.message}
                    />
                  </Grid>
                  <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <CustomTextField
                      type={"text"}
                      fullWidth
                      placeholder="Subject"
                      {...register("subject", {
                        required: "Please enter a subject"
                      })}
                      error={errors?.subject && true}
                      helperText={errors?.subject?.message}
                    />
                  </Grid>
                  <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                    <CustomTextField
                      fullWidth
                      placeholder="Write a Message"
                      multiline={true}
                      rows={7}
                      {...register("message", {
                        required: "Please enter your message"
                      })}
                      error={errors?.message && true}
                      helperText={errors?.message?.message}
                    />
                  </Grid>
                  <Grid size={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <PrimaryButton
                        title={"Send a Message"}
                        color={Colors.primary}
                        type={"submit"}
                      />
                    </Box>
                  </Grid>
                  <Grid size={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                        ref={recaptchaRef}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Grid>
          <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}
            sx={{
              position: "relative"
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1953.6938788920286!2d17.135829376700567!3d60.681113602093674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660c7db339e7d67%3A0x7c2b3b8e173e9aa4!2sSTRINDBERGS%20BILV%C3%85RD!5e0!3m2!1sen!2s!4v1749475336064!5m2!1sen!2s"
              style={{ border: 0, width: "100%", height: isLg ? "100%" : isMd ? "600px" : isSm ? "600px" : isXs ? "600px" : "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Box
                sx={{
                  p: { xl: 4, lg: 4, md: 3, sm: 2, xs: 2 },
                  minWidth: { xl: "600px", lg: "600px", md: "600px", sm: "600px", xs: "auto" },
                  background: Colors.white
                }}
              >
                <Box
                  sx={{
                    background: Colors.deep_blue,
                    p: { xl: "32px 48px", lg: "32px 48px", md: "32px 32px", sm: 3, xs: 3 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 3,
                    position: "relative"
                  }}
                >
                  {contactDetails.map((item, ind) => (
                    <Box
                      key={ind}
                      sx={{
                        display: "flex",
                        alignItem: "center",
                        gap: 2
                      }}
                    >
                      <Box
                        sx={{
                          width: "54px",
                          height: "54px",
                          background: "#404040",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1
                        }}
                      >
                        <Typography variant="body2" sx={{ color: Colors.primary, fontFamily: "Manrope" }}>{item.text1}</Typography>
                        <Typography variant="body1" sx={{ color: Colors.white, fontFamily: "Manrope", fontSize: "18px", fontWeight: 600 }}>{item.text2}</Typography>
                      </Box>
                    </Box>
                  ))}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 30,
                      background: Colors.primary,
                      p: 3,
                      display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" },
                      flexDirection: "column",
                      gap: 1
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5
                      }}
                    >
                      <Typography variant="body2" sx={{ fontSize: "13px", fontFamily: "Urbanist", fontWeight: 500, color: Colors.white }}>Saturday</Typography>
                      <Typography variant="body2" sx={{ fontSize: "13px", fontFamily: "Urbanist", fontWeight: 900, color: Colors.white }}>09.00 am - 20.00 pm</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5
                      }}
                    >
                      <Typography variant="body2" sx={{ fontSize: "13px", fontFamily: "Urbanist", fontWeight: 500, color: Colors.white }}>Thursday</Typography>
                      <Typography variant="body2" sx={{ fontSize: "13px", fontFamily: "Urbanist", fontWeight: 900, color: Colors.white }}>09.00 am - 20.00 pm</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    top: 0,
                    right: 30,
                    background: Colors.primary,
                    p: 3,
                    display: { xl: "none", lg: "none", md: "none", sm: "none", xs: "flex" },
                    flexDirection: "column",
                    gap: 1
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5
                    }}
                  >
                    <Typography variant="body2" sx={{ fontSize: "13px", fontFamily: "Urbanist", fontWeight: 500, color: Colors.white }}>Saturday</Typography>
                    <Typography variant="body2" sx={{ fontSize: "13px", fontFamily: "Urbanist", fontWeight: 900, color: Colors.white }}>09.00 am - 20.00 pm</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5
                    }}
                  >
                    <Typography variant="body2" sx={{ fontSize: "13px", fontFamily: "Urbanist", fontWeight: 500, color: Colors.white }}>Thursday</Typography>
                    <Typography variant="body2" sx={{ fontSize: "13px", fontFamily: "Urbanist", fontWeight: 900, color: Colors.white }}>09.00 am - 20.00 pm</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default Contact