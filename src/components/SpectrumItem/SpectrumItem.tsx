import type { SpectrumItemProps } from '../../types';
import './SpectrumItem.css';

export const SpectrumItem: React.FC<SpectrumItemProps> = ({ title, description, level }) => {
  return (
    <div className="spectrum-item">
      <h3>
        {level && `${level}. `}
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};
