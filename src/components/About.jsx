import { useTranslation, Trans } from "react-i18next";
import { profile } from "../data/resumeData";
import { calculateExperience } from "../utils/experience";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function About() {
  const { t } = useTranslation();
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
            <Trans
              i18nKey="about.body"
              values={{ years, months, days }}
              components={{ strong: <strong /> }}
            />
          </Typography>

          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2">{t("nav.contact")}</Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {profile.phone}
            </Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                component="a"
                href="/SatyamRathore_Resume.pdf"
                download
              >
                {t("hero.cta")}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </section>
  );
}
