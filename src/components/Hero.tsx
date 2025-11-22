import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box textAlign="center" sx={{ py: 10, backgroundColor: "#f4f6f8", }}>
      <Typography variant="h3" fontWeight="bold">
        Hi, I'm Shubham Singh 👋
      </Typography>

      <Typography variant="h6" color="text.secondary" mt={2}>
        Software Engineer (UI) • 6+ Years Experience
      </Typography>
    </Box>
  );
}
