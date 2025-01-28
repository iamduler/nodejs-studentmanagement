// Server
const express = require("express");
const cors = require("cors");
const router = require("./routers/index.router");

const app = express();

// Cấu hình CORS
app.use(cors({
    origin: "*", // Hoặc "*" nếu muốn cho phép tất cả
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type"
}));

app.use(express.json()); // Các request & response đều ở dạng JSON để tiện thao tác
app.use(router);

// Cấu hình port cụ thể (randomly)
const port = 7000;
app.listen(port, () => {
    console.log(`App run on port ${port}.`)
})

// http://localhost:7000/
// Khi truy cập vào đường dẫn trên thì sẽ chạy vào hàm dưới đây
// Có 2 tham số mặc định là request và response
app.get("/", async (req, res) => {
    res.send("Hello world!"); // Gửi về trình duyệt
})

// Setup sequelize
const { sequelize } = require("./model/index");
sequelize.sync({ alter: true });