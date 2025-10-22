import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';
import { SpectrumItem } from '../../components/SpectrumItem/SpectrumItem';

export const Slide03_RiseOfAI: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Introduction</h2>
      <FrameworkSection title="Rise of AI Enginnering">
        <p style={{ fontSize: '1.5em', color: '#667eea', fontWeight: 600 }}>
          "Building applications on top of AI foundation models - GPT, Anthropic, Gemini, etc."
        </p>
      </FrameworkSection>

      <FrameworkSection title="Core Components">
        <ul style={{ fontSize: '1.3em', lineHeight: 1.8, textAlign: 'left' }}>
          <li><strong>Foundation Models:</strong> GPT, Claude, Gemini, and other LLMs</li>
          <li><strong>Agentic Coding:</strong> AI assistants that autonomously write, debug, and refactor code</li>
          <li><strong>Prompt Engineering:</strong> Crafting effective instructions to get optimal AI responses</li>
          <li><strong>Integration:</strong> Connecting AI capabilities into real-world applications</li>
        </ul>
      </FrameworkSection>

      <div className="spectrum-container">
        <SpectrumItem
          title="AI Engineer VS ML Engineer"
          description="Focus on application development vs model training"
        />
        <SpectrumItem
          title="New Workflow Rewards"
          description="Rapid iteration and experimentation"
        />
        <SpectrumItem title="Industry Impact" description="Transforming how we build software" />
      </div>
    </Slide>
  );
};
