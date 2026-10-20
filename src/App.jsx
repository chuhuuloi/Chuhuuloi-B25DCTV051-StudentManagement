import useFetch from "./hooks/useFetch";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import ThemeToggle from "./components/ThemeToggle";

const API_URL = "https://6ad77a3995e98f36aef28469.mockapi.io/students";

export default function App() {
  const { data: students, setData, loading, error } = useFetch(API_URL);

  const handleAddStudent = async (newStudent) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });
      if (!res.ok) throw new Error("Thêm sinh viên thất bại!");
      const data = await res.json();
      
      setData((prev) => (Array.isArray(prev) ? [...prev, data] : [data]));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Xóa sinh viên thất bại!");
      
      setData((prev) => (Array.isArray(prev) ? prev.filter((s) => s.id !== id) : []));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Quản Lý Sinh Viên (React Hooks & MockAPI)</h2>
        <ThemeToggle />
      </header>

      <div className="grid-layout">
        <StudentForm onAdd={handleAddStudent} />
        <StudentList
          items={students}
          loading={loading}
          error={error}
          onDelete={handleDeleteStudent}
        />
      </div>
    </div>
  );
}