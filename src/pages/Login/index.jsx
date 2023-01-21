import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";


export const Login = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  localStorage.getItem("user")

  const navigate = useNavigate();

  const handleLogin = () => {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const data = {
      login: login,
    };
    if (EMAIL_REGEXP.test(login)) {
      if (pass.length >= 6) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/home")
      }
      else{
        setError(true)
      }
    }
    else{
      setError(true)  
    }
  };

  return (
    <div className="main">
      <div className="blur">
        <div className="container auth">
          <h2>Simple Hotel Check</h2>
          <div className="auth__form">
            <label htmlFor="login">Логин</label>
            <input
              value={login}
              onChange={(change) => setLogin(change.target.value)}
              type="email"
              id="login"
              placeholder="Введите логин..."
            />
            <label htmlFor="pass">Пароль</label>
            <input
              value={pass}
              onChange={(change) => setPass(change.target.value)}
              type="password"
              id="pass"
              placeholder="Введите пароль..."
            />
            {error ? <label className="error" htmlFor="error">Неверный логин или пароль</label> : ""}
            <div className="auth__buttons ">
              <button onClick={() => handleLogin()} className="btn">
                {" "}
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
