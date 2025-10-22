import type { SpectrumItemProps } from '../../types';

export const SpectrumItem: React.FC<SpectrumItemProps> = ({ title, description, level }) => {
  return (
    <div className="my-6 p-5 bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
      <h3 className="text-[#667eea] mb-2.5 text-3xl mt-0">
        {level && `${level}. `}
        {title}
      </h3>
      <p className="italic text-gray-500 text-xl leading-[1.8] mb-0">{description}</p>
    </div>
  );
};
