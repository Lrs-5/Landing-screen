import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import Button from "../components/Button";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="landing-content">
        <div>
          <h1 className="main-heading">Welcome to PopX</h1>
          <p className="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="landing-buttons">
          <Button text="Create Account" onClick={() => navigate("/signup")} />
          <Button
            text="Already Registered? Login"
            type="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </MobileLayout>
  );
}

export default LandingPage;