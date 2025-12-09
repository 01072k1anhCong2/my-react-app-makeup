import { Box, TextField, Button, Typography, Paper } from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        display: "flex",
        justifyContent: "center",
        color: "grey.100",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 450,
          background: "rgba(40, 40, 40, 0.8)",
          backdropFilter: "blur(4px)",
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 3, color: "grey.100" }}
        >
          Contact Us
        </Typography>

        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 1,
            py: 1.2,
            background: "linear-gradient(45deg, #9c27b0, #e91e63)",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          Send
        </Button>
      </Paper>
    </Box>
  );
}
export default Contact;