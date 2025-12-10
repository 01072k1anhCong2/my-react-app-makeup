import { Box, Typography } from "@mui/material";

function ProductCard({ name, price, img }) {
  return (
    <Box
      sx={{
        py: 2,
        bgcolor: "transparent",  // box trong suốt
        "&:hover img": {
          transform: "scale(1.05)",  // zoom ảnh khi hover
          transition: "transform 0.5s ease",
        },
        "&:hover .cardContent": {
          transform: "translateY(-5px)", // nâng nhẹ tên + giá khi hover
          transition: "transform 0.3s ease",
        },
      }}
    >
      {/* Ảnh */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <img
          src={img}
          alt={name}
          style={{
            width: "250px",
            height: "400px",      
            objectFit: "cover",
            display: "block",
            borderRadius: 0,       // border vuông
            transition: "transform 0.5s ease",
          }}
        />
      </Box>

      {/* Tên và giá */}
      <Box
        className="cardContent"
        sx={{
          mt: 1,
          textAlign: "center",
          color: "white",
          transition: "transform 0.3s ease",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body1">{price}</Typography>
      </Box>
    </Box>
  );
}

export default ProductCard;
