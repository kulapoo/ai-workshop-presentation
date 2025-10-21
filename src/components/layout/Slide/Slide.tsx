import type { SlideProps } from '../../../types';
import './Slide.css';

interface SlideComponentProps extends SlideProps {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideComponentProps> = ({ isActive, children }) => {
  return <div className={`slide ${isActive ? 'active' : ''}`}>{children}</div>;
};
