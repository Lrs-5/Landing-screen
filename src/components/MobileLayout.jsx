function MobileLayout({ children, title }) {
  return (
    <div className="app-bg">
      <div className="mobile-wrapper">
        {title && <div className="top-bar">{title}</div>}
        <div className="screen-content">{children}</div>
      </div>
    </div>
  );
}

export default MobileLayout;