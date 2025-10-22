interface CodeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return <div className="bg-[#2d2d2d] text-[#f8f8f2] p-5 rounded-xl font-mono my-5 overflow-x-auto whitespace-pre-wrap text-lg">{children}</div>;
};
