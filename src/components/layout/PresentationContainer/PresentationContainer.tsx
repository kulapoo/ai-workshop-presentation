import './PresentationContainer.css';

interface PresentationContainerProps {
  children: React.ReactNode;
}

export const PresentationContainer: React.FC<PresentationContainerProps> = ({ children }) => {
  return <div className="presentation-container">{children}</div>;
};
