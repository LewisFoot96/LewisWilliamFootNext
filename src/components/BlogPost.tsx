import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function BlogPost() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        Great North Run - 2025
      </Typography>
      <Typography variant="body1">
        I took part in the Great North Run.
      </Typography>
      <Image
        src="images/great-north-run.jpg"
        width={200}
        height={150}
        alt="Post 1"
      />
    </Box>
  );
}
