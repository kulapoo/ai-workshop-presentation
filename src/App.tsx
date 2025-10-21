import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar/Sidebar';
import { SlidesPage } from './pages/SlidesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { VideosPage } from './pages/VideosPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/slides" replace />} />
            <Route path="/slides" element={<SlidesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/videos" element={<VideosPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
