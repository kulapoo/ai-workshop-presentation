import './PromptExample.css';

interface PromptExampleProps {
  title: string;
  isGood: boolean;
  children: React.ReactNode;
}

export const PromptExample: React.FC<PromptExampleProps> = ({ title, isGood, children }) => {
  return (
    <div className="prompt-example">
      <h4 className={isGood ? 'good' : 'bad'}>{title}</h4>
      {children}
    </div>
  );
};
