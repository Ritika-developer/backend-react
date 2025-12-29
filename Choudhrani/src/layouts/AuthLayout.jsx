import "../styles/authLayout.css";

export default function AuthLayout({ children }) {
  return (
    <div className="auth-page">
      <div className="auth-card animate-card">
        {children}
      </div>
    </div>
  );
}
