import './Disclaimer.css';

interface DisclaimerProps {
  children: React.ReactNode;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ children }) => {
  return <div className="disclaimer">{children}</div>;
};
