import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';
import { BookOpen, Link, Lightbulb, Rocket } from 'lucide-react';

export const Slide15_ThankYou: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Thank You!</h2>
      <div className="center-content">
        <h3>Resources & Links</h3>
        <FrameworkSection title="">
          <p className="flex items-center gap-2">
            <BookOpen size={24} className="text-[#667eea]" /> Documentation & Guides
          </p>
          <p className="flex items-center gap-2">
            <Link size={24} className="text-[#667eea]" /> Tool Repositories
          </p>
          <p className="flex items-center gap-2">
            <Lightbulb size={24} className="text-[#667eea]" /> Best Practices
          </p>
          <p className="flex items-center gap-2">
            <Rocket size={24} className="text-[#667eea]" /> Getting Started Tutorials
          </p>
        </FrameworkSection>
        <p className="tagline" style={{ marginTop: '50px' }}>
          Ready to build with AI?
        </p>
      </div>
    </Slide>
  );
};
