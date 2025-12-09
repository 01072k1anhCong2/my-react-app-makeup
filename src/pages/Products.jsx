import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

function Products() {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
      name: "Lipstick",
      price: "19.99"
    },
    {
      img: "https://images.unsplash.com/photo-1583241802625-5b5b38d8ec15",
      name: "Blush",
      price: "24.99"
    },
    {
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
      name: "Makeup Kit",
      price: "49.99"
    },
    {
      img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
      name: "Lipstick",
      price: "19.99"
    },
    {
      img: "https://images.unsplash.com/photo-1583241802625-5b5b38d8ec15",
      name: "Blush",
      price: "24.99"
    },
    {
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
      name: "Makeup Kit",
      price: "49.99"
    }
  ];

  return (
    <Box sx={{ px: 4, py: 6, color: "grey.200" }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 5,
          color: "grey.100"
        }}
      >
        All Products
      </Typography>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {items.map((p, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <ProductCard img={p.img} name={p.name} price={p.price} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default Products;