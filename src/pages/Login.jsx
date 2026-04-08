import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isLoginValid =
    loginData.fullName.trim() !== "" &&
    loginData.email.trim() !== "" &&
    loginData.password.trim() !== "";

  const handleLogin = () => {
    if (!isLoginValid) return;

    localStorage.setItem("popxUser", JSON.stringify(loginData));
    navigate("/account");
  };

  return (
    <MobileLayout>
      <div className="auth-page">
        <h1 className="main-heading">Signin to your PopX account</h1>
        <p className="sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <InputField
          label="Full Name"
          placeholder="Enter your name"
          name="fullName"
          value={loginData.fullName}
          onChange={handleChange}
        />

        <InputField
          label="Email Address"
          placeholder="Enter email address"
          name="email"
          value={loginData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />

        <Button
          text="Login"
          onClick={handleLogin}
          disabled={!isLoginValid}
        />
      </div>
    </MobileLayout>
  );
}

export default Login;