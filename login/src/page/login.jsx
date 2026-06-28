import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(rgba(20,15,10,0.75),rgba(20,15,10,0.75)),url('https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1600')] bg-cover bg-center px-4">
      <div className="w-full max-w-md rounded-[12px] bg-[rgba(245,242,238,0.95)] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="text-center mb-8">
          <small className="text-[#b8924e] tracking-[2px] uppercase">PERADABAN KUNO</small>
          <h1 className="mt-4 text-3xl font-normal text-[#2d241d]">Masuk ke Kronikuno</h1>
          <p className="mt-2 text-[#666]">Jelajahi jejak peradaban yang mengubah dunia</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-[#2d241d]">Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#d6cfc5] bg-white/90 px-4 py-3 text-sm text-[#222] outline-none transition duration-200 focus:border-[#d8b47d] focus:ring-2 focus:ring-[#d8b47d]/30"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#2d241d]">Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[#d6cfc5] bg-white/90 px-4 py-3 text-sm text-[#222] outline-none transition duration-200 focus:border-[#d8b47d] focus:ring-2 focus:ring-[#d8b47d]/30"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#d8b47d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c49c6d]"
          >
            Masuk
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:justify-between">
          <a href="#" className="hover:text-white">Lupa Password?</a>
          <a href="#" className="hover:text-white">Bantuan</a>
        </div>

        <div className="my-7 text-center text-white/70">───── ✦ ─────</div>

        <div className="text-center text-sm text-white/85">
          Belum punya akun?
          <a href="#" className="font-semibold text-white hover:underline"> Daftar Sekarang</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
