import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xanrkljk"); // 🔴 ID form của bạn

  if (state.succeeded) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #0c0c0c, #000)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Paper
          sx={{
            p: 5,
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "1.8rem",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Thank You ✨
          </Typography>

          <Typography sx={{ color: "grey.400" }}>
            Chúng tôi đã nhận được thông tin và sẽ liên hệ với bạn sớm nhất.
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width:"100%",
        background: "linear-gradient(180deg, #0c0c0c, #000)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 4 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 520,
          p: { xs: 3, md: 5 },
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            textAlign: "center",
            mb: 1,
          }}
        >
          Contact Us
        </Typography>

        <Typography
          sx={{
            color: "grey.400",
            textAlign: "center",
            mb: 4,
            fontSize: "0.95rem",
          }}
        >
          Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
        </Typography>

        {/* FORM */}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Your Name"
            required
            sx={inputStyle}
          />

          <TextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            required
            sx={inputStyle}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <TextField
            fullWidth
            name="message"
            label="Message"
            multiline
            rows={4}
            required
            sx={inputStyle}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button
            type="submit"
            fullWidth
            disabled={state.submitting}
            sx={{
              mt: 2,
              py: 1.4,
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 600,
              letterSpacing: 1,
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#e5e5e5",
              },
            }}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

const inputStyle = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.02)",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.15)",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "grey.400",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
};

export default Contact;
