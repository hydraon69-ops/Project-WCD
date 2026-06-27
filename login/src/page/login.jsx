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
    <div className="login-page">
      <div className="login-container">

        <div className="login-logo">
          <small>PERADABAN KUNO</small>
          <h1>Masuk ke Kronikuno</h1>
          <p>Jelajahi jejak peradaban yang mengubah dunia</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-login">
            Masuk
          </button>

        </form>

        <div className="options">
          <a href="#">Lupa Password?</a>
          <a href="#">Bantuan</a>
        </div>

        <div className="divider">
          ───── ✦ ─────
        </div>

        <div className="register">
          Belum punya akun?
          <a href="#"> Daftar Sekarang</a>
        </div>

      </div>
    </div>
  );
}

export default Login;