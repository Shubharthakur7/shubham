import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

interface Project {
  name: string;
  desc: string;
  tech: string;
  url?: string;
}

const projects: Project[] = [
  {
    name: "Firsthand",
    desc: "Education Platform",
    tech: "React, TypeScript, MUI, GraphQL, AWS",
    url: "https://firsthand.co",
  },
  {
    name: "CodeForgePrep",
    desc: "Mock interview platform",
    tech: "Next.js, MongoDB, Zustand",
    url: "https://codeforgeprep.com",
  },
  {
    name: "Claim Processing Platform",
    desc: "Hospital claims workflow for automation.",
    tech: "React, .NET, Node.js",
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
        Projects
      </Typography>

      {/* ✔ CSS GRID = perfect layout + no errors */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr", // 4 cards on laptop
          },
        }}
      >
        {projects.map((p) => (
          <Card
            key={p.name}
            elevation={3}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold">
                {p.name}
              </Typography>

              <Typography
                variant="body2"
                mt={1}
                sx={{ minHeight: 60 }}
              >
                {p.desc}
              </Typography>

              <Typography
                variant="caption"
                display="block"
                mt={2}
                color="text.secondary"
              >
                {p.tech}
              </Typography>

              {p.url && (
                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 2, display: "block", fontWeight: 500 }}
                >
                  Visit Project
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
