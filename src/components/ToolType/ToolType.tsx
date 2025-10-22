interface ToolTypeProps {
  type: string;
}

export const ToolType: React.FC<ToolTypeProps> = ({ type }) => {
  return <span className="inline-block bg-[#667eea] text-white py-1 px-2.5 rounded text-sm mx-1">{type}</span>;
};
