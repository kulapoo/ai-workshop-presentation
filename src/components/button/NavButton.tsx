import './NavButton.css';

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  return (
    <button className="nav-btn" onClick={onClick}>
      {children}
    </button>
  );
};
