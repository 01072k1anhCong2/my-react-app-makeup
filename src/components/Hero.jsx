import { Box, Typography } from "@mui/material";
import { useState } from "react";
import anhbia from "../assets/anh_bia.png";


function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        height: expanded ? "100vh" : { xs: "50vh", md: "80vh" },
        transition: "0.5s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${anhbia})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        px: 2,
        position: "relative",
      }}
    >
{/* Tiêu đề */}
<Typography
  variant="h3"
  fontWeight="bold"
  sx={{
    mb: 2,
    textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
    fontFamily: "Cinzel, serif",
    letterSpacing: "4px",
    textTransform: "uppercase",
    opacity: 0,
    animation: "slideInLeft 1.2s ease forwards",

    "@keyframes slideInLeft": {
      "0%": { opacity: 0, transform: "translateX(-40px)" },
      "100%": { opacity: 1, transform: "translateX(0)" },
    },
  }}
>
  Discover Your Beauty
</Typography>

{/* Subtitle */}
<Typography
  variant="h6"
  sx={{
    mb: expanded ? 4 : 2,
    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
    opacity: 0,
    animation: "slideInRight 1.2s ease forwards",
    animationDelay: "0.5s", 

    "@keyframes slideInRight": {
      "0%": { opacity: 0, transform: "translateX(40px)" },
      "100%": { opacity: 1, transform: "translateX(0)" },
    },
  }}
>
  Luxury cosmetics for every occasion
</Typography>

{/* Nội dung mở rộng */}
  <Typography
    sx={{
      maxWidth: "600px",
      mb: 3,
      textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
      opacity: 0,
      transform: "translateY(20px)",
      opacity: expanded ? 1 : 0,
      transform: expanded ? "translateY(0)" : "translateY(-20px)",
      transition: "opacity 1s ease, transform 1s ease",
    }}
  >
    Khám phá bộ sưu tập cao cấp của chúng tôi, nơi mỗi sản phẩm được
    tạo ra nhằm tôn vinh vẻ đẹp tự nhiên của bạn. Với thiết kế tinh tế,
    chất lượng vượt trội và phong cách đầy tính thẩm mỹ, chúng tôi mang
    đến cho bạn trải nghiệm làm đẹp sang trọng, giúp bạn tự tin tỏa sáng
    theo cách riêng của mình.
  </Typography>


      {/* Nút chữ See More / See Less */}
      <Typography
        onClick={() => setExpanded(!expanded)}
        sx={{
          mt: 5,
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
          transform: expanded ? "translateY(0)" : "translateY(-90px)",
          transition: "transform 0.5s ease",
          position: "relative",
          "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: -2,
          width: "100%",
          height: "2px",
          bgcolor: "currentColor",
          transformOrigin: "center",
          animation: "shake 1.5s infinite",
    },
          "&:hover": {
            opacity: 0.7,
          }
        }}
      >
        {expanded ? "Thu nhỏ" : "Xem thêm"}
      </Typography>
    </Box>
  );
}

export default Hero;