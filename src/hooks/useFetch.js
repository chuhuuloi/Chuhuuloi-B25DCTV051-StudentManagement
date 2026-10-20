import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Lỗi kết nối API: ${res.status}`);
        return res.json();
      })
      .then((result) => {
        if (isMounted) {
          // Ép kiểu đảm bảo kết quả nhận về luôn là MẢNG
          setData(Array.isArray(result) ? result : []);
        }
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, setData, loading, error };
}