import { Container, Grid, Typography, Box, Paper, Button } from "@mui/material";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import anhbia_1 from "../assets/anh_bia_1.png";
import demo_1 from "../assets/demo_1.png";
import demo_2 from "../assets/demo_2.png";
import demo_3 from "../assets/demo_3.png";
import demo_4 from "../assets/demo_4.png";
import demo_5 from "../assets/demo_5.png";
import demo_6 from "../assets/demo_6.png";
import BeautyInfoSection from "../components/BeautyInFoSection";
import BeautyServiceSection from "../components/BeautyServiceSection";

const data = [
  {
    name: "Gói Makeup Dự Tiệc",
    price: "500.000đ",
    image: demo_1,
  },
  {
    name: "Makeup Cô Dâu",
    price: "1.500.000đ",
    image: demo_2,
  },
  {
    name: "Nail Art Cao Cấp",
    price: "300.000đ",
    image: demo_3,
  },
    {
    name: "Gói Makeup Dự Tiệc",
    price: "500.000đ",
    image: demo_4,
  },
  {
    name: "Makeup Cô Dâu",
    price: "1.500.000đ",
    image: demo_5,
  },
  {
    name: "Nail Art Cao Cấp",
    price: "300.000đ",
    image: demo_6,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <BeautyInfoSection />
      <BeautyServiceSection
        title="Dịch Vụ Tại Cart Makeup"
        services={data}
      />
    </>
  );
}
