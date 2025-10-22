import type { AgendaItemProps } from '../../types';

export const AgendaItem: React.FC<AgendaItemProps> = ({ icon, text }) => {
  return (
    <li className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] my-4 px-8 py-5 rounded-xl text-2xl font-medium transition-transform duration-300 list-none hover:translate-x-2.5 flex items-center gap-3">
      {icon} <span>{text}</span>
    </li>
  );
};
