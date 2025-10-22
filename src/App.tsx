import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar/Sidebar';
import { SlidesPage } from './pages/SlidesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { VideosPage } from './pages/VideosPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full min-h-screen">
        <Sidebar />
        <main className="flex-1 w-[calc(100vw-60px)] overflow-x-hidden">
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
