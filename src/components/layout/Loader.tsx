"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("tam-portfolio-loader");
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sessionStorage.setItem("tam-portfolio-loader", "true");
    const showTimer = window.setTimeout(() => setVisible(true), 0);
    const hideTimer = window.setTimeout(() => setVisible(false), 1150);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label="Loading Tam Hoang Tran portfolio"
    >
      <motion.div className="loader-grid" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 1.1, delay: index * 0.025, repeat: Infinity }}
          />
        ))}
      </motion.div>
      <div>
        <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Tam Hoang Tran
        </motion.p>
        <motion.div className="loader-bar" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} />
      </div>
    </motion.div>
  );
}
