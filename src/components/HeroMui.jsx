import React from "react";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { profile } from "../data/resumeData";

export default function HeroMui() {
  return (
    <section id="hero">
      <Container maxWidth="lg" sx={{ py: 12, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          <Avatar
            src="/profile.png"
            alt={profile.name}
            sx={{
              width: 160,
              height: 160,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
              border: "4px solid white",
            }}
          />
        </motion.div>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            mt: 4,
            background: "linear-gradient(90deg,#0ea5e9,#06b6d4)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.name}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: "text.secondary" }}>
          {profile.role}
        </Typography>
      </Container>
    </section>
  );
}
