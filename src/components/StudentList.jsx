import { useState } from "react";

export default function StudentList({ items = [], loading, error, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <div className="card-box status-msg">⌛ Đang tải dữ liệu từ MockAPI...</div>;
  if (error) return <div className="card-box error-text">❌ Lỗi: {error}</div>;

  // Phòng ngừa tuyệt đối trường hợp items truyền vào không phải là mảng
  const safeItems = Array.isArray(items) ? items : [];

  // Tìm kiếm sinh viên an toàn
  const filteredStudents = safeItems.filter((sv) =>
    sv && sv.name ? sv.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );

  const handleDeleteClick = (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa sinh viên này không?");
    if (confirmDelete && onDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="card-box">
      <h3>Danh Sách Sinh Viên</h3>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm sinh viên theo tên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredStudents.length === 0 ? (
        <p className="status-msg">Không có sinh viên nào trong danh sách</p>
      ) : (
        <ul className="list-group">
          {filteredStudents.map((sv) => (
            <li key={sv.id || Math.random()} className="list-item">
              <div>
                <strong>{sv.name || "Chưa có tên"}</strong> - {sv.email || "Chưa có email"} | Ngành: {sv.major || "Chưa có"} | <strong>GPA: {sv.gpa ?? "N/A"}</strong>
              </div>
              <button onClick={() => handleDeleteClick(sv.id)} className="btn-danger">
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}