// Server
const express = require("express");
const app = express();
const path = require("path");

// Cấu hình đường dẫn tĩnh để truy xuất vào tài nguyên từ trình duyệt
const pathPublic = path.join(__dirname, './public');
app.use(express.static(pathPublic));

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

app.set('view engine', 'hbs');