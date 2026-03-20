// src/ui/Card.jsx
export function Card({ children, variant = 'default', badge = null, className = "" }) {
  return (
    <div className={`vk-card ${variant} ${className}`}>
      {badge && <div className="vk-card-badge-floating">{badge}</div>}
      <div className="vk-card-content">
        {children}
      </div>
    </div>
  );
}