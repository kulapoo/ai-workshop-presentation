import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';
import { Globe, Wrench, Brain, Database } from 'lucide-react';

export const Slide06_Components: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Agent AI Components</h2>
      <FrameworkSection title={<span className="flex items-center gap-2"><Globe size={24} /> 1. Environment</span>}>
        <p>Task context and available tools</p>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><Wrench size={24} /> 2. Tools</span>}>
        <ul>
          <li>Web search</li>
          <li>Code execution</li>
          <li>Database queries</li>
          <li>API calls</li>
        </ul>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><Brain size={24} /> 3. Planner</span>}>
        <p>Model deciding tool usage and action sequences</p>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><Database size={24} /> 4. Memory</span>}>
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
