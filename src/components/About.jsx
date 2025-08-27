import { useTranslation } from "react-i18next";
import { profile } from "../data/resumeData";
import { calculateExperience } from "../utils/experience";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function About() {
  const { t } = useTranslation();

  // ✅ Set your start date of professional career
  const { years, months, days } = calculateExperience("2022-01-01");

  return (
    <section id="about">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          {t("nav.about")}
        </Typography>

        <Box
          display="grid"
          gap={4}
          gridTemplateColumns={{ xs: "1fr", md: "2fr 1fr" }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.primary", lineHeight: 1.7 }}
          >
            I am a Frontend Developer with{" "}
            <strong>
              {years} years, {months} months and {days} days
            </strong>{" "}
            of experience building responsive, high-performance web applications
            using React.js, JavaScript (ES6+), HTML5, and modern CSS. Skilled in
            UI/UX development, API integration, JWT authentication,
            accessibility, and performance optimization. Experienced in Agile
            teams, writing reusable code, and delivering scalable features.
          </Typography>

          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2">Contact</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <br />
              {profile.phone}
              <br />
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Typography>
          </Paper>
        </Box>
      </Container>
    </section>
  );
}
