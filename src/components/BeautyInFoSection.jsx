import { Box, Typography,Grid } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import {useLanguage} from "../context/LanguageContext";
import Reveal from "../components/Reveal";
function BeautyInfoSection() {

  const {t} = useLanguage();

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
      <Reveal>
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
        {t("aisatsu")}
      </Typography>
      </Reveal>

      {/* Sub sections */}

<Grid container spacing={2} sx={{ color:"black", }}>

  <Grid 
    item xs={12} 
    sm={6} 
    md={4} 
    sx={{
    maxWidth:{xs:"100%",sm:"30%", md:"30%"}
  }}>

    <Reveal>
    <Typography
      variant="h5"
      sx={{ fontWeight: 700, wordBreak: "break-word" }}
    >
      {t("aisatsuItem_1")}
    </Typography>
    </Reveal>

    <Reveal>
    <Typography sx={{ lineHeight: 1.6, wordBreak: "break-word", whiteSpace: "normal" }}>
      {t("ContentItem_1")}
    </Typography>
    </Reveal>

  </Grid>



  <Grid 
    item xs={12} 
    sm={6} 
    md={4} 
    sx={{
    maxWidth:{xs:"100%",sm:"30%", md:"30%"}
  }}>

    <Reveal>
    <Typography
      variant="h5"
      sx={{ fontWeight: 700, wordBreak: "break-word" }}
    >
      {t("aisatsuItem_2")}
    </Typography>
    </Reveal>

    <Reveal>
    <Typography sx={{ lineHeight: 1.6, wordBreak: "break-word", whiteSpace: "normal" }}>
      {t("ContentItem_2")}
    </Typography>
    </Reveal>

  </Grid>



  <Grid 
    item xs={12} 
    sm={6} 
    md={4} 
    sx={{
    maxWidth:{xs:"100%",sm:"30%", md:"30%"}
  }}>
    <Reveal>
    <Typography
      variant="h5"
      sx={{ fontWeight: 700, wordBreak: "break-word" }}
    >
      {t("aisatsuItem_3")}
    </Typography>
    </Reveal>

    <Reveal>
    <Typography sx={{ lineHeight: 1.6, wordBreak: "break-word", whiteSpace: "normal" }}>
      {t("ContentItem_3")}
    </Typography>
    </Reveal>

  </Grid>



</Grid>

    
  </Box>
  );
}
export default BeautyInfoSection;