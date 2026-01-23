import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import DomeGallery from '../components/DomGallery';
function Products() {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900",
      name: "Luxury Velvet Lipstick",
      desc: "Son lì cao cấp với kết cấu mịn, bám màu lâu và không khô môi.",
      price: "19.99"
    },
    {
      img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=900",
      name: "Natural Glow Blush",
      desc: "Phấn má hồng tạo hiệu ứng căng bóng tự nhiên, phù hợp mọi tone da.",
      price: "24.99"
    },
    {
      img: "https://images.unsplash.com/photo-1589987607627-616cac2c2c51?q=80&w=900",
      name: "Professional Makeup Kit",
      desc: "Bộ trang điểm chuyên nghiệp dành cho makeup artist và cá nhân.",
      price: "49.99"
    },
    {
      img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=900",
      name: "Matte Nude Lipstick",
      desc: "Tông nude sang trọng, lý tưởng cho trang điểm hằng ngày.",
      price: "21.99"
    },
    {
      img: "https://images.unsplash.com/photo-1583241802625-5b5b38d8ec15?q=80&w=900",
      name: "Soft Pink Blush",
      desc: "Gam hồng dịu nhẹ giúp gương mặt tươi tắn tự nhiên.",
      price: "22.99"
    },
    {
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=900",
      name: "Complete Beauty Set",
      desc: "Bộ mỹ phẩm đầy đủ cho phong cách makeup chuyên nghiệp.",
      price: "59.99"
    }
  ];

  return (
  <div style={{ width: '100vw', height: '100vh' }}>
  <DomeGallery
  fit={0.8}
  minRadius={600}
  maxVerticalRotationDeg={0}
  segments={34}
  dragDampening={2}
  grayscale
/>
    </div>
  );
}

export default Products;
