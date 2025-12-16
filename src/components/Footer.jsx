import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Tooltip,
  Stack
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  Mail
} from 'lucide-react';
import Logo from "../assets/cart_footer.png";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #181818ff 0%, #212121ff 100%)',
        color: '#b0b0b0',
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 3, sm: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -190,
          right: -100,
          width: '500px',
          height: '500px',
          background: 'rgba(0,0,0,0.2)',
          transform: 'rotate(-15deg)',
        }
      }}
    >
      <Container maxWidth="">
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
          {/* Logo and Tagline */}

<Box sx={{ mb: { xs: 2, md: 3 }, textAlign: 'center' }}>
  <a
    href="https://01072k1anhcong2.github.io/admin-cartmakeup-ltc/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Box
      component="img"
      src={Logo}
      alt="Cart Makeup Logo"
      sx={{
        width: { xs: 80, sm: 100, md: 120 },
        mr: { md: 10 },
        height: 'auto',
        mb: 1,
        cursor: 'pointer', // trỏ chuột như link
      }}
    />
  </a>
</Box>




          {/* Contact Us */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.95rem', md: '1rem' }
              }}
            >
              Contact Us
            </Typography>
            <Stack spacing={{ xs: 1.5, md: 2 }}>
            {/* Address */}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ marginTop: 2, color: '#fff', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="https://www.google.com/maps/search/?api=1&query=〒165-0034+東京都中野区1丁目43-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                  sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, color: '#b0b0b0', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  〒165-0034　東京都中野区1丁目43-3 秘密
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#fff', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="tel:08089057660"
                  variant="body2"
                  sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, color: '#b0b0b0', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  080-8905-7660
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#fff', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="mailto:lamthanhcongmain@gmail.com"
                  variant="body2"
                  sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, color: '#b0b0b0', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  lamthanhcongmain@gmail.com
                </Typography>
              </Box>
            </Stack>
 

          </Grid>

        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: { xs: 2.5, md: 3 },
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
            gap: { xs: 2, sm: 2 },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#808080', 
              fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
              order: { xs: 2, sm: 1 }
            }}
          >
            © 2025 sap 2026 mot khoi dau moi
          </Typography>

          {/* Social Icons */}
          <Box 
            sx={{ 
              display: 'flex', 
              gap: { xs: 0.5, md: 1 },
              order: { xs: 1, sm: 2 }
            }}
          >

            <Tooltip title="Facebook" arrow>
            <IconButton
              href="https://www.facebook.com/n.thobeo1610"
              target='_blank'
              rel="noopener noreferrer"
              size="small"              
              sx={{
                color: '#808080',
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#ffffffff',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Facebook size={18} />
            </IconButton>
            </Tooltip>

            <Tooltip title="Instagram" arrow>
            <IconButton
              href="https://www.instagram.com/cart.makeup/"
              target='_blank'
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#808080',
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#ffffffff',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Instagram size={18} />
            </IconButton> 
            </Tooltip> 

            <Tooltip title="Twitter" arrow>          
            <IconButton
              href="#"
              size="small"
              sx={{
                color: '#808080',
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#ffffffff',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Twitter size={18} />
            </IconButton>
            </Tooltip> 

            <Tooltip title="Mail" arrow>
            <IconButton
              href="mailto:lamthanhcongmain@gmail.com"
              size="small"
              sx={{
                color: '#808080',
                transition: 'all 0.3s',
                '&:hover': {
                  color: '#ffffffff',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Mail size={18} />
            </IconButton>
            </Tooltip>

          </Box>

          <Typography 
            variant="body2" 
            sx={{ 
              color: '#808080', 
              fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
              order: { xs: 3, sm: 3 }
            }}
          >
            Designed by 
            <Link 
              href="https://www.instagram.com/nguoilamdinhtoi/" 
              target="_blank" 
              rel="noopener noreferrer"  
              sx={{ 
                color: '#ffffffff', 
                textDecoration: 'none',
                ml: 0.5,
                fontSize:'9px',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              LAM THANH CONG
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}