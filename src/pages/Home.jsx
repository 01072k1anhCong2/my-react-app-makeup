

import ProductCard from "../components/ProductCard";
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
import { useRef } from "react";
import Hero from "../components/Hero";
import {Box} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomeVideoSection from "../components/HomeVideoSection";

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
  // an vao scroll den muc do
  const location = useLocation();
    useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  // an vao mui sen roll den phan tu dau tien
  const nextSectionRef = useRef(null);

  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <Hero onScrollNext={scrollToNext}/>

      <Box 
        ref={nextSectionRef} 
        sx={{
        scrollMarginTop: { xs: "700px", md: "220px" }, // đúng chiều cao Header
      }} >
      <BeautyInfoSection />
      </Box>

      <Box
        id="services" 
        sx={{ scrollMarginTop: { xs: "700px", md: "220px" } }}
      >
      <BeautyServiceSection
        title="Dịch Vụ Tại Cart Makeup"
        services={DataService}
      />
      </Box>
      <Box
        id="courses" 
        sx={{ scrollMarginTop: { xs: "700px", md: "220px" } }}
      >
      <CourseItem
        title="Khóa Học Makeup"
        services={DataCourse}
      />
      </Box>

      {/* Video Section */}
      <HomeVideoSection />
      

    </>
  );
}
