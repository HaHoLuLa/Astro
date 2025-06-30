import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">로그인</h1>
      <form className="w-80"
        action="/api/user/login" method="POST"
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          로그인
        </button>
      </form>
      <div className="mt-4">
        <a
          href="/register"
          className="text-blue-500 hover:underline"
        >
          회원가입
        </a>
      </div>
    </div>
  );
}
