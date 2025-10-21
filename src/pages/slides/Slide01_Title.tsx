import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { StatCard } from '../../components/StatCard/StatCard';

export const Slide01_Title: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <div className="center-content">
        <h1>AI Developer Tools</h1>
        <p className="tagline">Building the Future with Intelligent Systems</p>
        <div className="stats-grid" style={{ marginTop: '60px' }}>
          <StatCard number="92%" label="Companies using AI" />
          <StatCard number="10x" label="Developer Productivity" />
          <StatCard number="2025" label="The Year of Agents" />
        </div>
      </div>
    </Slide>
  );
};
