import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

export default function NavbarMui() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language || "en");

  // Mobile menu state
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleLang = (ev) => {
    const v = ev.target.value;
    setLang(v);
    i18n.changeLanguage(v);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // central nav items to keep DRY
  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.skills"), href: "#skills" },
    { label: "AI Expertise", href: "#aiexpertise" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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

        {/* Desktop nav buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item.href} href={item.href}>
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile menu button (visible on xs / sm) */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="open navigation menu"
            aria-controls={anchorElNav ? "nav-menu" : undefined}
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="nav-menu"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.href}
                component="a"
                href={item.href}
                onClick={handleCloseNavMenu}
              >
                {item.label}
              </MenuItem>
            ))}

            {/* Language selector inside mobile menu */}
            <Box sx={{ px: 2, pt: 1 }}>
              <Select
                size="small"
                value={lang}
                onChange={(ev) => {
                  handleLang(ev);
                  // don't close menu on language change so user can confirm
                }}
                sx={{ minWidth: 120 }}
              >
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="hi">हिन्दी</MenuItem>
              </Select>
            </Box>
          </Menu>
        </Box>

        {/* Language select for desktop (hidden on small screens) */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Select
            size="small"
            value={lang}
            onChange={handleLang}
            sx={{ minWidth: 90 }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="hi">हिन्दी</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
