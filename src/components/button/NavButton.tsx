interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="px-6 py-3 bg-white border-2 border-[#667eea] rounded-full text-base font-semibold text-[#667eea] cursor-pointer transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
