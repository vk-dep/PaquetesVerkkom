// src/ui/Button.jsx
import './Button.css';
export function Button({ children, variant = 'primary', onClick, className = "", type = "button" }) {
  return (
    <button type={type} className={`vk-btn ${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}