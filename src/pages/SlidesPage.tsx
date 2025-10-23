import { useSlideNavigation } from '../hooks/useSlideNavigation';
import { PresentationContainer } from '../components/layout/PresentationContainer/PresentationContainer';
import { Navigation } from '../components/layout/Navigation/Navigation';
import { SlideNumber } from '../components/layout/SlideNumber/SlideNumber';
import {
  Slide01_Title,
  Slide02_Agenda,
  Slide03_RiseOfAI,
  Slide04_AutonomySpectrum,
  Slide05_AgenticAI,
  Slide06_Components,
  Slide07_AIAssistedDev,
  Slide08_Benefits,
  Slide09_PromptEngineering,
  Slide10_TCREI,
  Slide11_CoreTechniques,
  Slide12_PromptExamples,
  Slide13_DevTools,
  Slide14_MCP,
  Slide15_QA,
  Slide16_ThankYou,
} from './slides';

const TOTAL_SLIDES = 16;

export const SlidesPage = () => {
  const { currentSlide, totalSlides, nextSlide, previousSlide } = useSlideNavigation(TOTAL_SLIDES);

  return (
    <PresentationContainer>
      <SlideNumber current={currentSlide} total={totalSlides} />

      <Slide01_Title isActive={currentSlide === 1} />
      <Slide02_Agenda isActive={currentSlide === 2} />
      <Slide03_RiseOfAI isActive={currentSlide === 3} />
      <Slide04_AutonomySpectrum isActive={currentSlide === 4} />
      <Slide05_AgenticAI isActive={currentSlide === 5} />
      <Slide06_Components isActive={currentSlide === 6} />
      <Slide07_AIAssistedDev isActive={currentSlide === 7} />
      <Slide08_Benefits isActive={currentSlide === 8} />
      <Slide09_PromptEngineering isActive={currentSlide === 9} />
      <Slide10_TCREI isActive={currentSlide === 10} />
      <Slide11_CoreTechniques isActive={currentSlide === 11} />
      <Slide12_PromptExamples isActive={currentSlide === 12} />
      <Slide13_DevTools isActive={currentSlide === 13} />
      <Slide14_MCP isActive={currentSlide === 14} />
      <Slide15_QA isActive={currentSlide === 15} />
      <Slide16_ThankYou isActive={currentSlide === 16} />

      <Navigation onPrevious={previousSlide} onNext={nextSlide} />
    </PresentationContainer>
  );
};
