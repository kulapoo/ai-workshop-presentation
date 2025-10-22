import type { FrameworkSectionProps } from '../../types';

export const FrameworkSection: React.FC<FrameworkSectionProps> = ({ title, children }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl my-5 border-2 border-gray-200 [&_h3]:text-3xl [&_h3]:text-[#764ba2] [&_h3]:mb-5 [&_h3]:mt-0 [&_p]:text-xl [&_p]:leading-[1.8] [&_p]:text-gray-600 [&_p]:mb-4 [&_ul]:pl-8 [&_ul]:mb-5 [&_li]:text-xl [&_li]:leading-[1.8] [&_li]:text-gray-600 [&_li]:mb-4">
      <h3>{title}</h3>
      {children}
    </div>
  );
};
