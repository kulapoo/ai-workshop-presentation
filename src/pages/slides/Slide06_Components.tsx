import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';

export const Slide06_Components: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Agent AI Components</h2>
      <FrameworkSection title="🌍 1. Environment">
        <p>Task context and available tools</p>
      </FrameworkSection>
      <FrameworkSection title="🔧 2. Tools">
        <ul>
          <li>Web search</li>
          <li>Code execution</li>
          <li>Database queries</li>
          <li>API calls</li>
        </ul>
      </FrameworkSection>
      <FrameworkSection title="🧠 3. Planner">
        <p>Model deciding tool usage and action sequences</p>
      </FrameworkSection>
      <FrameworkSection title="💾 4. Memory">
        <ul>
          <li>
            <strong>Short-term:</strong> Current conversation context
          </li>
          <li>
            <strong>Long-term:</strong> Persistent information across sessions
          </li>
        </ul>
      </FrameworkSection>
    </Slide>
  );
};
