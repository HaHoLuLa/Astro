export default function Logout() {
  const handleLogout = async () => {
    await fetch("/api/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-80 mx-auto">
      <h1 className="text-4xl font-bold mb-4">로그아웃</h1>
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
      >
        로그아웃
      </button>
    </div>
  );
}