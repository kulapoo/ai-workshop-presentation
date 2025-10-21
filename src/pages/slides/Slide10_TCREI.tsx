import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';

export const Slide10_TCREI: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">The TCREI Framework</h2>
      <p style={{ textAlign: 'center', fontSize: '1.5em', color: '#667eea', marginBottom: '30px' }}>
        "Thoughtfully Create Really Excellent Inputs"
      </p>
      <FrameworkSection title="📝 Task - Define What You Want">
        <ul>
          <li>Assign persona ("You're a marketing expert...")</li>
          <li>Specify output format (table, bullets, paragraphs)</li>
        </ul>
      </FrameworkSection>
      <FrameworkSection title="🎯 Context - Provide Details">
        <p>Background information, goals, constraints</p>
      </FrameworkSection>
      <FrameworkSection title="📚 References - Show Examples">
        <p>Provide 2-5 concrete examples with clear labels</p>
      </FrameworkSection>
      <FrameworkSection title="✅ Evaluate - Check Output">
        <p>Accuracy, bias, relevance, consistency</p>
      </FrameworkSection>
      <FrameworkSection title="🔄 Iterate - Refine & Improve">
        <p>Break prompts into shorter sentences, try different phrasing</p>
      </FrameworkSection>
    </Slide>
  );
};
