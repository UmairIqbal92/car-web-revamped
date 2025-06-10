'use client';

import React from 'react';
import { Button } from '@mui/material';
import Colors from '@/app/assets/styles';
import "@fontsource/outfit";

function PrimaryButton({ startIcon, endIcon, title, color, boxShadow, fullWidth, ...props }) {
  return (
    <Button
      fullWidth={fullWidth}
      variant={"contained"}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        flexShrink: 1,
        minWidth: { xl: "200px", lg: "200px", md: "140px", sm: "120px", xs: "80px" },
        background: color ? color : Colors.deep_blue,
        boxShadow: boxShadow ? boxShadow : "none",
        textTransform: "capitalize",
        fontFamily: "Outfit",
        color: Colors.white,
        fontWeight: 500,
        borderRadius: 0,
        p: "15px 20px",
        ":hover": {
          background: color ? Colors.deep_blue : Colors.primary,
          boxShadow: boxShadow ? boxShadow : "none"
        }
      }}
      {...props}
    >
      {title}
    </Button>
  )
}

export default PrimaryButton