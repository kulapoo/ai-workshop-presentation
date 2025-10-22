interface PromptExampleProps {
  title: React.ReactNode;
  isGood: boolean;
  children: React.ReactNode;
}

export const PromptExample: React.FC<PromptExampleProps> = ({ title, isGood, children }) => {
  return (
    <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-5 my-5 [&_p]:text-xl [&_p]:leading-[1.8] [&_p]:text-gray-600 [&_p]:mb-4 [&_ol]:pl-8 [&_ol]:mb-5 [&_li]:text-lg [&_li]:leading-[1.8] [&_li]:text-gray-600 [&_li]:mb-2.5">
      <h4 className={`mb-4 text-2xl mt-0 flex items-center gap-2 ${isGood ? 'text-green-600' : 'text-red-600'}`}>{title}</h4>
      {children}
    </div>
  );
};
