import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import RadioGroup from "../components/RadioGroup";
import Button from "../components/Button";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isSignupValid =
    formData.fullName.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "";

  const handleSignup = () => {
    if (!isSignupValid) return;

    localStorage.setItem("popxUser", JSON.stringify(formData));
    navigate("/account");
  };

  return (
    <MobileLayout>
      <div className="auth-page signup-page">
        <h1 className="main-heading">Create your PopX account</h1>

        <InputField
          label="Full Name*"
          placeholder="Enter full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField
          label="Phone number*"
          placeholder="Enter phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <InputField
          label="Email address*"
          placeholder="Enter email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password*"
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <InputField
          label="Company name"
          placeholder="Enter company name"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <RadioGroup />

        <div className="signup-btn">
          <Button
            text="Create Account"
            onClick={handleSignup}
            disabled={!isSignupValid}
          />
        </div>
      </div>
    </MobileLayout>
  );
}

export default Signup;