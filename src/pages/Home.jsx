import { Container, Grid, Typography, Box, Paper, Button } from "@mui/material";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const items = [
    { name: "Luxury Lipstick", price: "$29", img: "/public/demo_1.png" },
    { name: "Blush Pink Rose", price: "$35", img: "/public/demo_2.png" },
    { name: "Diamond Highlighter", price: "$49", img: "/public/demo_3.png" },
    { name: "Luxury Lipstick", price: "$29", img: "/public/demo_4.png" },
    { name: "Blush Pink Rose", price: "$35", img: "/public/demo_5.png" },
    { name: "Diamond Highlighter", price: "$49", img: "/public/demo_6.png" }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
<Container
  maxWidth={false}
  sx={{
    mt: 2,
    position: "relative",      
    backgroundImage: "url('/public/anh_bia_1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    px: { xs: 2, md: 5 }, 
    color: "white",
    overflow: "hidden",
  }}
>
  {/* Overlay tối */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.4)",
      zIndex: 1,
    }}
  />

  {/* Nội dung phía trên overlay */}
  <Box sx={{ position: "relative", zIndex: 2, py: 4 }}>
    {/* Tiêu đề chính */}
    <Typography 
      variant="h4" 
      fontWeight="bold" 
      sx={{ 
        mb: 1, 
        color: "grey.100",
        textAlign: "left",
      }}
    >
      Featured Products
    </Typography>

    {/* Mô tả */}
    <Typography 
      variant="body1" 
      sx={{
        mb: 6,
        color: "grey.300",
        textAlign: "left",
        maxWidth: 800,
      }}
    >
      Khám phá bộ sưu tập các sản phẩm trang điểm
       cao cấp của chúng tôi, được thiết kế để tôn
        vinh vẻ đẹp tự nhiên của bạn. Từ son môi, phấn má, 
        đến các sản phẩm chăm sóc da, mỗi món đồ đều mang đến 
        trải nghiệm sang trọng, tinh tế và phong cách riêng biệt.
        Hãy để bản thân tỏa sáng với những sản phẩm phù hợp với mọi dịp.
    </Typography>

    {/* Grid sản phẩm */}
    <Grid 
      container 
      spacing={3} 
      justifyContent="center"
    >
      {items.map((item, idx) => (
        <Grid 
          item 
          xs={12}    // mobile: 1 cột
          sm={6}     // tablet: 2 cột
          md={4}     // desktop: 3 cột
          key={idx}
          sx={{
            display: "flex",
            justifyContent: "center", 
            my:10
          }}
        >
          <ProductCard {...item} />
        </Grid>
      ))}
    </Grid>
  </Box>
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
            bgcolor: "linear-gradient(45deg, #b8aeb9ff, #e91e63)",
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
