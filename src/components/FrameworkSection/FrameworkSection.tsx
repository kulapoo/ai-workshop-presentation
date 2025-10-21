import type { FrameworkSectionProps } from '../../types';
import './FrameworkSection.css';

export const FrameworkSection: React.FC<FrameworkSectionProps> = ({ title, children }) => {
  return (
    <div className="framework-section">
      <h3>{title}</h3>
      {children}
    </div>
  );
};
