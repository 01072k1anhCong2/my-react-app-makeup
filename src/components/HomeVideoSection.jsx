import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Reveal from "../components/Reveal";

const HomeVideoSection = () => {
  const [playing, setPlaying] = useState(false);

  // Kiểm tra device touch (mobile/tablet)
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice()) setPlaying(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice()) setPlaying(false);
  };

  const handleClick = () => {
    if (isTouchDevice()) setPlaying(!playing);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#000",      // nền đen full
        py: { xs: 9, sm: 12 }, // padding trên/dưới responsive
        textAlign: "center",
      }}
    >
      <Reveal>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#fff", px: 2 }} // chữ trắng, padding x responsive
      >
        Video Giới Thiệu Cart Makeup
      </Typography>
      </Reveal>

      <Reveal>
      <Box
        sx={{
          position: "relative",
          width: { xs: "95%", sm: "80%" }, // 95% mobile, 80% desktop
          mx: "auto",
          pt: "56.25%", // giữ tỉ lệ 16:9
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Thumbnail */}
        {!playing && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(https://img.youtube.com/vi/xTj2vJ8AAlg/hqdefault.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "0.3s",
            }}
          />
        )}

        {/* Video iframe */}
        {playing && (
          <iframe
            src={`https://www.youtube.com/embed/xTj2vJ8AAlg?autoplay=1&mute=1&loop=1&playlist=xTj2vJ8AAlg&controls=1`}
            title="Video Giới Thiệu Cart Makeup"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </Box>
      </Reveal>
    </Box>
  );
};

export default HomeVideoSection;
