import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { AgendaItem } from '../../components/AgendaItem/AgendaItem';
import { Disclaimer } from '../../components/Disclaimer/Disclaimer';

export const Slide02_Agenda: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Agenda</h2>
      <ul className="agenda-list">
        <AgendaItem emoji="📋" text="Introduction" />
        <AgendaItem emoji="🤖" text="Agentic AI" />
        <AgendaItem emoji="💡" text="Prompt Engineering" />
        <AgendaItem emoji="🛠️" text="Tools" />
        <AgendaItem emoji="❓" text="Q&A" />
        <AgendaItem emoji="📚" text="Resources | Links" />
      </ul>
      <Disclaimer>
        <p>
          <strong>⚠️ Disclaimer:</strong>
        </p>
        <p>• Security considerations apply</p>
        <p>• Sharing common tools and practices</p>
        <p>• AI is still evolving rapidly</p>
      </Disclaimer>
    </Slide>
  );
};
