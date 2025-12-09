import { Box, Typography, Button } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "50px",
        background: "linear-gradient(#00000088, #00000088), url(https://i.imgur.com/8pUjv5T.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Glow Your Beauty
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: "450px", opacity: 0.8, mt: 2 }}>
        Makeup cao cấp, sang trọng – tỏa sáng theo phong cách riêng của bạn.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3, width: "200px" }}
      >
        Shop Now
      </Button>
    </Box>
  );
}

export default Hero;