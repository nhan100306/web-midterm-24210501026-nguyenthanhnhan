ĐỀ TÀI: WEBSITE GIỚI THIỆU VÀ QUẢN LÝ ĐĂNG KÝ CHUYÊN ĐỀ HỘI THẢO KHOA HỌC - BDU EVENT
  I. THÔNG TIN SINH VIÊN
Họ và tên:Nguyễn Thanh Nhàn
Mã số sinh viên: 24210501026
Lớp: 242101TH001

  II. MÔ TẢ NGẮN VỀ WEBSITE
Website: BDU EVENT 
- Được xây dựng nhằm phục vụ công tác truyền thông, tra cứu thông tin .
- Cho phép người dùng đăng ký trực tiếp trên web và có thể quản lý danh sách đăng ký tham gia chuỗi 8 chuyên đề thuộc "Hội thảo Khoa học, Công nghệ & ĐMST 2026".
- Hệ thống cung cấp trải nghiệm mượt mà từ khâu tìm kiếm chương trình phù hợp cho đến việc tối ưu hóa quy trình lưu trữ dữ liệu đăng ký.

  III. DANH SÁCH CHỨC NĂNG CỦA WEBSITE
1. Trang chủ (index.html): Giao diện banner sự kiện tổng quan, tích hợp hệ thống thanh điều hướng (Navbar) cho người dùng chuyển sang xem lịch trình hoặc đăng ký tham gia nhanh .
2. Trang Chương trình (courses.html): Hiển thị danh sách 8 chuyên đề động dưới dạng các thẻ Card từ file dữ liệu.
   + Bộ lọc tìm kiếm theo từ khóa tên chuyên đề, theo Danh mục và Cấp độ. Có chức năng xóa bộ lọc đã nhập.
   + Tính năng xem nhanh thông tin chi tiết của từng chuyên đề thông qua cửa sổ bật lên (Bootstrap Modal). Có nút đăng ký phía dưới chuyên đề khi tích vào sẽ dẫn đến phần đăng ký ngay lập tức.
4. Trang Đăng ký (register.html): Form điền thông tin được căn giữa cân đối bằng cấu trúc Flexbox.
   + Kiểm tra lỗi dữ liệu nghiêm ngặt đúng cú pháp trước khi gửi.
5. Trang Quản lý danh sách (registrations.html):
   + Bảng hiển thị danh sách  đã đăng ký thành công .
   + Chức năng xóa cục bộ từng bản ghi đại biểu dựa theo vị trí dòng (`index`).
   + Chức năng xóa sạch toàn bộ danh sách để làm mới dữ liệu bảng.

  IV. CÔNG NGHỆ SỬ DỤNG
  - Ngôn ngữ cốt lõi:HTML5, CSS3, JavaScript thuần (ES6+ Vanilla JS).
  - Thư viện giao diện: Framework Bootstrap 5.3.0 (Tích hợp qua link mạng CDN).
  - Lưu trữ dữ liệu: Trình duyệt `LocalStorage` (Định dạng chuỗi JSON).
  
  V. LINK GitHub Pages:  https://nhan100306.github.io/web-midterm-24210501026-nguyenthanhnhan/

  VI. Ảnh chụp giao diện:


  VII. HƯỚNG DẪN CHẠY LOCAL
1. Tải thư mục dự án về máy tính hoặc thực hiện lệnh `git clone`.
2. Mở thư mục bằng trình soạn thảo (Visual Studio Code).
3. Cài đặt Extension Live Server trên VS Code.
4. Bấm chuột phải vào file (index.html) bên thanh công cụ bên trái -> Chọn Open with Live Server** để khởi chạy website trên trình duyệt local.
