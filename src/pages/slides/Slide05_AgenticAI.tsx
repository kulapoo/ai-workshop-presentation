import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { TechniqueBox } from '../../components/TechniqueBox/TechniqueBox';

export const Slide05_AgenticAI: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">What is Agentic AI?</h2>
      <p style={{ fontSize: '1.5em', marginBottom: '30px' }}>
        Agentic AI can handle tasks with increasing independence, operating within defined boundaries and
        under human oversight.
      </p>
      <TechniqueBox title="Key Capabilities:">
        <ul>
          <li>
            <strong>Make judgment calls</strong> within parameters
          </li>
          <li>
            <strong>Adapt approach</strong> based on situation
          </li>
          <li>
            <strong>Take initiative</strong> rather than waiting for instructions
          </li>
          <li>
            <strong>Problem-solve independently</strong> when encountering obstacles
          </li>
        </ul>
      </TechniqueBox>
    </Slide>
  );
};
