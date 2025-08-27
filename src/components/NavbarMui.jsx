import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

export default function NavbarMui() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language || "en");

  const handleLang = (ev) => {
    const v = ev.target.value;
    setLang(v);
    i18n.changeLanguage(v);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%", gap: 2 }}>
        {/* Clickable Title */}
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            fontWeight: 800,
            background: "linear-gradient(90deg,#0ea5e9,#06b6d4)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Satyam • SR
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Nav Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button href="#about">{t("nav.about")}</Button>
          <Button href="#experience">{t("nav.experience")}</Button>
          <Button href="#skills">{t("nav.skills")}</Button>
          <Button href="#aiexpertise">AI Expertise</Button>
          <Button href="#contact">{t("nav.contact")}</Button>
        </Box>

        {/* Language select */}
        <Select
          size="small"
          value={lang}
          onChange={handleLang}
          sx={{ minWidth: 90 }}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="hi">हिन्दी</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
}
