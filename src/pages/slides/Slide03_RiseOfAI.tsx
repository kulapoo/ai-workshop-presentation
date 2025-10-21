import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';
import { SpectrumItem } from '../../components/SpectrumItem/SpectrumItem';

export const Slide03_RiseOfAI: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Rise of AI Engineering</h2>
      <FrameworkSection title="What is AI Engineering?">
        <p style={{ fontSize: '1.5em', color: '#667eea', fontWeight: 600 }}>
          "Building applications on top of AI foundation models - GPT, Anthropic, Gemini, etc."
        </p>
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
