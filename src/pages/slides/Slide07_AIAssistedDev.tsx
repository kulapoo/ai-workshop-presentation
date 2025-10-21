import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { SpectrumItem } from '../../components/SpectrumItem/SpectrumItem';
import { TechniqueBox } from '../../components/TechniqueBox/TechniqueBox';

export const Slide07_AIAssistedDev: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">AI-Assisted Development</h2>
      <div className="spectrum-container">
        <SpectrumItem title="🎯 Vibe Coding" description="Human-driven workflow using conversational prompts to guide AI tools" />
        <p style={{ color: '#667eea', fontWeight: 600, marginTop: '10px' }}>Human in the Loop</p>
        <SpectrumItem
          title="🤖 Agentic Coding"
          description="Agent-driven architecture delegating goals to autonomous AI systems"
        />
        <p style={{ color: '#764ba2', fontWeight: 600, marginTop: '10px' }}>
          Multi-step task execution
        </p>
      </div>
      <TechniqueBox title="Demo Examples:">
        <ul>
          <li>Generate expense tracker from scratch</li>
          <li>Enhance "Experience Maldives" application</li>
          <li>Developer agent vs System analyst agent</li>
        </ul>
      </TechniqueBox>
    </Slide>
  );
};
