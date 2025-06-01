'use client';

import React, { useEffect, useState, useRef } from 'react';
import '@fontsource/outfit';

const CircularProgress = ({ percentage = 99, size = 220, strokeWidth = 2, duration = 1000 }) => {
  const radius = (size - strokeWidth) / 2;
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
    <div style={{ textAlign: 'center' }} ref={containerRef}>
      <svg width={size} height={size}>
        <circle
          stroke="#eee"
          fill="#f8f8f8"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="red"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            transition: `stroke-dashoffset ${duration}ms ease-out`,
          }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="40"
          fontWeight="bold"
          fill="#000"
          style={{ fontFamily: 'Outfit' }}
        >
          {percentage}%
        </text>
      </svg>
      <div style={{ marginTop: 5, fontSize: 12 }}>{percentage}% Kundnöjhet</div>
    </div>
  );
};

export default CircularProgress;
