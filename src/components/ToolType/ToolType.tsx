import './ToolType.css';

interface ToolTypeProps {
  type: string;
}

export const ToolType: React.FC<ToolTypeProps> = ({ type }) => {
  return <span className="tool-type">{type}</span>;
};
