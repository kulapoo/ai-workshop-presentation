interface PresentationContainerProps {
  children: React.ReactNode;
}

export const PresentationContainer: React.FC<PresentationContainerProps> = ({ children }) => {
  return <div className="w-full h-screen flex items-center justify-center relative">{children}</div>;
};
