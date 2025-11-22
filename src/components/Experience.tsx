"use client";

import {
  Box,
  Typography,
  Card,
  Stack,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "Evolent Health",
    role: "Senior Frontend Engineer",
    period: "08/2023 – Present",
    points: [
      "Leading frontend development for healthcare platforms.",
      "Collaborating with backend, UX, and product teams.",
      "Optimized UI performance for claim processing platforms.",
      "Mentoring junior developers on best practices.",
    ],
  },
  {
    company: "Sakhatech Information Systems Pvt Ltd",
    role: "Senior Software Developer",
    period: "10/2021 – 08/2023",
    points: [
      "Led a team of 8 frontend developers for architecture & delivery.",
      "Built education platforms used by top institutions (Harvard, MIT).",
      "Improved UI scalability and design systems for enterprise products.",
    ],
  },
  {
    company: "Neellion Media",
    role: "Software Developer",
    period: "08/2019 – 10/2021",
    points: [
      "Developed ecommerce & VR shopping platforms.",
      "Improved user satisfaction by 20% through UX/UI improvements.",
      "Built responsive high-traffic UIs using React & Material UI.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <Box id="experience" sx={{ py: 10, padding: "10px" }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={6}
        color="text.primary"
      >
        Experience
      </Typography>

      <Stack spacing={4} alignItems="center">
        {experience.map((exp, i) => (
          <Box key={i} width="100%">
            <Card
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h5" fontWeight={700} mb={1}>
                {exp.role}
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                fontWeight={500}
                mb={2}
              >
                {exp.company} • {exp.period}
              </Typography>

              <Stack spacing={1.5}>
                {exp.points.map((p, idx) => (
                  <Typography key={idx} variant="body1" lineHeight={1.6}>
                    • {p}
                  </Typography>
                ))}
              </Stack>
            </Card>

            {/* Down Arrow Between Cards */}
            {i !== experience.length - 1 && (
              <Box
                display="flex"
                justifyContent="center"
                mt={2}
                mb={2}
                sx={{ opacity: 0.4 }}
              >
                <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
              </Box>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
