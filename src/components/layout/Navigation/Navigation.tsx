import type { NavigationProps } from '../../../types';
import { NavButton } from '../../button/NavButton';

export const Navigation: React.FC<NavigationProps> = ({ onPrevious, onNext }) => {
  return (
    <div className="fixed bottom-8 left-[calc(50%+30px)] -translate-x-1/2 flex gap-5 z-[100]">
      <NavButton onClick={onPrevious}>← Previous</NavButton>
      <NavButton onClick={onNext}>Next →</NavButton>
    </div>
  );
};
