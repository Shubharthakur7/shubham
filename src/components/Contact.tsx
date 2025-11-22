"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Link,
  Stack,
  useTheme,
  Avatar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function ContactSection() {
  const theme = useTheme();

  return (
    <Box id="contact" mt={10} sx={{ scrollMarginTop: "100px" }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={5}
        color="text.primary"
      >
        Contact
      </Typography>

      <Card
        elevation={3}
        sx={{
          overflow: "hidden",
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        {/* 🔥 Replace Grid with CSS Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          }}
        >
          {/* Left Gradient Panel */}
          <Box
            sx={{
              background: "linear-gradient(to bottom right, #2563eb, #7c3aed)",
              p: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <Box>
              <Avatar
                src="/shubham_singh.jpeg"
                alt="Shubham Singh"
                sx={{
                  width: { xs: 120, md: 150 },
                  height: { xs: 120, md: 150 },
                  mx: "auto",
                  mb: 2,
                  border: "4px solid white",
                  boxShadow: 3,
                }}
              />

              <Typography variant="h5" fontWeight="bold">
                Shubham Singh
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Senior Frontend Engineer
              </Typography>
            </Box>
          </Box>

          {/* Right Content Panel */}
          <Box>
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2}>
                  <EmailIcon color="primary" sx={{ mt: 0.5 }} />
                  <Link
                    href="mailto:rshubhams12@gmail.com"
                    underline="hover"
                    sx={{ fontSize: 18 }}
                  >
                    rshubhams12@gmail.com
                  </Link>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <PhoneIcon color="primary" sx={{ mt: 0.5 }} />
                  <Link href="tel:+918218841801" underline="hover" sx={{ fontSize: 18 }}>
                    +91-8218841801
                  </Link>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
                  <Typography fontSize={18}>
                    52, 8th Cross, R K Layout, Padmanabhanagar, Bangalore – 560070
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <LinkedInIcon color="primary" sx={{ mt: 0.5 }} />
                  <Link
                    href="https://www.linkedin.com/in/shubham-singh-793a41169/"
                    target="_blank"
                    underline="hover"
                    sx={{ fontSize: 18 }}
                  >
                    linkedin.com/in/shubham-singh-793a41169
                  </Link>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <GitHubIcon color="primary" sx={{ mt: 0.5 }} />
                  <Link
                    href="https://github.com/shubharthakur7"
                    target="_blank"
                    underline="hover"
                    sx={{ fontSize: 18 }}
                  >
                    github.com/shubharthakur7
                  </Link>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <TwitterIcon color="primary" sx={{ mt: 0.5 }} />
                  <Link
                    href="https://x.com/cordial_shubh"
                    target="_blank"
                    underline="hover"
                    sx={{ fontSize: 18 }}
                  >
                    @cordial_shubh
                  </Link>
                </Stack>
              </Stack>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
