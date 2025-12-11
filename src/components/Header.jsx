import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Sản phẩm", path: "/products" },
    { label: "Giới thiệu", path: "/about" },
    { label: "Liên hệ", path: "/contact" },
  ];
  const FontTitle = "'Cinzel', serif";
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} 
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
          <ListItem sx={{
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
        ))}
      </List>
    </Box>
  );

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
            ))}
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
                backgroundColor: "rgba(255, 255, 255, 0.2)",  // trong suốt nhẹ
                backdropFilter: "blur(10px)",                 // hiệu ứng mờ
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