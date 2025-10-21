import type { AgendaItemProps } from '../../types';
import './AgendaItem.css';

export const AgendaItem: React.FC<AgendaItemProps> = ({ emoji, text }) => {
  return (
    <li className="agenda-item">
      {emoji} {text}
    </li>
  );
};
