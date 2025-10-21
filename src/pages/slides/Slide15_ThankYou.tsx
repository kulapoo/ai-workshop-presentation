import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { FrameworkSection } from '../../components/FrameworkSection/FrameworkSection';

export const Slide15_ThankYou: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Thank You!</h2>
      <div className="center-content">
        <h3>Resources & Links</h3>
        <FrameworkSection title="">
          <p>📚 Documentation & Guides</p>
          <p>🔗 Tool Repositories</p>
          <p>💡 Best Practices</p>
          <p>🚀 Getting Started Tutorials</p>
        </FrameworkSection>
        <p className="tagline" style={{ marginTop: '50px' }}>
          Ready to build with AI?
        </p>
      </div>
    </Slide>
  );
};
