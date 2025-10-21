import './CodeBlock.css';

interface CodeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return <div className="code-block">{children}</div>;
};
