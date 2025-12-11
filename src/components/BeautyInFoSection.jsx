import { Box, Typography,Grid } from "@mui/material";

function BeautyInfoSection() {

  
  return (
  <Box
      sx={{
        maxWidth:{xs:"90%",md:"70%"},
        textAlign: "left",
        py: 6,
        px: 2,
        margin: "0 auto",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Cinzel', serif",
          fontWeight: "700",
          letterSpacing: "3px",
          textTransform: "uppercase",
          mb: 4,
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
          color: "black",
          maxWidth: "70%",
        }}
      >
        Cart Makeup Beauty Services và lời chào thân ái nhất
      </Typography>

      {/* Sub sections */}
<Grid container spacing={2} sx={{ color:"black", }}>
  
  <Grid 
    item xs={12} 
    sm={6} 
    md={4} 
    sx={{
    maxWidth:{xs:"100%",sm:"30%", md:"30%"}
  }}>
    <Typography
      variant="h5"
      sx={{ fontWeight: 700, wordBreak: "break-word" }}
    >
      Giới thiệu về Cart Makeup Academy– Nơi khởi nguồn vẻ đẹp tự tin
    </Typography>

    <Typography sx={{ lineHeight: 1.6, wordBreak: "break-word", whiteSpace: "normal" }}>
      Cart Makeup Academy là học viện đào tạo makeup chuyên nghiệp,
       được thành lập với sứ mệnh lan tỏa giá trị của cái đẹp đến mọi người. 
       Chúng tôi tin rằng mỗi gương mặt đều có nét cuốn hút riêng, và nhiệm vụ 
       của nghệ sĩ makeup là đánh thức vẻ đẹp ấy một cách tinh tế và chuẩn xác nhất.

      Với đội ngũ giảng viên giàu kinh nghiệm trong lĩnh vực trang điểm cá nhân
       và trang điểm chuyên nghiệp, Cart Makeup Academy không chỉ mang đến kiến 
       thức mà còn truyền cảm hứng sáng tạo cho từng học viên.
    </Typography>
  </Grid>

  <Grid 
    item xs={12} 
    sm={6} 
    md={4} 
    sx={{
    maxWidth:{xs:"100%",sm:"30%", md:"30%"}
  }}>
    <Typography
      variant="h5"
      sx={{ fontWeight: 700, wordBreak: "break-word" }}
    >
      Dịch vụ Makeup Chuyên Nghiệp – Kiến tạo phong cách cho ngày đặc biệt
    </Typography>

    <Typography sx={{ lineHeight: 1.6, wordBreak: "break-word", whiteSpace: "normal" }}>
      Cart Makeup cung cấp dịch vụ trang điểm chuyên nghiệp dành 
      cho các dịp quan trọng như cưới hỏi, sự kiện, kỷ yếu, chụp ảnh 
      nghệ thuật và trang điểm cá nhân. Chúng tôi hiểu rằng makeup không 
      chỉ là làm đẹp bên ngoài, mà còn là cách giúp bạn tỏa sáng, tự 
      tin và thể hiện phong cách riêng.

      Bằng sự am hiểu về xu hướng makeup hiện đại,
       đội ngũ chuyên viên của chúng tôi luôn biết cách 
       lựa chọn tone màu, phong cách và chất liệu phù hợp nhất với từng gương mặt, từng màu da và từng sở thích riêng. 
    </Typography>
  </Grid>


  <Grid 
    item xs={12} 
    sm={6} 
    md={4} 
    sx={{
    maxWidth:{xs:"100%",sm:"30%", md:"30%"}
  }}>
    <Typography
      variant="h5"
      sx={{ fontWeight: 700, wordBreak: "break-word" }}
    >
      Nail Art & Chăm Sóc Móng – Sáng tạo từ những điều nhỏ nhất
    </Typography>

    <Typography sx={{ lineHeight: 1.6, wordBreak: "break-word", whiteSpace: "normal" }}>
      Dịch vụ Nail tại Cart Makeup được xây dựng với mong muốn mang
       đến cho khách hàng trải nghiệm làm đẹp tinh tế và thư giãn tuyệt 
       đối. Chúng tôi cung cấp đầy đủ các dịch vụ như sơn gel, đắp móng,
        vẽ nail nghệ thuật, chăm sóc móng và phục hồi móng hư tổn.

      Các mẫu nail được thiết kế theo nhiều phong cách đa dạng: từ nhẹ nhàng – tinh tế,
       trẻ trung – dễ thương, đến sang trọng – cá tính. Đội ngũ kỹ thuật viên khéo léo,
        nhiều năm kinh nghiệm luôn tỉ mỉ trong từng đường nét, đảm bảo mang đến bộ móng
         bền đẹp và an toàn cho khách hàng.
    </Typography>
  </Grid>


</Grid>


    
    </Box>
  );
}
export default BeautyInfoSection;