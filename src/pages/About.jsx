import { Box, Typography, Container, Paper } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: "rgba(40,40,40,0.7)",
          backdropFilter: "blur(8px)",
          color: "#fff"
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          About Us
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Makeup Beauty</strong> là thương hiệu mỹ phẩm cao cấp với sứ mệnh
          mang đến vẻ đẹp tự nhiên, tinh tế và cuốn hút cho mọi phụ nữ.
          Chúng tôi tin rằng mỗi người đều có một nét đẹp riêng – và sản phẩm
          của chúng tôi được tạo ra nhằm tôn vinh nét đẹp ấy một cách tự nhiên nhất.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          Với đội ngũ chuyên gia có kinh nghiệm lâu năm trong ngành làm đẹp,
          Makeup Beauty liên tục nghiên cứu và cải tiến sản phẩm để mang đến
          chất lượng cao nhất. Tất cả sản phẩm đều được sản xuất với quy trình
          kiểm định nghiêm ngặt, thân thiện với làn da và phù hợp cho mọi phong cách.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          Chúng tôi không chỉ tạo ra mỹ phẩm, mà còn xây dựng trải nghiệm – giúp bạn
          cảm nhận sự tự tin, quyến rũ và rạng rỡ mỗi ngày.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
          Makeup Beauty – Tự tin tỏa sáng theo cách của bạn.
        </Typography>
      </Paper>
    </Container>
  );
}
