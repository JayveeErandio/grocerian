import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CartLogo({ animation, className }) {
  const variants = {
    seek: {
      skewX: [0, 4, 8, 8, 0, -8, -8, -4, 0],
      translateX: [0, -3, -5, -5, 0, 5, 5, 3, 0],
      translateY: [0, 5, 0, 0, 5, 0, 0, 5, 0],
      scaleY: [1, 0.8, 1, 1, 0.8, 1, 1, 0.8, 1],
      transition: {
        duration: 1.5,
        ease: "linear",
        times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.8, 0.9, 1],
      },
    },
  };

  return (
    <svg
      className={className}
      strokeLinejoin="round"
      strokeLinecap="round"
      viewBox="-9 -6 116 118"
      width="70px"
      height="70px"
    >
      <motion.g
        id="body"
        variants={variants}
        animate={animation}
        style={{
          transformOrigin: "center",
          transformBox: "fill-box",
          transition: "none",
        }}
      >
        <path
          strokeWidth="6.4"
          stroke="#333"
          d="M10 20 H 20 L 30 75 H 80 M 22 31 H 84 L 75 66 H 28"
          fill="none"
        />
        <g>
          <circle id="cir" r="5" cx="30" cy="85" fill="#333" />
          <use href="#cir" x="47" />
        </g>
        <g>
          <g>
            <g>
              <use href="#cir" x="12" y="-40" />
              <circle r="1.5" cx="43.5" cy="43.5" fill="white" />
            </g>
            <g>
              <use href="#cir" x="33" y="-40" />
              <circle r="1.5" cx="64.5" cy="43.5" fill="white" />
            </g>
          </g>
        </g>
      </motion.g>
    </svg>
  );
}
