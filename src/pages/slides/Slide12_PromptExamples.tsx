import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { PromptExample } from '../../components/PromptExample/PromptExample';
import { X, Check } from 'lucide-react';

export const Slide12_PromptExamples: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">Prompt Examples</h2>
      <PromptExample
        title={
          <span className="flex items-center gap-2">
            <X size={24} /> Bad Prompt
          </span>
        }
        isGood={false}
      >
        <p>"Generate a market analysis report for a new product category."</p>
      </PromptExample>
      <PromptExample
        title={
          <span className="flex items-center gap-2">
            <Check size={24} /> Good Prompt
          </span>
        }
        isGood={true}
      >
        <p>
          <strong>Prompt:</strong>
        </p>
        <p>
          Generate a comprehensive market analysis report for a new product category in the finance
          industry for an audience of small and medium-sized businesses (SMBs). Structure the report
          with:
        </p>
        <ol>
          <li>Executive Summary</li>
          <li>Industry Overview</li>
          <li>Target Audience Analysis</li>
          <li>Competitive Landscape</li>
          <li>Product Opportunity and Recommendations</li>
          <li>Financial Projections</li>
        </ol>
        <p>The tone should be professional and tailored to SMBs.</p>
      </PromptExample>
    </Slide>
  );
};
