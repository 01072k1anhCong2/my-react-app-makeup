import { Box, Typography } from "@mui/material";
import { useState,useEffect } from "react";
import anhbia from "../assets/anh_bia.png";

function Hero() {
  const [expanded, setExpanded] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  // Tự thu nhỏ khi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // scroll xuống hơn 50px → thu nhỏ
        setExpanded(false);
      } else {
        setExpanded(true); // scroll lên trên → mở lại
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      sx={{
        height: expanded ? { xs: "120vh", md: "100vh" } : { xs: "50vh", md: "80vh" },
        transition: "0.5s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        px: { xs: 2, sm: 4 }, 
        pt: { xs: 4, sm: 6 }, 
        position: "relative",
        }}
     >
         <Box
          sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${anhbia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: loaded ? "brightness(70%)" : "brightness(100%)",
          transition: "filter 1s ease",
          zIndex: -1
          }}
        />
      {/* Tiêu đề */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          mb: 2,
          mt: { xs: expanded ? -20 : 15, md:0  },
          transition: "margin-top 1.5s ease", 
          textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          fontFamily: "Cinzel, serif",
          letterSpacing: { xs: "2px", md: "4px" },  // responsive letter spacing
          textTransform: "uppercase",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // responsive fontSize
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
          fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" }, // responsive fontSize
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
          maxWidth: { xs: "90%", md: "600px" },
          mb: 3,
          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
          textAlign: "center",
          fontSize: { xs: "0.85rem", sm: "1rem", md: "1.05rem" },
          opacity: loaded && expanded ? 1 : 0,
          transform: loaded && expanded ? "translateY(0)" : "translateY(-20px)",
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
          mt:{ xs: expanded ? 0 : -10, md: 5 },
          cursor: "pointer",
          fontWeight: "bold",
          transition: "transform 0.5s ease",
          transform: expanded ? "translateY(0)" : "translateY(-10px)",
          position: "relative",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          opacity: loaded ? 1 : 0,
          transform: loaded && expanded ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1.5s ease, transform 2s ease",

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
          },
        }}
      >
        {expanded ? "Thu nhỏ" : "Xem thêm"}
      </Typography>
    </Box>
  );
}

export default Hero;
