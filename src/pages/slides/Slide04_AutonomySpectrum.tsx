import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { SpectrumItem } from '../../components/SpectrumItem/SpectrumItem';

export const Slide04_AutonomySpectrum: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">AI Autonomy Spectrum</h2>
      <div className="spectrum-container">
        <SpectrumItem
          level={1}
          title="Chatbot"
          description="Basic Q&A, follows scripts - Customer service bots"
        />
        <SpectrumItem
          level={2}
          title="AI Assistant"
          description="Conversational, context-aware - Claude, ChatGPT"
        />
        <SpectrumItem
          level={3}
          title="AI Copilot"
          description="Works alongside in workflows - GitHub Copilot"
        />
        <SpectrumItem
          level={4}
          title="AI Agent"
          description="Independent task completion - Claude Code, Auto-GPT"
        />
        <SpectrumItem
          level={5}
          title="Autonomous AI"
          description="Fully independent operations - Self-driving cars"
        />
      </div>
    </Slide>
  );
};
