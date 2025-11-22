import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        color: "#0d1117",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          fontWeight="700"
          sx={{ fontSize: "1.3rem", letterSpacing: "0.5px" }}
        >
          Shubham Singh
        </Typography>

        <Box>
          {navItems.map((item) => (
            <Button
              key={item}
              href={`#${item.toLowerCase()}`}
              sx={{
                ml: 2,
                color: "#0d1117",
                fontWeight: 600,
                letterSpacing: "0.5px",
                "&:hover": { color: "#1976d2" },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
