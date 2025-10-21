import { useState, useEffect, useCallback } from 'react';

interface UseSlideNavigationReturn {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  previousSlide: () => void;
  goToSlide: (slideNumber: number) => void;
}

const STORAGE_KEY = 'presentation-current-slide';

const getInitialSlide = (): number => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = parseInt(saved, 10);
      return !isNaN(parsed) && parsed >= 1 ? parsed : 1;
    }
  } catch (error) {
    console.warn('Failed to read from localStorage:', error);
  }
  return 1;
};

export const useSlideNavigation = (total: number): UseSlideNavigationReturn => {
  const [currentSlide, setCurrentSlide] = useState(getInitialSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= total ? 1 : prev + 1));
  }, [total]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 1 ? total : prev - 1));
  }, [total]);

  const goToSlide = useCallback(
    (slideNumber: number) => {
      if (slideNumber >= 1 && slideNumber <= total) {
        setCurrentSlide(slideNumber);
      }
    },
    [total]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide]);

  // Save current slide to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, currentSlide.toString());
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  }, [currentSlide]);

  return {
    currentSlide,
    totalSlides: total,
    nextSlide,
    previousSlide,
    goToSlide,
  };
};
