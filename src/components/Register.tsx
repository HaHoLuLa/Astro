import { useState } from "react";

export default function RegisterComponent() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (form.password !== form.confirmPassword) {
  //     setError("비밀번호가 일치하지 않습니다.");
  //     return;
  //   }
  //   await fetch("/api/user/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ username: form.username, password: form.password })
  //   });
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">회원가입</h1>
      <form className="w-80"
        // onSubmit={handleSubmit}
        action="/api/user/register" method="POST"
      >
        <input
          type="text"
          name="username"
          placeholder="사용자 이름"
          className="w-full p-2 mb-4 border rounded"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className="w-full p-2 mb-4 border rounded"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          className="w-full p-2 mb-4 border rounded"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
