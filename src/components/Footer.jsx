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
        background: 'linear-gradient(135deg, #0d0c0cff 0%, #1c1b1bff 100%)',
        color: '#b0b0b0',
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 3, sm: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: '500px',
          height: '500px',
          background: 'rgba(0,0,0,0.2)',
          transform: 'rotate(-15deg)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
          {/* Logo and Tagline */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  mb: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
                }}
              >
                <Box
                  sx={{
                    width: { xs: 6, md: 8 },
                    height: { xs: 30, md: 40 },
                    bgcolor: '#ffffffff',
                    borderRadius: 1
                  }}
                />
                CART
                <br />
                MAKEUP
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  color: '#808080', 
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' }
                }}
              >
                Nơi định nghĩa sắc đẹp của bạn
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
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
              Quick Links
            </Typography>
            <Stack spacing={{ xs: 1.2, md: 1.5 }}>
              <Link
                href="#"
                sx={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: '#ffffffff',
                    pl: 1
                  }
                }}
              >
                › Home
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: '#ff6b35',
                    pl: 1
                  }
                }}
              >
                › Blog
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: '#ff6b35',
                    pl: 1
                  }
                }}
              >
                › List Layout
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: '#ff6b35',
                    pl: 1
                  }
                }}
              >
                › Contact
              </Link>
            </Stack>
          </Grid>

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
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ marginTop: 2, color: '#ffffffff', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                 〒165-0034　東京都中野区1丁目43-3
                  <br />
                  　秘密
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#ffffffff', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                  080-8905-7660
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#ffffffff', flexShrink: 0 }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    wordBreak: 'break-word'
                  }}
                >
                  lamthanhcongmain@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.95rem', md: '1rem' }
              }}
            >
              Remain Updated
            </Typography>
            <Box>
              <TextField
                fullWidth
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: 1,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    '& fieldset': {
                      borderColor: 'transparent'
                    },
                    '&:hover fieldset': {
                      borderColor: '#303030ff'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#111111ff'
                    }
                  }
                }}
              />
              <Button
                fullWidth
                onClick={handleSignUp}
                sx={{
                  bgcolor: '#000000ff',
                  color: '#fff',
                  py: { xs: 1, md: 1.2 },
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 1,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  '&:hover': {
                    bgcolor: '#5b5b5bff'
                  }
                }}
              >
                Sign up
              </Button>
            </Box>
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
            <IconButton
              href="http://ffacebook.com/lamthanh.congchu"
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
              <Linkedin size={18} />
            </IconButton>
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