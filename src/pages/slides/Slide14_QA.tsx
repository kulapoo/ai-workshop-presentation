import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';

export const Slide14_QA: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Q&A</h2>
      <div className="center-content">
        <div style={{ fontSize: '5em', marginBottom: '30px' }}>❓</div>
        <h3>Questions & Discussion</h3>
        <p style={{ fontSize: '1.5em', marginTop: '30px' }}>
          Let's explore your questions about AI Engineering, Agentic AI, and Prompt Engineering
        </p>
      </div>
    </Slide>
  );
};
