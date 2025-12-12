import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import {useLanguage} from "../context/LanguageContext";


export const FontTitle = "'Cinzel', serif";

function Header() {
  const {t} = useLanguage();
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: t("Home"), path: "/" },
    { label: t("Products"), path: "/products" },
    { label: t("About"), path: "/about" },
    { label: t("Contact"), path: "/contact" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box 
    sx={{ 
      textAlign: "center",
      
    }}>
      <Typography variant="h6" sx={{
        my: 2 ,
        mx:2,
        color: "white",
        textDecoration: "none",
        fontFamily: "Cinzel, serif",
        fontSize: "1rem",
        fontWeight: "700",
        letterSpacing: "4px", 
        textTransform: "uppercase",
        }}>CARTMAKEUP
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
          onClick={handleDrawerToggle}  
          sx={{
            color:"white",
            "&:hover": {
                color: "black !important",              
            },  
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
          }} 
          button 
          key={item.label} 
          component={Link} 
          to={item.path}
          >
          
          <ListItemText 
          primary={item.label} 
          primaryTypographyProps={{
          fontFamily: FontTitle,
          fontWeight: 600,
          color: "inherit"
          }}
          />
          
          </ListItem>
        ))
        }
      </List>
      <LanguageSwitcher 
      scrolled={scrolled} 
      sx={{
        marginTop: 5,
        borderLeft: 0,
        color:"white",
      }} 
      menuSx={{
        color:"white",
        backgroundColor: "rgba(73, 73, 73, 0.2)",
          
      }}
      />
    </Box>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // scroll xuống → background trắng
      } else {
        setScrolled(false); // scroll lên → background trong suốt
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar 
      elevation={0} 
      position="fixed" 
      sx={{ 
        backgroundColor: scrolled ? "white" : "transparent",
        boxShadow: "none",
        transition: "0.3s",
        "&:hover": {
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        backdropFilter: "blur(10px)",
        color: "black ",
        "& *": {
            color: "black !important",
          },
        },
      }}
      >
        <Toolbar 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between" 
          
          }}
        >
          <Typography 
          variant="h6" 
          component={Link} to="/" 
          sx={{ 
            color: scrolled ? "black" : "white" ,
            textDecoration: "none",
            fontFamily: "Cinzel, serif",
            fontSize: {xs: "0.8rem", md: "2rem"},
            fontWeight: "700",
            letterSpacing: "4px", 
            textTransform: "uppercase",}}
            >
            CARTMAKEUP
          </Typography>
          <Box 
            sx={{ 
              display: { xs: "none", md: "flex" }, 
              gap: 2 
              }}
          >
            {navItems.map((item) => (
              <Button 
                disableRipple
                key={item.label}
                component={Link}
                to={item.path}
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
                 }}
              >
                {item.label}
              </Button>
            ))
            }

          <LanguageSwitcher scrolled={scrolled} />

          </Box>
          <IconButton color="inherit" edge="end"
           sx={{ 
            display: { md: "none" },
            color: scrolled ? "black" : "white"}} 
            onClick={handleDrawerToggle}
          >
            <MenuIcon />

          </IconButton>

        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" }, }}
        PaperProps={{
            sx: {
                backgroundColor: "rgba(255, 255, 255, 0.2)",  
                backdropFilter: "blur(6px)",                 
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)", 
              }
            }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;