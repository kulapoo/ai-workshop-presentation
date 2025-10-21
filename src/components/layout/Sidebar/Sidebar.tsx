import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar} className="sidebar-toggle" aria-label="Toggle sidebar">
        {isCollapsed ? '→' : '←'}
      </button>

      <nav className="sidebar-nav">
        <NavLink to="/slides" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">📊</span>
          {!isCollapsed && <span className="nav-label">Slides</span>}
        </NavLink>

        <NavLink to="/resources" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">📚</span>
          {!isCollapsed && <span className="nav-label">Resources</span>}
        </NavLink>

        <NavLink to="/videos" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">🎥</span>
          {!isCollapsed && <span className="nav-label">Videos</span>}
        </NavLink>
      </nav>
    </aside>
  );
};
