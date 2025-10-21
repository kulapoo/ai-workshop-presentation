import type { StatCardProps } from '../../types';
import './StatCard.css';

export const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};
