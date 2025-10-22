import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';
import { FileText, Target, BookOpen, CheckCircle, RefreshCw } from 'lucide-react';

export const Slide10_TCREI: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">The TCREI Framework</h2>
      <p style={{ textAlign: 'center', fontSize: '1.5em', color: '#667eea', marginBottom: '30px' }}>
        "Thoughtfully Create Really Excellent Inputs"
      </p>
      <FrameworkSection title={<span className="flex items-center gap-2"><FileText size={24} /> Task - Define What You Want</span>}>
        <ul>
          <li>Assign persona ("You're a marketing expert...")</li>
          <li>Specify output format (table, bullets, paragraphs)</li>
        </ul>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><Target size={24} /> Context - Provide Details</span>}>
        <p>Background information, goals, constraints</p>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><BookOpen size={24} /> References - Show Examples</span>}>
        <p>Provide 2-5 concrete examples with clear labels</p>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><CheckCircle size={24} /> Evaluate - Check Output</span>}>
        <p>Accuracy, bias, relevance, consistency</p>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><RefreshCw size={24} /> Iterate - Refine & Improve</span>}>
        <p>Break prompts into shorter sentences, try different phrasing</p>
      </FrameworkSection>
    </Slide>
  );
};
