import type { TechniqueBoxProps } from '../../types';
import './TechniqueBox.css';

export const TechniqueBox: React.FC<TechniqueBoxProps> = ({ title, children }) => {
  return (
    <div className="technique-box">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
