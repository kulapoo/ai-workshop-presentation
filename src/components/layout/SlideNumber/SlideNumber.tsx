import type { SlideNumberProps } from '../../../types';

export const SlideNumber: React.FC<SlideNumberProps> = ({ current, total }) => {
  return (
    <div className="absolute top-8 right-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-2.5 px-5 rounded-full font-semibold z-[100]">
      {current} / {total}
    </div>
  );
};
