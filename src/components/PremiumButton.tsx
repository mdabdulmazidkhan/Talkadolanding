import React from "react";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    onClick={() => window.location.href = "https://chat.talkado.xyz/"}
    style={{
      background: "#14b8a6",
      color: "#fff",
      border: "none",
      borderRadius: 6,
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      ...props.style
    }}
  >
    {children}
  </button>
);

export default PremiumButton;