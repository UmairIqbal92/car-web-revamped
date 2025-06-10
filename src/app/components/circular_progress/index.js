'use client';

import React, { useEffect, useState, useRef } from 'react';
import '@fontsource/outfit';
import { Box, useMediaQuery, useTheme } from '@mui/material';


const CircularProgress = ({ percentage = 99, size = 220, strokeWidth = 2, duration = 1000 }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  const isLg = useMediaQuery(theme.breakpoints.down("xl"));

  const responsizeSize = isXs ? size - 120 : isSm ? size - 80 : isMd ? size - 40 : size

  const radius = (responsizeSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(circumference);
  const containerRef = useRef(null);

  const animate = () => {
    setOffset(circumference);
    requestAnimationFrame(() => {
      setOffset(circumference * (1 - percentage / 100));
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          setOffset(circumference);
        }
      },
      { threshold: 0.5 }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);

      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight &&
        rect.bottom >= 0;
      if (inView) {
        animate();
      }
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [circumference, percentage]);

  return (
    <Box
      component={"div"}
      sx={{
        textAlign: 'center',
        transition: 'filter 0.3s ease-in-out',
        ":hover": {
          filter: 'drop-shadow(0 0 5px rgba(255, 0, 0, 0.6))',
        }
      }}
      ref={containerRef}
    >
      <svg width={responsizeSize} height={responsizeSize}>
        <circle
          stroke="#eee"
          fill="#f8f8f8"
          strokeWidth={strokeWidth}
          r={radius}
          cx={responsizeSize / 2}
          cy={responsizeSize / 2}
        />
        <Box
          component={"circle"}
          stroke="red"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={responsizeSize / 2}
          cy={responsizeSize / 2}
          transform={`rotate(-90 ${responsizeSize / 2} ${responsizeSize / 2})`}
          style={{
            transition: `stroke-dashoffset ${duration}ms ease-out`,
          }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={isXs ? "20" : isSm ? "20" : isMd ? "30" : isLg ? "40" : "40"}
          fontWeight="bold"
          fill="#000"
          style={{ fontFamily: 'Outfit' }}
        >
          {percentage}%
        </text>
      </svg>
      <div style={{ marginTop: 5, fontSize: 12 }}>{percentage}% Kundnöjhet</div>
    </Box>
  );
};

export default CircularProgress;
