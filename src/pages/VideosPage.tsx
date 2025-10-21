import './VideosPage.css';

export const VideosPage = () => {
  return (
    <div className="videos-page">
      <div className="page-content">
        <h1>Videos</h1>
        <p className="page-description">
          Video tutorials and demonstrations for AI development tools
        </p>

        <div className="videos-grid">
          <div className="video-card">
            <div className="video-placeholder">
              <span className="video-icon">🎥</span>
            </div>
            <h3>Getting Started</h3>
            <p>Introduction to AI-assisted development</p>
          </div>

          <div className="video-card">
            <div className="video-placeholder">
              <span className="video-icon">🎥</span>
            </div>
            <h3>Advanced Techniques</h3>
            <p>Deep dive into prompt engineering</p>
          </div>

          <div className="video-card">
            <div className="video-placeholder">
              <span className="video-icon">🎥</span>
            </div>
            <h3>Best Practices</h3>
            <p>Tips and tricks from experts</p>
          </div>

          <div className="video-card">
            <div className="video-placeholder">
              <span className="video-icon">🎥</span>
            </div>
            <h3>Case Studies</h3>
            <p>Real-world examples and success stories</p>
          </div>
        </div>
      </div>
    </div>
  );
};
