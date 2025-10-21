import './Checklist.css';

interface ChecklistProps {
  title?: string;
  items: string[];
}

export const Checklist: React.FC<ChecklistProps> = ({ title, items }) => {
  return (
    <div className="checklist">
      {title && <h3>{title}</h3>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
