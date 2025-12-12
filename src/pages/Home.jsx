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
import demo_7 from "../assets/demo_7.png";
import demo_8 from "../assets/demo_8.png";
import demo_9 from "../assets/demo_9.png";
import demo_10 from "../assets/demo_10.png";
import demo_11 from "../assets/demo_11.png";
import demo_12 from "../assets/demo_12.png";
import BeautyInfoSection from "../components/BeautyInFoSection";
import BeautyServiceSection from "../components/BeautyServiceSection";
import CourseItem from "../components/CourseItem";

const DataService = [
  {
    name: "Gói Makeup Dự Tiệc",
    image: demo_1,
  },
  {
    name: "Makeup Cô Dâu",
    image: demo_2,
  },
  {
    name: "Nail Art Cao Cấp",
    image: demo_3,
  },
    {
    name: "Gói Makeup Dự Tiệc",
    image: demo_4,
  },
  {
    name: "Makeup Cô Dâu",
    image: demo_5,
  },
  {
    name: "Nail Art Cao Cấp",
    image: demo_6,
  },
  
];

const DataCourse = [
  {
    name: "Gói Makeup Dự Tiệc",
    image: demo_7,
  },
  {
    name: "Makeup Cô Dâu",
    image: demo_8,
  },
  {
    name: "Nail Art Cao Cấp",
    image: demo_9,
  },
    {
    name: "Gói Makeup Dự Tiệc",
    image: demo_10,
  },
  {
    name: "Makeup Cô Dâu",
    image: demo_11,
  },
  {
    name: "Nail Art Cao Cấp",
    image: demo_12,
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
        services={DataService}
      />
      <CourseItem
        title="Khóa Học Makeup"
        services={DataCourse}
      />
    </>
  );
}
