import MobileLayout from "../components/MobileLayout";

function Account() {
  const user = JSON.parse(localStorage.getItem("popxUser"));

  const name = user?.fullName?.trim() ? user.fullName : "Your Name";
  const email = user?.email?.trim() ? user.email : "your@email.com";

  return (
    <MobileLayout title="Account Settings">
      <div className="account-page">
        <div className="profile-card">
          <div className="profile-top">
            <div className="profile-img-wrap">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Profile"
                className="profile-img"
              />
              <div className="camera-icon">📷</div>
            </div>

            <div>
              <h3 className="profile-name">{name}</h3>
              <p className="profile-email">{email}</p>
            </div>
          </div>

          <p className="profile-desc">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}

export default Account;