export const VideosPage = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto text-white pb-10">
        <h1 className="text-5xl mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 bg-clip-text text-transparent">Videos</h1>
        <p className="text-xl text-white/70 mb-10">
          Video tutorials and demonstrations for AI development tools
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/8 hover:border-blue-400/30 hover:-translate-y-0.5">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-4">
              <span className="text-5xl opacity-50">🎥</span>
            </div>
            <h3 className="text-xl mb-2 text-blue-400">Getting Started</h3>
            <p className="text-white/60 leading-relaxed text-[0.95rem]">Introduction to AI-assisted development</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/8 hover:border-blue-400/30 hover:-translate-y-0.5">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-4">
              <span className="text-5xl opacity-50">🎥</span>
            </div>
            <h3 className="text-xl mb-2 text-blue-400">Advanced Techniques</h3>
            <p className="text-white/60 leading-relaxed text-[0.95rem]">Deep dive into prompt engineering</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/8 hover:border-blue-400/30 hover:-translate-y-0.5">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-4">
              <span className="text-5xl opacity-50">🎥</span>
            </div>
            <h3 className="text-xl mb-2 text-blue-400">Best Practices</h3>
            <p className="text-white/60 leading-relaxed text-[0.95rem]">Tips and tricks from experts</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/8 hover:border-blue-400/30 hover:-translate-y-0.5">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-4">
              <span className="text-5xl opacity-50">🎥</span>
            </div>
            <h3 className="text-xl mb-2 text-blue-400">Case Studies</h3>
            <p className="text-white/60 leading-relaxed text-[0.95rem]">Real-world examples and success stories</p>
          </div>
        </div>
      </div>
    </div>
  );
};
