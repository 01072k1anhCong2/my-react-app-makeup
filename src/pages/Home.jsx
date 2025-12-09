import { Container, Grid, Typography, Box, Paper, Button } from "@mui/material";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const items = [
    { name: "Luxury Lipstick", price: "$29", img: "https://i.imgur.com/22qH5UD.jpg" },
    { name: "Blush Pink Rose", price: "$35", img: "https://i.imgur.com/SMe0Qyh.jpg" },
    { name: "Diamond Highlighter", price: "$49", img: "https://i.imgur.com/8vZV7lT.jpg" },
    { name: "Luxury Lipstick", price: "$29", img: "https://i.imgur.com/22qH5UD.jpg" },
    { name: "Blush Pink Rose", price: "$35", img: "https://i.imgur.com/SMe0Qyh.jpg" },
    { name: "Diamond Highlighter", price: "$49", img: "https://i.imgur.com/8vZV7lT.jpg" }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: "grey.100" }}>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {items.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* New Arrivals */}
      <Container sx={{ mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: "grey.100" }}>
          New Arrivals
        </Typography>
        <Grid container spacing={3}>
          {items.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx + 100}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          mt: 10,
          py: 8,
          bgcolor: "grey.900",
          color: "grey.100",
          textAlign: "center",
          borderRadius: 2
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Ready to Explore Makeup Beauty?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Discover our full collection of luxury cosmetics and elevate your beauty routine.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "linear-gradient(45deg, #9c27b0, #e91e63)",
            fontWeight: "bold",
            py: 1.2,
            px: 4,
            borderRadius: 2
          }}
        >
          Shop Now
        </Button>
      </Box>

      {/* Testimonials Section */}
      <Container sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, color: "grey.100", textAlign: "center" }}>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 3, bgcolor: "grey.800", color: "grey.200", borderRadius: 2 }}>
              <Typography variant="body1">
                "Absolutely love these products! The quality is amazing and they make me feel confident every day."
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold" }}>
                – Sarah L.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 3, bgcolor: "grey.800", color: "grey.200", borderRadius: 2 }}>
              <Typography variant="body1">
                "Makeup Beauty has transformed my daily routine. Everything is so elegant and long-lasting!"
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold" }}>
                – Emily R.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 3, bgcolor: "grey.800", color: "grey.200", borderRadius: 2 }}>
              <Typography variant="body1">
                "The products are top-notch and the service is fantastic. Highly recommended!"
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold" }}>
                – Jessica K.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
