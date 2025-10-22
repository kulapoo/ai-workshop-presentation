import type { TechniqueBoxProps } from '../../types';

export const TechniqueBox: React.FC<TechniqueBoxProps> = ({ title, children }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 p-6 rounded-2xl my-5 [&_h3]:text-3xl [&_h3]:text-[#764ba2] [&_h3]:mb-5 [&_h3]:mt-0 [&_p]:text-xl [&_p]:leading-[1.8] [&_p]:text-gray-600 [&_p]:mb-4 [&_ul]:pl-8 [&_ul]:mb-5 [&_li]:text-xl [&_li]:leading-[1.8] [&_li]:text-gray-600 [&_li]:mb-4">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
