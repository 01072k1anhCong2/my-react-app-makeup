import { Box, Typography, Grid } from "@mui/material";
import Reveal from "../components/Reveal";

 function BeautyServiceSection({ title, services }) {
  return (
    <Box
      sx={{
        py: {xs:15,md:20},
        px: 2,
        backgroundColor: "black", // NỀN ĐEN
      }}
    >
      {/* Title */}
      <Reveal>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: 4,
          color: "white",
        }}
      >
        {title}
      </Typography>
      </Reveal>
      {/* Image Grid */}
      <Grid 
      container 
      spacing={3}
      justifyContent="center"
      alignItems="flex-start"
      >
        {services.map((item, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            
            <Reveal>
            <Box
              sx={{
                position: "relative",
                width: "100%",

                /* Vuông và responsive */
                height: {
                  xs: "220px",  
                  sm: "260px",
                  md: "350px",   
                },

                overflow: "hidden",
                borderRadius: "0px", 
                boxShadow: "0 4px 12px rgba(255,255,255,0.1)",

                "&:hover .overlay": {
                  opacity: { xs: 1, md: 1 },
                },
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",

                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: { md: "scale(1.08)" },
                  },
                }}
              />

              {/* OVERLAY TEXT */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.5)",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",

                  color: "white",
                  textAlign: "center",

                  opacity: { xs: 1, md: 0 },
                  transition: "opacity 0.4s ease",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "700", mb: 1 }}>
                  {item.name}
                </Typography>
              </Box>
            </Box>
            </Reveal>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BeautyServiceSection;