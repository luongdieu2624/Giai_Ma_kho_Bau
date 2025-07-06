TRƯỜNG ĐẠI HỌC ĐẠI NAM

ĐỒ ÁN MÔN HỌC: AN TOÀN VÀ BẢO MẬT THÔNG TIN

TÊN ĐỀ TÀI: TRÒ CHƠI GIẢI MÃ KHO BÁU

GIẢNG VIÊN HƯỚNG DẪN:
TS. Trần Đăng Công

SINH VIÊN THỰC HIỆN – NHÓM 12:

Đặng Thanh Bình

Nguyễn Việt Ninh

Vũ Duy Thái

MỤC ĐÍCH DỰ ÁN
Dự án Giải mã kho báu được phát triển với mục tiêu kết hợp học tập và giải trí, tạo ra một trò chơi tương tác giúp sinh viên:

Nắm bắt nguyên lý mã hóa dữ liệu cơ bản.

Vận dụng kiến thức về an toàn thông tin trong thực tế.

Thực hành triển khai một hệ thống client-server phục vụ dữ liệu và giao diện.

Rèn luyện kỹ năng giải đố tư duy logic.

GIỚI THIỆU HỆ THỐNG
Giải mã kho báu là trò chơi phiêu lưu 2D, nơi người chơi điều khiển nhân vật khám phá các bản đồ, thu thập viên ngọc chứa thông điệp bí mật và giải mã để tích lũy điểm.

Mỗi cấp độ sẽ yêu cầu người chơi đối mặt với chướng ngại vật phức tạp hơn và thông điệp mã hóa nâng cao hơn. Trong đó, 4 thuật toán mã hóa được ứng dụng:

Caesar Cipher: Thuật toán dịch chuyển ký tự đơn giản.

Vigenère Cipher: Mã hóa theo từ khóa.

RSA: Mã hóa bất đối xứng sử dụng khóa công khai và riêng.

AES: Mã hóa đối xứng hiện đại.

Dữ liệu trò chơi được lưu trữ dưới dạng file JSON, gồm:

Các bản đồ từ cấp 1 đến cấp 4.

Danh sách câu đố với câu hỏi, đáp án, thuật toán.

Người chơi cần giải mã chính xác nội dung mới có thể tích lũy điểm và vượt qua từng cấp độ.

CHỨC NĂNG CHÍNH
Khởi tạo và quản lý cấp độ

4 bản đồ với độ khó tăng dần.

Mỗi bản đồ có nhiều viên ngọc và chướng ngại vật.

Điều khiển nhân vật

Sử dụng các phím mũi tên để di chuyển.

Tương tác với vật thể trên bản đồ.

Thu thập viên ngọc và kích hoạt câu đố

Khi chạm viên ngọc, giao diện câu đố sẽ hiển thị.

Giải mã thông điệp

Chọn thuật toán tương ứng.

Nhập đáp án và xác nhận.

Phản hồi kết quả thành công hoặc thất bại.

Tính điểm và qua cấp

Mỗi câu đố đúng: +10 điểm.

Điểm yêu cầu qua cấp:

Cấp 1: 10 điểm

Cấp 2: 20 điểm

Cấp 3: 30 điểm

Cấp 4: 50 điểm

Đạt đủ điểm, di chuyển đến ô cửa ra (O) để mở khóa cấp mới.

Quản lý thời gian và thông tin

Hiển thị điểm số, thời gian chơi, cấp độ hiện tại.

Máy chủ Node.js phục vụ nội dung

Giao tiếp client-server.

Cung cấp tệp JSON, giao diện HTML, CSS, JS.

CÁCH SỬ DỤNG VÀ CÁCH CHƠI
1. Chuẩn bị môi trường
Bước 1: Cài đặt Node.js

Tải Node.js từ https://nodejs.org

Cài đặt và xác minh bằng lệnh:

bash
Sao chép
Chỉnh sửa
node -v
npm -v
Bước 2: Cài thư viện Express
Mở Terminal/CMD trong thư mục dự án:

bash
Sao chép
Chỉnh sửa
npm init -y
npm install express
2. Khởi động trò chơi
Bước 3: Chạy máy chủ Node.js

bash
Sao chép
Chỉnh sửa
node server.js
Mặc định chạy tại địa chỉ:

arduino
Sao chép
Chỉnh sửa
http://localhost:3000
Bước 4: Mở trình duyệt và truy cập địa chỉ trên để bắt đầu chơi.

3. Hướng dẫn cách chơi chi tiết
Di chuyển nhân vật

Sử dụng các phím mũi tên để đi lên, xuống, trái, phải.

Thu thập viên ngọc (Gem)

Khi chạm vào viên ngọc màu xanh, một câu đố sẽ hiện ra.

Giải mã thông điệp

Đọc kỹ câu hỏi và chuỗi mã hóa.

Chọn một trong các thuật toán:

Caesar Cipher

Vigenère Cipher

RSA

AES

Nhập đáp án giải mã chính xác.

Nhấn Xác nhận để kiểm tra.

Nhận điểm

Trả lời đúng: +10 điểm.

Nếu trả lời sai, thử lại hoặc thu thập viên ngọc khác.

Vượt cấp

Khi đạt điểm yêu cầu, di chuyển nhân vật tới ô cửa ra (O) để sang cấp mới.

Chú ý

Tránh lava (L) và kẻ thù (E) trên bản đồ.

Hoàn thành tất cả cấp độ để chiến thắng.

ƯU ĐIỂM HỆ THỐNG
Tích hợp nhiều thuật toán mã hóa giúp rèn luyện tư duy bảo mật.

Dữ liệu trò chơi linh hoạt, dễ chỉnh sửa.

Giao diện trực quan, dễ sử dụng.

Có thể mở rộng thêm cấp độ, câu đố, tính năng mới.

Hỗ trợ đa nền tảng: Windows, macOS, Linux.

YÊU CẦU HỆ THỐNG
Hệ điều hành: Windows / macOS / Linux

Node.js mới nhất

Trình duyệt hỗ trợ JavaScript hiện đại (Chrome, Firefox, Edge)

GIẤY PHÉP VÀ MỤC ĐÍCH
Dự án này được phát triển với mục đích học tập và nghiên cứu trong khuôn khổ môn học An toàn và Bảo mật Thông tin tại Trường Đại học Đại Nam.

Tác giả và nhóm phát triển không chịu trách nhiệm nếu mã nguồn được sử dụng sai mục đích hoặc triển khai trong môi trường thực tế mà không có biện pháp bảo vệ phù hợp.

THÔNG TIN LIÊN HỆ
Nhóm 12 – Môn học An toàn và Bảo mật Thông tin
Trường Đại học Đại Nam
