# 🏴‍☠️ Giải Mã Kho Báu

🎮 **Trò chơi phiêu lưu kết hợp giải mã mật thư** – dự án học tập và nghiên cứu về **An toàn và Bảo mật Thông Tin**.

---

## ✨ Giới thiệu

**Giải Mã Kho Báu** là trò chơi 2D, nơi bạn điều khiển nhân vật di chuyển qua các bản đồ, thu thập viên ngọc chứa thông điệp đã mã hóa và giải mã để ghi điểm, vượt cấp. Dự án giúp rèn luyện kỹ năng tư duy logic và làm quen các thuật toán mã hóa cơ bản:

- **Caesar Cipher**
- **Vigenère Cipher**
- **RSA**
- **AES**

Trò chơi kết hợp yếu tố giải trí và học tập, được thiết kế nhằm mục đích nghiên cứu và thực hành.

---

## 🛠️ Công nghệ sử dụng

- **Node.js + Express** – Máy chủ phục vụ nội dung.
- **HTML, CSS, JavaScript** – Giao diện người chơi.
- **p5.js** – Thư viện vẽ bản đồ, nhân vật.
- **JSON** – Lưu trữ dữ liệu bản đồ và câu đố.

---

## 🗺️ Tính năng nổi bật

✅ 4 cấp độ bản đồ với độ khó tăng dần.  
✅ Giao diện giải đố trực quan, dễ sử dụng.  
✅ Hỗ trợ 4 thuật toán mã hóa thông dụng.  
✅ Hệ thống điểm số, cấp độ, thời gian.  
✅ Dễ dàng mở rộng thêm bản đồ và câu hỏi mới.  
✅ Tích hợp mô hình client-server đơn giản.

---

## 🎮 Cách chơi

1️⃣ **Di chuyển nhân vật**
- Sử dụng **các phím mũi tên** để di chuyển lên, xuống, trái, phải.

2️⃣ **Thu thập viên ngọc**
- Chạm viên ngọc màu xanh để kích hoạt câu đố.

3️⃣ **Giải mã thông điệp**
- Đọc câu hỏi và chuỗi mã hóa.
- Chọn thuật toán phù hợp: Caesar, Vigenère, RSA, AES.
- Nhập đáp án và bấm **Xác nhận**.

4️⃣ **Nhận điểm**
- Mỗi câu đố đúng: +10 điểm.
- Điểm cần đạt để qua cấp độ:
  - Cấp 1: 10 điểm
  - Cấp 2: 20 điểm
  - Cấp 3: 30 điểm
  - Cấp 4: 50 điểm

5️⃣ **Vượt cấp**
- Sau khi đạt điểm, di chuyển đến **ô cửa ra (O)** để sang cấp mới.

6️⃣ **Lưu ý**
- Tránh kẻ thù (**E**) và lava (**L**) để không bị thua.

---

## 🚀 Hướng dẫn cài đặt & chạy

**Bước 1:** Cài đặt Node.js  
Tải từ [nodejs.org](https://nodejs.org) và cài đặt.

**Bước 2:** Cài thư viện cần thiết  
Mở Terminal/CMD tại thư mục dự án:
```bash
npm init -y
npm install express
