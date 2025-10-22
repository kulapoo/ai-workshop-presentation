import type { SlideProps } from '../../../types';

interface SlideComponentProps extends SlideProps {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideComponentProps> = ({ isActive, children }) => {
  return (
    <div
      className={`w-[90%] max-w-[1200px] h-[85vh] bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-[60px] overflow-y-auto animate-slideIn ${isActive ? 'block' : 'hidden'} [&_h1]:text-6xl [&_h1]:bg-gradient-to-br [&_h1]:from-[#667eea] [&_h1]:to-[#764ba2] [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h1]:text-center [&_h1]:mb-8 [&_h2]:text-4xl [&_h2]:text-[#667eea] [&_h2]:mb-6 [&_h2]:mt-9 [&_h3]:text-3xl [&_h3]:text-[#764ba2] [&_h3]:mb-5 [&_h3]:mt-8 [&_p]:text-xl [&_p]:leading-[1.8] [&_p]:text-gray-600 [&_p]:mb-4 [&_ul]:pl-8 [&_ul]:mb-5 [&_li]:text-xl [&_li]:leading-[1.8] [&_li]:text-gray-600 [&_li]:mb-4`}
    >
      {children}
    </div>
  );
};
