import { Box, Typography, Stack, Chip } from "@mui/material";

const skills: string[] = [
  "JavaScript",
  "React.js",
  "TypeScript",
  "Redux",
  "Zustand",
  "Next.js",
  "Node.js",
  ".NET",
  "HTML",
  "CSS",
  "Material UI",
  "REST APIs",
  "Git",
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{ py: 8, backgroundColor: "#f4f6f8", padding: "10px" }}
    >
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
        Skills
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        justifyContent="center"
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color="primary"
            variant="outlined"
            sx={{ margin: "10px" }}
          />
        ))}
      </Stack>
    </Box>
  );
}
