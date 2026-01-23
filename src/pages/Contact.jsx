// src/components/Contact.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import Galaxy from '../components/Galaxy';


// Firebase config từ env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Contact() {
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const now = new Date();
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new",          // trạng thái form
        reply: "",              // phản hồi admin
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
      });

      setSucceeded(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Gửi thất bại, thử lại sau.");
    }

    setSubmitting(false);
  };
  if (succeeded)
    return (
      
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          background: "linear-gradient(180deg,#0c0c0c,#000)",
          position: "relative",//de co dinh background động
        }}
      >
        {/* Background Galaxy động */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Galaxy
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            speed={0.6}
          />
        </Box>
        
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
            sx={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, mb: 2 }}
          >
            Thank You ✨
          </Typography>
          <Typography sx={{ color: "grey.400" }}>
            Chúng tôi đã nhận được thông tin và sẽ liên hệ với bạn sớm nhất.
          </Typography>
        </Paper>
      </Box>
      
    );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg,#0c0c0c,#000)",
        position: "relative", //de co dinh background động
      }}
    >
        {/* Background Galaxy động */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Galaxy
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            speed={0.6}
          />
        </Box>
        
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
        <Typography sx={{ color: "grey.400", textAlign: "center", mb: 4, fontSize: "0.95rem" }}>
          Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            sx={inputStyle}
          />
          <TextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            required
            value={formData.email}
            onChange={handleChange}
            sx={inputStyle}
          />
          <TextField
            fullWidth
            name="message"
            label="Message"
            multiline
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            sx={inputStyle}
          />
          <Button
            type="submit"
            fullWidth
            disabled={submitting}
            sx={{
              mt: 2,
              py: 1.4,
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 600,
              letterSpacing: 1,
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#e5e5e5" },
            }}
          >
            {submitting ? "Sending..." : "Send Message"}
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
    "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
    "&:hover fieldset": { borderColor: "#fff" },
    "&.Mui-focused fieldset": { borderColor: "#fff" },
  },
  "& .MuiInputLabel-root": { color: "grey.400" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
};
