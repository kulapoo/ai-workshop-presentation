import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { AgendaItem } from '../../components/AgendaItem/AgendaItem';
import { Disclaimer } from '../../components/Disclaimer/Disclaimer';
import { ClipboardList, Bot, Lightbulb, Wrench, HelpCircle, BookOpen, AlertTriangle } from 'lucide-react';

export const Slide02_Agenda: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Agenda</h2>
      <ul className="agenda-list">
        <AgendaItem icon={<ClipboardList size={28} />} text="Introduction" />
        <AgendaItem icon={<Bot size={28} />} text="Agentic AI" />
        <AgendaItem icon={<Lightbulb size={28} />} text="Prompt Engineering" />
        <AgendaItem icon={<Wrench size={28} />} text="Tools" />
        <AgendaItem icon={<HelpCircle size={28} />} text="Open Discussion, Q&A" />
        <AgendaItem icon={<BookOpen size={28} />} text="Resources | Links" />
      </ul>
      <Disclaimer>
        <p className="flex items-center gap-2">
          <strong className="flex items-center gap-2"><AlertTriangle size={20} /> Disclaimer:</strong>
        </p>
        <p>• Security considerations apply</p>
        <p>• Sharing common tools and practices</p>
        <p>• AI is still evolving rapidly</p>
      </Disclaimer>
    </Slide>
  );
};
