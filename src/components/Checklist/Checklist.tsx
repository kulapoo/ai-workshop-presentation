interface ChecklistProps {
  title?: string;
  items: string[];
}

export const Checklist: React.FC<ChecklistProps> = ({ title, items }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-xl my-5 [&_h3]:text-3xl [&_h3]:text-[#764ba2] [&_h3]:mb-5 [&_h3]:mt-0">
      {title && <h3>{title}</h3>}
      <ul className="p-0 m-0 list-none">
        {items.map((item, index) => (
          <li key={index} className="list-none py-2.5 px-0 border-b border-gray-300 text-xl leading-[1.8] text-gray-600 before:content-['☐_'] before:text-2xl before:mr-2.5 before:text-[#667eea]">{item}</li>
        ))}
      </ul>
    </div>
  );
};
