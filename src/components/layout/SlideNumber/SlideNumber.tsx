import type { SlideNumberProps } from '../../../types';
import './SlideNumber.css';

export const SlideNumber: React.FC<SlideNumberProps> = ({ current, total }) => {
  return (
    <div className="slide-number">
      {current} / {total}
    </div>
  );
};
