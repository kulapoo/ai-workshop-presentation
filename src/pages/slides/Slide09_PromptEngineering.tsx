import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';
import { TechniqueBox } from '../../components/TechniqueBox/TechniqueBox';

export const Slide09_PromptEngineering: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Prompt Engineering Essentials</h2>
      <FrameworkSection title="What is Prompt Engineering?">
        <p style={{ fontSize: '1.4em' }}>
          Crafting instructions that guide AI models to generate desired outcomes
        </p>
        <p style={{ color: '#667eea', fontWeight: 600, marginTop: '20px' }}>
          Why it matters: Cost-effective, accessible foundation before advanced techniques
        </p>
      </FrameworkSection>
      <TechniqueBox title="Key Principle">
        <p style={{ fontSize: '1.3em', fontWeight: 600 }}>"Clarity beats complexity"</p>
        <p>
          Explicit instructions, relevant context, and systematic iteration produce better results
          than clever tricks
        </p>
      </TechniqueBox>
    </Slide>
  );
};
