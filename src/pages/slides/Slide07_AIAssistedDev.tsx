import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { SpectrumItem } from '../../components/SpectrumItem/SpectrumItem';
import { Target, Bot } from 'lucide-react';

export const Slide07_AIAssistedDev: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">AI-Assisted Development</h2>
      <div className="spectrum-container">
        <SpectrumItem
          title={
            <span className="flex items-center gap-2">
              <Target size={24} /> Vibe Coding
            </span>
          }
          description="Human-driven workflow using conversational prompts to guide AI tools"
        />
        <p style={{ color: '#667eea', fontWeight: 600, marginTop: '10px' }}>Human in the Loop</p>
        <SpectrumItem
          title={
            <span className="flex items-center gap-2">
              <Bot size={24} /> Agentic Coding
            </span>
          }
          description="Agent-driven architecture delegating goals to autonomous AI systems"
        />
        <p style={{ color: '#764ba2', fontWeight: 600, marginTop: '10px' }}>
          Multi-step task execution
        </p>
      </div>
    </Slide>
  );
};
