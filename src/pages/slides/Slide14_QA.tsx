import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { HelpCircle } from 'lucide-react';

export const Slide14_QA: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Q&A</h2>
      <div className="center-content">
        <div className="flex justify-center mb-8">
          <HelpCircle size={128} className="text-[#667eea]" />
        </div>
        <h3>Questions & Discussion</h3>
        <p style={{ fontSize: '1.5em', marginTop: '30px' }}>
          Let's explore your questions about AI Engineering, Agentic AI, and Prompt Engineering
        </p>
      </div>
    </Slide>
  );
};
