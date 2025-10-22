import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`fixed top-0 left-0 h-screen bg-gradient-to-br from-blue-900 to-blue-700 text-white transition-[width] duration-300 flex flex-col z-[1000] shadow-[2px_0_8px_rgba(0,0,0,0.1)] ${isCollapsed ? 'w-[60px]' : 'w-[200px]'}`}>
      <button
        onClick={toggleSidebar}
        className="bg-white/10 border-none text-white p-3 cursor-pointer text-lg transition-colors duration-200 border-b border-white/10 hover:bg-white/20"
        aria-label="Toggle sidebar"
      >
        {isCollapsed ? '→' : '←'}
      </button>

      <nav className="flex flex-col py-4 gap-1">
        <NavLink
          to="/slides"
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-white/80 no-underline transition-all duration-200 whitespace-nowrap overflow-hidden hover:bg-white/10 hover:text-white ${isActive ? 'bg-white/20 text-white border-l-[3px] border-blue-400' : ''}`}
        >
          <span className="text-xl min-w-[28px] text-center">📊</span>
          {!isCollapsed && <span className="text-sm font-medium">Slides</span>}
        </NavLink>

        <NavLink
          to="/resources"
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-white/80 no-underline transition-all duration-200 whitespace-nowrap overflow-hidden hover:bg-white/10 hover:text-white ${isActive ? 'bg-white/20 text-white border-l-[3px] border-blue-400' : ''}`}
        >
          <span className="text-xl min-w-[28px] text-center">📚</span>
          {!isCollapsed && <span className="text-sm font-medium">Resources</span>}
        </NavLink>

        <NavLink
          to="/videos"
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-white/80 no-underline transition-all duration-200 whitespace-nowrap overflow-hidden hover:bg-white/10 hover:text-white ${isActive ? 'bg-white/20 text-white border-l-[3px] border-blue-400' : ''}`}
        >
          <span className="text-xl min-w-[28px] text-center">🎥</span>
          {!isCollapsed && <span className="text-sm font-medium">Videos</span>}
        </NavLink>
      </nav>
    </aside>
  );
};
