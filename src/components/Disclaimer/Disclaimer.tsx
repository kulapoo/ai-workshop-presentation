interface DisclaimerProps {
  children: React.ReactNode;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ children }) => {
  return <div className="bg-amber-50 border-l-[5px] border-amber-400 p-5 my-5 rounded [&_p]:text-amber-900 [&_p]:my-1 [&_p]:text-xl [&_p]:leading-[1.8]">{children}</div>;
};
