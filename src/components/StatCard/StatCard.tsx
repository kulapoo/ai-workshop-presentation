import type { StatCardProps } from '../../types';

export const StatCard: React.FC<StatCardProps> = ({ number, label, link, linkLabel }) => {
  const content = (
    <>
      <div className="text-5xl font-black mb-2.5 text-[#667eea] [text-shadow:_0_2px_4px_rgba(102,126,234,0.2)]">
        {number}
      </div>
      <div className="text-xl text-gray-800 font-bold tracking-wide">
        {label}
      </div>
      {link && linkLabel && (
        <div className="mt-3 text-sm text-blue-600 hover:text-blue-800 underline">
          {linkLabel}
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl text-center shadow-[0_8px_25px_rgba(0,0,0,0.15)] border-2 border-black/5 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] hover:scale-105 no-underline"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl text-center shadow-[0_8px_25px_rgba(0,0,0,0.15)] border-2 border-black/5">
      {content}
    </div>
  );
};
