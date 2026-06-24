      SỬ DỤNG CÔNG CỤ AI
Trong quá trình thực hiện dự án xây dựng Website em có sử dụng công cụ AI hỗ trợ là Gemini và claude để tối ưu hóa thời gian xây dựng thuật toán và fix các lỗi logic. Dưới đây là khai báo chi tiết theo quy định:

  I. CÁC PHẦN ĐÃ SỬ DỤNG AI ĐỂ HỖ TRỢ
  Đa số phần nào em cũng tham khảo và những dưới đây là cụ thể nhất:
1. Khởi tạo cấu trúc nền tảng JavaScript ban đầu cho chức năng lọc tìm kiếm dữ liệu mảng.
2. Gợi ý cấu trúc biểu thức chính quy (Regex) để kiểm tra tính hợp lệ của định dạng Email và Số điện thoại trong Form Validation.
3. Hỗ trợ phát hiện lỗi cú pháp và tư vấn hướng giải quyết các xung đột dữ liệu khi chuyển đổi giao diện từ Static sang Dynamic.
4. Kiếm bootstrap phù hợp với website.

  II. NỘI DUNG PROMPT (CÂU LỆNH) YÊU CẦU AI HỖ TRỢ
Prompt :"(tệp ảnh những yêu cầu bắt buộc) Hãy xét chi tiết những tệp đính kèm này hãy tạo bước đi chi tiết để xây dựng một website đạt những yêu cầu trong tệp đính kèm ".
Prompt : " Một chương trình trong hội thảo công nghệ chuyên nghiệp cần những nội dung gì".
Prompt : " Chỉnh lại giao diện đẹp hơn giống trong ảnh này (tệp ảnh)."
Prompt : "Tạo tôi thêm chức năng xem lịch trình và đăng ký phần trang chủ khi bấm vào 1 trong 2 nút sẽ chuyển sang phần lịch trình hoặc đăng ký  ".


  III. CÁC ĐOẠN CODE ĐÃ ĐƯỢC CHỈNH SỬA, TỐI ƯU

Sau khi AI sinh mã nguồn, em xem những nội dung đó đã đủ phù hợp với cần trong web mình không , phát hiện ra các điểm chưa tương thích với file HTML và tiến hành chỉnh sửa các lỗi logic cốt lõi:
1. Sửa lỗi lệch tên thuộc tính Object khiến bảng quản lý phần tên người bị (undefined)
Code AI sinh ban đầu: Đặt tên thuộc tính lưu trữ họ tên là (name).
Lỗi phát hiện:Thẻ HTML hiển thị bảng gọi ra thuộc tính (reg.fullname), dẫn đến lệch pha dữ liệu.
Đoạn mã em đã trực tiếp chỉnh sửa đồng bộ lại trong sự kiện submit:
```javascript
// Thay đổi thuộc tính name cũ thành fullname để khớp với hàm nạp bảng trang quản lý
const newReg = { 
    id: Date.now(), 
    fullname: fullname, 
    email, 
    phone, 
    studentClass, 
    event: eventSelect, 
    note 
};
  IV: BÀI HỌC RÚT RA KHI DÙNG AI
- Theo quan điểm của em, AI là một công cụ hỗ trợ đắc lực giúp hoàn thành một thứ gì đó rất nhanh chống nhưng khi sử dụng phải biết rà soát lại xem chạy đã đúng với ý tưởng của mình chưa và cần phải chỉnh sửa.
