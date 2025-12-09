import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 3,
        textAlign: "center",
        bgcolor: "grey.900",
        color: "grey.300",
        mt: 5,
        borderTop: "1px solid #444",
      }}
    >
      <Typography variant="body2">
        © 2025 Makeup Beauty. All rights reserved.
      </Typography>
    </Box>
  );
}
export default Footer;