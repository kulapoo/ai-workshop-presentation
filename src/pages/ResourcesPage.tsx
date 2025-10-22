export const ResourcesPage = () => {
  return (
    <div className="min-h-screen h-screen p-10 bg-gradient-to-br from-slate-900 to-slate-800 overflow-y-auto overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto text-white pb-10">
        <h1 className="text-5xl mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 bg-clip-text text-transparent">AI Engineering Statistics</h1>
        <p className="text-xl text-white/70 mb-10">
          Quick Reference Cheatsheet - Comprehensive data on AI adoption, investment, and impact
        </p>

        {/* Key Highlights */}
        <section className="mb-[60px]">
          <h2 className="text-3xl mb-6 text-blue-400 border-b-2 border-blue-400/30 pb-3">2024-2025 Key Highlights</h2>
          <div className="overflow-x-auto rounded-xl bg-white/5 border border-white/10">
            <table className="w-full border-collapse text-[0.95rem]">
              <thead className="bg-blue-400/10 border-b-2 border-blue-400/30">
                <tr>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Category</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Statistic</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">AI Adoption</td>
                  <td className="p-4 border-b border-white/10 text-white/90">78% of organizations use AI (vs 50% in 2022)</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-state-of-ai" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">McKinsey State of AI 2024</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Individual Users</td>
                  <td className="p-4 border-b border-white/10 text-white/90">378M individual AI users worldwide</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://aiindex.stanford.edu/report/" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">Stanford AI Index 2025</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">GitHub Copilot Users</td>
                  <td className="p-4 border-b border-white/10 text-white/90">20M users (5M added in Q2 2025)</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">GitHub Research</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Enterprise Adoption</td>
                  <td className="p-4 border-b border-white/10 text-white/90">90% of Fortune 100 use GitHub Copilot</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">GitHub Research</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Total AI Investment 2024</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$110B invested in AI (↑62% YoY)</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://aiindex.stanford.edu/report/" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">Stanford AI Index 2025</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">AI Market Size</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$391B (2024) → $1.81T (2030)</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.statista.com/outlook/tmo/artificial-intelligence/worldwide" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">Statista</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 text-white/90">AI Agents Forecast</td>
                  <td className="p-4 text-white/90">1 billion AI agents by end of 2026</td>
                  <td className="p-4 text-white/90"><a href="https://www.gartner.com/en/newsroom/press-releases/2024-10-07-gartner-says-ai-agents-are-the-next-frontier-for-generative-ai" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">Gartner</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Investment & Funding */}
        <section className="mb-[60px]">
          <h2 className="text-3xl mb-6 text-blue-400 border-b-2 border-blue-400/30 pb-3">Latest AI Funding (2024-2025)</h2>
          <div className="overflow-x-auto rounded-xl bg-white/5 border border-white/10">
            <table className="w-full border-collapse text-[0.95rem]">
              <thead className="bg-blue-400/10 border-b-2 border-blue-400/30">
                <tr>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Company</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Amount</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Valuation</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Lead Investors</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">OpenAI</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$40B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$300B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">SoftBank, Thrive, Microsoft</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Mar 2025</td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Databricks</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$10B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$62B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Thrive, a16z, DST Global</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Dec 2024</td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">xAI</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$10B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">-</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Strategic equity + debt</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Jul 2025</td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Waymo</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$5.6B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">-</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Alphabet, a16z, Fidelity</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Oct 2024</td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Anthropic</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$2B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$60B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Lightspeed</td>
                  <td className="p-4 border-b border-white/10 text-white/90">2024</td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Perplexity AI</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$500M</td>
                  <td className="p-4 border-b border-white/10 text-white/90">$9B</td>
                  <td className="p-4 border-b border-white/10 text-white/90">Multiple investors</td>
                  <td className="p-4 border-b border-white/10 text-white/90">2024</td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 text-white/90">Harvey (Legal AI)</td>
                  <td className="p-4 text-white/90">$300M</td>
                  <td className="p-4 text-white/90">$3B</td>
                  <td className="p-4 text-white/90">Sequoia, OpenAI Fund</td>
                  <td className="p-4 text-white/90">Feb 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* GitHub Copilot Stats */}
        <section className="mb-[60px]">
          <h2 className="text-3xl mb-6 text-blue-400 border-b-2 border-blue-400/30 pb-3">GitHub Copilot Statistics</h2>
          <div className="overflow-x-auto rounded-xl bg-white/5 border border-white/10">
            <table className="w-full border-collapse text-[0.95rem]">
              <thead className="bg-blue-400/10 border-b-2 border-blue-400/30">
                <tr>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Metric</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Value</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Total Users</td>
                  <td className="p-4 border-b border-white/10 text-white/90">20M+ (5M added in Q2 2025)</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">GitHub Research</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Fortune 100 Adoption</td>
                  <td className="p-4 border-b border-white/10 text-white/90">90% of leading enterprises</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">GitHub Research</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Code Review Speed</td>
                  <td className="p-4 border-b border-white/10 text-white/90">67% faster</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">Duolingo Study</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Time to Pull Request</td>
                  <td className="p-4 border-b border-white/10 text-white/90">75% reduction (9.6 → 2.4 days)</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">Duolingo Study</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Pull Request Volume</td>
                  <td className="p-4 border-b border-white/10 text-white/90">70% increase</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">Duolingo Study</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 text-white/90">Developer Satisfaction</td>
                  <td className="p-4 text-white/90">90% more fulfilled at work</td>
                  <td className="p-4 text-white/90"><a href="https://adamcogan.com/2024/12/12/adoption-github-copilot/" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">GitHub/Accenture Study</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Developer Productivity */}
        <section className="mb-[60px]">
          <h2 className="text-3xl mb-6 text-blue-400 border-b-2 border-blue-400/30 pb-3">Developer Productivity Impact</h2>
          <div className="overflow-x-auto rounded-xl bg-white/5 border border-white/10">
            <table className="w-full border-collapse text-[0.95rem]">
              <thead className="bg-blue-400/10 border-b-2 border-blue-400/30">
                <tr>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Task</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Time Savings</th>
                  <th className="p-4 text-left font-semibold text-blue-400 whitespace-nowrap">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Documentation</td>
                  <td className="p-4 border-b border-white/10 text-white/90">2x productivity boost (45-50% time savings)</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">McKinsey</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Code Generation</td>
                  <td className="p-4 border-b border-white/10 text-white/90">35-45% time savings</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">McKinsey</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Code Refactoring</td>
                  <td className="p-4 border-b border-white/10 text-white/90">20-30% time savings</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">McKinsey</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 border-b border-white/10 text-white/90">Pull Request Volume</td>
                  <td className="p-4 border-b border-white/10 text-white/90">70% increase</td>
                  <td className="p-4 border-b border-white/10 text-white/90"><a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">Duolingo Study</a></td>
                </tr>
                <tr className="hover:bg-blue-400/5">
                  <td className="p-4 text-white/90">Developer Satisfaction</td>
                  <td className="p-4 text-white/90">90% more fulfilled at work</td>
                  <td className="p-4 text-white/90"><a href="https://adamcogan.com/2024/12/12/adoption-github-copilot/" target="_blank" rel="noopener" className="text-blue-400 no-underline transition-colors duration-200 hover:text-indigo-400 hover:underline">GitHub/Accenture</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Awesome AI Lists */}
        <section className="mb-[60px]">
          <h2 className="text-3xl mb-6 text-blue-400 border-b-2 border-blue-400/30 pb-3">Awesome AI Resource Collections</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-6">
            <div className="bg-indigo-400/5 border border-indigo-400/20 rounded-xl p-6 transition-all duration-300 hover:bg-indigo-400/10 hover:border-indigo-400/40 hover:-translate-y-1">
              <h3 className="text-2xl mb-3 text-indigo-400">Awesome Artificial Intelligence</h3>
              <p className="text-white/70 leading-relaxed mb-4">Curated list of AI courses, books, video lectures, and papers</p>
              <a href="https://github.com/owainlewis/awesome-artificial-intelligence" target="_blank" rel="noopener" className="inline-block text-indigo-400 no-underline font-medium transition-colors duration-200 hover:text-blue-400">View on GitHub</a>
            </div>
            <div className="bg-indigo-400/5 border border-indigo-400/20 rounded-xl p-6 transition-all duration-300 hover:bg-indigo-400/10 hover:border-indigo-400/40 hover:-translate-y-1">
              <h3 className="text-2xl mb-3 text-indigo-400">Awesome Machine Learning</h3>
              <p className="text-white/70 leading-relaxed mb-4">Comprehensive collection of ML frameworks, libraries, and resources</p>
              <a href="https://github.com/josephmisiti/awesome-machine-learning" target="_blank" rel="noopener" className="inline-block text-indigo-400 no-underline font-medium transition-colors duration-200 hover:text-blue-400">View on GitHub</a>
            </div>
            <div className="bg-indigo-400/5 border border-indigo-400/20 rounded-xl p-6 transition-all duration-300 hover:bg-indigo-400/10 hover:border-indigo-400/40 hover:-translate-y-1">
              <h3 className="text-2xl mb-3 text-indigo-400">Awesome LLM</h3>
              <p className="text-white/70 leading-relaxed mb-4">Curated list of Large Language Model resources and projects</p>
              <a href="https://github.com/Hannibal046/Awesome-LLM" target="_blank" rel="noopener" className="inline-block text-indigo-400 no-underline font-medium transition-colors duration-200 hover:text-blue-400">View on GitHub</a>
            </div>
            <div className="bg-indigo-400/5 border border-indigo-400/20 rounded-xl p-6 transition-all duration-300 hover:bg-indigo-400/10 hover:border-indigo-400/40 hover:-translate-y-1">
              <h3 className="text-2xl mb-3 text-indigo-400">Awesome Generative AI</h3>
              <p className="text-white/70 leading-relaxed mb-4">Collection of generative AI applications, tools, and research</p>
              <a href="https://github.com/steven2358/awesome-generative-ai" target="_blank" rel="noopener" className="inline-block text-indigo-400 no-underline font-medium transition-colors duration-200 hover:text-blue-400">View on GitHub</a>
            </div>
            <div className="bg-indigo-400/5 border border-indigo-400/20 rounded-xl p-6 transition-all duration-300 hover:bg-indigo-400/10 hover:border-indigo-400/40 hover:-translate-y-1">
              <h3 className="text-2xl mb-3 text-indigo-400">Awesome AI Tools</h3>
              <p className="text-white/70 leading-relaxed mb-4">List of practical AI tools and applications across domains</p>
              <a href="https://github.com/mahseema/awesome-ai-tools" target="_blank" rel="noopener" className="inline-block text-indigo-400 no-underline font-medium transition-colors duration-200 hover:text-blue-400">View on GitHub</a>
            </div>
            <div className="bg-indigo-400/5 border border-indigo-400/20 rounded-xl p-6 transition-all duration-300 hover:bg-indigo-400/10 hover:border-indigo-400/40 hover:-translate-y-1">
              <h3 className="text-2xl mb-3 text-indigo-400">Awesome GPT</h3>
              <p className="text-white/70 leading-relaxed mb-4">Resources about GPT models, applications, and research</p>
              <a href="https://github.com/formulahendry/awesome-gpt" target="_blank" rel="noopener" className="inline-block text-indigo-400 no-underline font-medium transition-colors duration-200 hover:text-blue-400">View on GitHub</a>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-[60px]">
          <h2 className="text-3xl mb-6 text-blue-400 border-b-2 border-blue-400/30 pb-3">Key Research & Resources</h2>
          <div className="grid gap-5 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col gap-2 hover:bg-white/8 hover:border-blue-400/30 hover:translate-x-2">
              <h4 className="text-xl text-blue-400 m-0">Stanford AI Index 2025</h4>
              <p className="text-white/70 leading-relaxed m-0">Comprehensive annual AI report with the latest trends and data</p>
              <a href="https://aiindex.stanford.edu/report/" target="_blank" rel="noopener" className="text-blue-400 no-underline font-semibold transition-colors duration-200 self-start hover:text-indigo-400">Visit →</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col gap-2 hover:bg-white/8 hover:border-blue-400/30 hover:translate-x-2">
              <h4 className="text-xl text-blue-400 m-0">McKinsey State of AI 2024</h4>
              <p className="text-white/70 leading-relaxed m-0">Enterprise AI adoption analysis and business insights</p>
              <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-state-of-ai" target="_blank" rel="noopener" className="text-blue-400 no-underline font-semibold transition-colors duration-200 self-start hover:text-indigo-400">Visit →</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col gap-2 hover:bg-white/8 hover:border-blue-400/30 hover:translate-x-2">
              <h4 className="text-xl text-blue-400 m-0">AI Engineering Book (Chip Huyen)</h4>
              <p className="text-white/70 leading-relaxed m-0">Comprehensive guide to building AI applications</p>
              <a href="https://www.oreilly.com/library/view/ai-engineering/9781098166298/" target="_blank" rel="noopener" className="text-blue-400 no-underline font-semibold transition-colors duration-200 self-start hover:text-indigo-400">Visit →</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col gap-2 hover:bg-white/8 hover:border-blue-400/30 hover:translate-x-2">
              <h4 className="text-xl text-blue-400 m-0">GitHub Copilot Research</h4>
              <p className="text-white/70 leading-relaxed m-0">Official productivity studies and research findings</p>
              <a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener" className="text-blue-400 no-underline font-semibold transition-colors duration-200 self-start hover:text-indigo-400">Visit →</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col gap-2 hover:bg-white/8 hover:border-blue-400/30 hover:translate-x-2">
              <h4 className="text-xl text-blue-400 m-0">Chip Huyen's Website</h4>
              <p className="text-white/70 leading-relaxed m-0">AI engineering insights, blog posts, and practical guidance</p>
              <a href="https://huyenchip.com/" target="_blank" rel="noopener" className="text-blue-400 no-underline font-semibold transition-colors duration-200 self-start hover:text-indigo-400">Visit →</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col gap-2 hover:bg-white/8 hover:border-blue-400/30 hover:translate-x-2">
              <h4 className="text-xl text-blue-400 m-0">TechCrunch AI Coverage</h4>
              <p className="text-white/70 leading-relaxed m-0">Latest AI startup news, funding rounds, and industry developments</p>
              <a href="https://techcrunch.com/tag/artificial-intelligence/" target="_blank" rel="noopener" className="text-blue-400 no-underline font-semibold transition-colors duration-200 self-start hover:text-indigo-400">Visit →</a>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-[60px] pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm italic">All sources verified with direct URLs | Last updated: October 2025</p>
        </div>
      </div>
    </div>
  );
};
