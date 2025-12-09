import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky" sx={{ background: "#1e1e1e" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Makeup Beauty
        </Typography>

        <div>
          <Button color="primary" component={Link} to="/">Home</Button>
          <Button color="primary" component={Link} to="/products">Products</Button>
          <Button color="primary" component={Link} to="/about">About</Button>
          <Button color="primary" component={Link} to="/contact">Contact</Button>
        </div>

      </Toolbar>
    </AppBar>
  );
}
export default Header;
