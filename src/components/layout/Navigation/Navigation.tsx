import type { NavigationProps } from '../../../types';
import { NavButton } from '../../button/NavButton';
import './Navigation.css';

export const Navigation: React.FC<NavigationProps> = ({ onPrevious, onNext }) => {
  return (
    <div className="navigation">
      <NavButton onClick={onPrevious}>← Previous</NavButton>
      <NavButton onClick={onNext}>Next →</NavButton>
    </div>
  );
};
