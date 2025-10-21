import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { TechniqueBox } from '../../components/TechniqueBox/TechniqueBox';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Checklist } from '../../components/Checklist/Checklist';

export const Slide11_CoreTechniques: React.FC<SlideProps> = ({ isActive }) => {
  const checklistItems = [
    'Clear task with persona & format?',
    'Sufficient context provided?',
    'Examples included (when helpful)?',
    'Ready to iterate?',
  ];

  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Core Techniques</h2>
      <TechniqueBox title="Zero-Shot vs Few-Shot">
        <p>
          <strong>Zero-Shot:</strong> "Classify sentiment: 'This exceeded expectations!'"
        </p>
        <p>
          <strong>Few-Shot:</strong> Show examples first → "Great service!" → Positive
        </p>
      </TechniqueBox>
      <TechniqueBox title="Prompt Chaining">
        <p>Link outputs: Extract → Analyze → Generate → Format</p>
      </TechniqueBox>
      <TechniqueBox title="Structured Output">
        <CodeBlock>
          {`Return format:
<analysis>
  <summary>...</summary>
  <findings>...</findings>
</analysis>`}
        </CodeBlock>
      </TechniqueBox>
      <Checklist title="Quick Checklist:" items={checklistItems} />
    </Slide>
  );
};
