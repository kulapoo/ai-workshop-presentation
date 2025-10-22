import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { StatCard } from '../../components/StatCard/StatCard';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';
import { Rocket, Lightbulb, Target } from 'lucide-react';

export const Slide08_Benefits: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Benefits of AI Developer Tools</h2>
      <div className="stats-grid">
        <StatCard number="75%" label="Faster Development" />
        <StatCard number="60%" label="Fewer Bugs" />
        <StatCard number="85%" label="Code Quality" />
      </div>
      <FrameworkSection title={<span className="flex items-center gap-2"><Rocket size={24} /> Productivity Benefits</span>}>
        <ul>
          <li>
            <strong>Accelerated Development:</strong> Complete complex tasks in minutes instead of
            hours
          </li>
          <li>
            <strong>Reduced Cognitive Load:</strong> Focus on architecture while AI handles
            boilerplate
          </li>
          <li>
            <strong>24/7 Pair Programming:</strong> Always-available coding assistant
          </li>
        </ul>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><Lightbulb size={24} /> Quality Benefits</span>}>
        <ul>
          <li>
            <strong>Consistent Code Style:</strong> Maintains coding standards automatically
          </li>
          <li>
            <strong>Built-in Best Practices:</strong> Incorporates industry patterns and conventions
          </li>
          <li>
            <strong>Comprehensive Testing:</strong> Generate test cases and edge case scenarios
          </li>
        </ul>
      </FrameworkSection>
      <FrameworkSection title={<span className="flex items-center gap-2"><Target size={24} /> Business Benefits</span>}>
        <ul>
          <li>
            <strong>Faster Time-to-Market:</strong> Ship features and products rapidly
          </li>
          <li>
            <strong>Reduced Development Costs:</strong> Lower resource requirements per project
          </li>
          <li>
            <strong>Competitive Advantage:</strong> Stay ahead with cutting-edge development
            practices
          </li>
        </ul>
      </FrameworkSection>
    </Slide>
  );
};
