import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { FontTitle } from "./Header";
import {useLanguage} from "../context/LanguageContext";
import GTranslateIcon from '@mui/icons-material/GTranslate';


 function LanguageSwitcher({ scrolled,sx }) {
  const { t, setLang } = useLanguage();
  const [anchor, setAnchor] = useState(null);
  return (
    <>
      <Button 
        disableRipple 
        onClick={(e) => setAnchor(e.currentTarget)} 
                sx={{
                  
                  position: "relative",       
                  display: "inline-block",    
                  padding: 0,             
                  color: scrolled ? "black" : "white",
                  backgroundColor: "transparent",
                  fontFamily: FontTitle,
                  fontWeight: "600",
                  minWidth: "unset",         
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  borderRadius: 0,
                  // gach ben trai
                  borderLeft: scrolled ? "2px solid black" : "2px solid white",
                  marginLeft: "4px",             
                  paddingLeft: "10px",  

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -2,             
                    width: "0%",
                    height: "2px",
                    backgroundColor: "currentColor",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                  ...sx,
                  
                 }}
        >
        <GTranslateIcon 
        sx={{
           mr: 1, 
           fontSize: "1.5rem" ,
          verticalAlign: "middle",
          
          }} />
        {t("Language")}
      </Button>

      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
          PaperProps={{
                sx: {
                  border: "1px solid rgba(0,0,0,0.1)",  
                  minWidth: "150px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)", 
                  backdropFilter: "blur(4px)",          
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)", 
                  color: "black",
    },
  }}

      >
        <MenuItem onClick={() => setLang("vi")}>🇻🇳 Tiếng Việt</MenuItem>
        <MenuItem onClick={() => setLang("ja")}>🇯🇵 日本語</MenuItem>
        <MenuItem onClick={() => setLang("en")}>🇺🇸 English</MenuItem>
      </Menu>
    </>
  );
}

export default LanguageSwitcher;