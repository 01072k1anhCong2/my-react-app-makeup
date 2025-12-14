import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

function Products() {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900",
      name: "Luxury Velvet Lipstick",
      desc: "Son lì cao cấp với kết cấu mịn, bám màu lâu và không khô môi.",
      price: "19.99"
    },
    {
      img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=900",
      name: "Natural Glow Blush",
      desc: "Phấn má hồng tạo hiệu ứng căng bóng tự nhiên, phù hợp mọi tone da.",
      price: "24.99"
    },
    {
      img: "https://images.unsplash.com/photo-1589987607627-616cac2c2c51?q=80&w=900",
      name: "Professional Makeup Kit",
      desc: "Bộ trang điểm chuyên nghiệp dành cho makeup artist và cá nhân.",
      price: "49.99"
    },
    {
      img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=900",
      name: "Matte Nude Lipstick",
      desc: "Tông nude sang trọng, lý tưởng cho trang điểm hằng ngày.",
      price: "21.99"
    },
    {
      img: "https://images.unsplash.com/photo-1583241802625-5b5b38d8ec15?q=80&w=900",
      name: "Soft Pink Blush",
      desc: "Gam hồng dịu nhẹ giúp gương mặt tươi tắn tự nhiên.",
      price: "22.99"
    },
    {
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=900",
      name: "Complete Beauty Set",
      desc: "Bộ mỹ phẩm đầy đủ cho phong cách makeup chuyên nghiệp.",
      price: "59.99"
    }
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0b0b0b, #000)",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: { xs: "2.2rem", md: "3rem" },
          textAlign: "center",
          mb: 2,
          letterSpacing: 1,
        }}
      >
        Our Products
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "grey.400",
          textAlign: "center",
          maxWidth: "620px",
          mx: "auto",
          mb: 8,
          fontSize: "1rem",
        }}
      >
        Khám phá bộ sưu tập mỹ phẩm cao cấp được chọn lọc kỹ lưỡng,
        mang đến vẻ đẹp tinh tế và chuyên nghiệp cho mọi phong cách trang điểm.
      </Typography>

      {/* Grid */}
      <Grid container spacing={4}>
        {products.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
