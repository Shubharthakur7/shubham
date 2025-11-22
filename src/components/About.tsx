import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: "#f4f6f8", padding: "10px" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>

      <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
        Frontend Engineer with 6+ years of experience designing and delivering
        scalable, high-quality UI solutions using React.js, TypeScript, and
        modern JavaScript. Proven ability to lead cross-functional
        teams—including Frontend, Backend, and QA, while driving performance
        optimization, clean architecture, and business-driven product
        development
      </Typography>
    </Box>
  );
}
