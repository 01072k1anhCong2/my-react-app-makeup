import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";

const HomeVideoSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
        } else {
          setPlaying(false);
        }
      },
      {
        threshold: 0.6, // 60% section xuất hiện thì phát
      }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#000",
        py: { xs: 9, sm: 12 },
        textAlign: "center",
      }}
    >
      <Reveal>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            px: 2,
            fontWeight: 700,
            fontSize: {
              xs: "2.2rem",
              sm: "2.5rem",
              md: "4rem",
            },
          }}
        >
          Video Giới Thiệu Cart Makeup
        </Typography>
      </Reveal>

      <Reveal>
        <Box
          ref={videoRef}
          sx={{
            position: "relative",
            width: { xs: "95%", sm: "80%" },
            mx: "auto",
            pt: "56.25%", // 16:9
            mt: 4,
          }}
        >
          {playing ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/xTj2vJ8AAlg?autoplay=1&mute=1&playsinline=1&controls=1&rel=0"
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
          ) : (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "url(https://img.youtube.com/vi/xTj2vJ8AAlg/hqdefault.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </Box>
      </Reveal>
    </Box>
  );
};

export default HomeVideoSection;
