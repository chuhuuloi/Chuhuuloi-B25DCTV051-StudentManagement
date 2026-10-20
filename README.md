# 🎓 BÀI TẬP QUẢN LÝ SINH VIÊN (REACT HOOKS & MOCKAPI)

> **Môn học:** Lập trình Web  
> **Trường:** Học viện Công nghệ Bưu chính Viễn thông (PTIT)  
> **Họ và tên sinh viên:** Chu Hữu Lợi  
> **Mã sinh viên:** B25DCTV051  
> **Lớp:** B25DCTV051  
> **Repository:** [Chuhuuloi-B25DCTV051-StudentManagement](https://github.com/chuhuuloi/Chuhuuloi-B25DCTV051-StudentManagement.git)

---

## 📌 1. Giới thiệu dự án
Ứng dụng **Quản lý sinh viên** được xây dựng bằng **ReactJS (Vite)** kết hợp với **MockAPI**, hoàn thành bài tập nâng cấp từ Class Component sang Function Component & React Hooks.

Dự án đáp ứng đầy đủ các yêu cầu kỹ thuật:
* **100% Function Component & React Hooks** (`useState`, `useEffect`, `useContext`).
* **Custom Hook `useFetch`**: Tự định nghĩa hook riêng quản lý 3 trạng thái bất đồng bộ: `data`, `loading`, `error`.
* **Context API**: Chia sẻ trạng thái Chế độ Sáng / Tối (`ThemeContext`) toàn cục.
* **Controlled Form & Validation**: Kiểm tra dữ liệu đầu vào (Họ tên ≥ 3 ký tự, Email đúng định dạng, GPA từ 0.0 đến 4.0).
* **RESTful API**: Kết nối với MockAPI để thực hiện các thao tác CRUD (Lấy danh sách, Thêm mới, Xóa).
* **Tìm kiếm & Tương tác**: Tìm kiếm sinh viên theo tên real-time, xác nhận bằng hộp thoại trước khi xóa.

---

## 🛠️ 2. Công nghệ sử dụng
* **Frontend:** React 18, Vite, JSX, CSS3 (Flexbox/Grid, Dark/Light Theme).
* **Backend (Mock):** MockAPI (RESTful Services).
* **Quản lý mã nguồn:** Git, GitHub.

---

## 📁 3. Cấu trúc thư mục dự án
```text
student-management/
├── public/
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx    # Controlled Form thêm sinh viên & validate
│   │   ├── StudentList.jsx    # Danh sách sinh viên, tìm kiếm, xóa
│   │   └── ThemeToggle.jsx    # Nút chuyển đổi giao diện Sáng/Tối
│   ├── context/
│   │   └── ThemeContext.jsx   # Quản lý theme Sáng/Tối toàn ứng dụng
│   ├── hooks/
│   │   └── useFetch.js        # Custom Hook xử lý gọi MockAPI
│   ├── App.jsx                # Component chính tích hợp logic
│   ├── App.css                # Style giao diện (Sáng/Tối, Grid Layout)
│   └── main.jsx               # Bọc ThemeProvider và render App
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
