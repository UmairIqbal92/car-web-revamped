'use client';

import React from 'react';
import { Button } from '@mui/material';
import Colors from '@/app/assets/styles';
import "@fontsource/outfit";

function PrimaryButton({ startIcon, endIcon, title, color, boxShadow, ...props }) {
  return (
    <Button
      variant={"contained"}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        minWidth: "200px",
        width: "auto",
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