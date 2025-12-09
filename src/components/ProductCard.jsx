import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function ProductCard({ name, price, img }) {
  return (
    <Card sx={{ background: "#1e1e1e", border: "1px solid #333" }}>
      <CardMedia component="img" height="180" image={img} />

      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography sx={{ opacity: 0.7 }}>{price}</Typography>

        <Button variant="outlined" sx={{ mt: 2 }} fullWidth>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
export default ProductCard;
