'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Box, CircularProgress } from '@mui/material';
import ThemeRegistry from "./../lib/theme_registry";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Colors from '../assets/styles';
import "./../globals.css";

export default function MainTemplate({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <ThemeRegistry>
      {loading ? (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}
        >
          <CircularProgress sx={{ color: Colors.primary }} />
        </Box>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </ThemeRegistry>
  );
}