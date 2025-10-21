import './ResourcesPage.css';

export const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <div className="page-content">
        <h1>AI Engineering Statistics</h1>
        <p className="page-description">
          Quick Reference Cheatsheet - Comprehensive data on AI adoption, investment, and impact
        </p>

        {/* Key Highlights */}
        <section className="stats-section">
          <h2>2024-2025 Key Highlights</h2>
          <div className="stats-table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Statistic</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI Adoption</td>
                  <td>78% of organizations use AI (vs 50% in 2022)</td>
                  <td><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-state-of-ai" target="_blank" rel="noopener">McKinsey State of AI 2024</a></td>
                </tr>
                <tr>
                  <td>Individual Users</td>
                  <td>378M individual AI users worldwide</td>
                  <td><a href="https://aiindex.stanford.edu/report/" target="_blank" rel="noopener">Stanford AI Index 2025</a></td>
                </tr>
                <tr>
                  <td>GitHub Copilot Users</td>
                  <td>20M users (5M added in Q2 2025)</td>
                  <td><a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener">GitHub Research</a></td>
                </tr>
                <tr>
                  <td>Enterprise Adoption</td>
                  <td>90% of Fortune 100 use GitHub Copilot</td>
                  <td><a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener">GitHub Research</a></td>
                </tr>
                <tr>
                  <td>Total AI Investment 2024</td>
                  <td>$110B invested in AI (↑62% YoY)</td>
                  <td><a href="https://aiindex.stanford.edu/report/" target="_blank" rel="noopener">Stanford AI Index 2025</a></td>
                </tr>
                <tr>
                  <td>AI Market Size</td>
                  <td>$391B (2024) → $1.81T (2030)</td>
                  <td><a href="https://www.statista.com/outlook/tmo/artificial-intelligence/worldwide" target="_blank" rel="noopener">Statista</a></td>
                </tr>
                <tr>
                  <td>AI Agents Forecast</td>
                  <td>1 billion AI agents by end of 2026</td>
                  <td><a href="https://www.gartner.com/en/newsroom/press-releases/2024-10-07-gartner-says-ai-agents-are-the-next-frontier-for-generative-ai" target="_blank" rel="noopener">Gartner</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Investment & Funding */}
        <section className="stats-section">
          <h2>Latest AI Funding (2024-2025)</h2>
          <div className="stats-table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Amount</th>
                  <th>Valuation</th>
                  <th>Lead Investors</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OpenAI</td>
                  <td>$40B</td>
                  <td>$300B</td>
                  <td>SoftBank, Thrive, Microsoft</td>
                  <td>Mar 2025</td>
                </tr>
                <tr>
                  <td>Databricks</td>
                  <td>$10B</td>
                  <td>$62B</td>
                  <td>Thrive, a16z, DST Global</td>
                  <td>Dec 2024</td>
                </tr>
                <tr>
                  <td>xAI</td>
                  <td>$10B</td>
                  <td>-</td>
                  <td>Strategic equity + debt</td>
                  <td>Jul 2025</td>
                </tr>
                <tr>
                  <td>Waymo</td>
                  <td>$5.6B</td>
                  <td>-</td>
                  <td>Alphabet, a16z, Fidelity</td>
                  <td>Oct 2024</td>
                </tr>
                <tr>
                  <td>Anthropic</td>
                  <td>$2B</td>
                  <td>$60B</td>
                  <td>Lightspeed</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td>Perplexity AI</td>
                  <td>$500M</td>
                  <td>$9B</td>
                  <td>Multiple investors</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td>Harvey (Legal AI)</td>
                  <td>$300M</td>
                  <td>$3B</td>
                  <td>Sequoia, OpenAI Fund</td>
                  <td>Feb 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* GitHub Copilot Stats */}
        <section className="stats-section">
          <h2>GitHub Copilot Statistics</h2>
          <div className="stats-table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Users</td>
                  <td>20M+ (5M added in Q2 2025)</td>
                  <td><a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener">GitHub Research</a></td>
                </tr>
                <tr>
                  <td>Fortune 100 Adoption</td>
                  <td>90% of leading enterprises</td>
                  <td><a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener">GitHub Research</a></td>
                </tr>
                <tr>
                  <td>Code Review Speed</td>
                  <td>67% faster</td>
                  <td><a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener">Duolingo Study</a></td>
                </tr>
                <tr>
                  <td>Time to Pull Request</td>
                  <td>75% reduction (9.6 → 2.4 days)</td>
                  <td><a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener">Duolingo Study</a></td>
                </tr>
                <tr>
                  <td>Pull Request Volume</td>
                  <td>70% increase</td>
                  <td><a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener">Duolingo Study</a></td>
                </tr>
                <tr>
                  <td>Developer Satisfaction</td>
                  <td>90% more fulfilled at work</td>
                  <td><a href="https://adamcogan.com/2024/12/12/adoption-github-copilot/" target="_blank" rel="noopener">GitHub/Accenture Study</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Developer Productivity */}
        <section className="stats-section">
          <h2>Developer Productivity Impact</h2>
          <div className="stats-table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Time Savings</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Documentation</td>
                  <td>2x productivity boost (45-50% time savings)</td>
                  <td><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai" target="_blank" rel="noopener">McKinsey</a></td>
                </tr>
                <tr>
                  <td>Code Generation</td>
                  <td>35-45% time savings</td>
                  <td><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai" target="_blank" rel="noopener">McKinsey</a></td>
                </tr>
                <tr>
                  <td>Code Refactoring</td>
                  <td>20-30% time savings</td>
                  <td><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai" target="_blank" rel="noopener">McKinsey</a></td>
                </tr>
                <tr>
                  <td>Pull Request Volume</td>
                  <td>70% increase</td>
                  <td><a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener">Duolingo Study</a></td>
                </tr>
                <tr>
                  <td>Developer Satisfaction</td>
                  <td>90% more fulfilled at work</td>
                  <td><a href="https://adamcogan.com/2024/12/12/adoption-github-copilot/" target="_blank" rel="noopener">GitHub/Accenture</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Awesome AI Lists */}
        <section className="stats-section">
          <h2>Awesome AI Resource Collections</h2>
          <div className="frameworks-grid">
            <div className="framework-card">
              <h3>Awesome Artificial Intelligence</h3>
              <p>Curated list of AI courses, books, video lectures, and papers</p>
              <a href="https://github.com/owainlewis/awesome-artificial-intelligence" target="_blank" rel="noopener">View on GitHub</a>
            </div>
            <div className="framework-card">
              <h3>Awesome Machine Learning</h3>
              <p>Comprehensive collection of ML frameworks, libraries, and resources</p>
              <a href="https://github.com/josephmisiti/awesome-machine-learning" target="_blank" rel="noopener">View on GitHub</a>
            </div>
            <div className="framework-card">
              <h3>Awesome LLM</h3>
              <p>Curated list of Large Language Model resources and projects</p>
              <a href="https://github.com/Hannibal046/Awesome-LLM" target="_blank" rel="noopener">View on GitHub</a>
            </div>
            <div className="framework-card">
              <h3>Awesome Generative AI</h3>
              <p>Collection of generative AI applications, tools, and research</p>
              <a href="https://github.com/steven2358/awesome-generative-ai" target="_blank" rel="noopener">View on GitHub</a>
            </div>
            <div className="framework-card">
              <h3>Awesome AI Tools</h3>
              <p>List of practical AI tools and applications across domains</p>
              <a href="https://github.com/mahseema/awesome-ai-tools" target="_blank" rel="noopener">View on GitHub</a>
            </div>
            <div className="framework-card">
              <h3>Awesome GPT</h3>
              <p>Resources about GPT models, applications, and research</p>
              <a href="https://github.com/formulahendry/awesome-gpt" target="_blank" rel="noopener">View on GitHub</a>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="stats-section">
          <h2>Key Research & Resources</h2>
          <div className="resources-list">
            <div className="resource-item">
              <h4>Stanford AI Index 2025</h4>
              <p>Comprehensive annual AI report with the latest trends and data</p>
              <a href="https://aiindex.stanford.edu/report/" target="_blank" rel="noopener">Visit →</a>
            </div>
            <div className="resource-item">
              <h4>McKinsey State of AI 2024</h4>
              <p>Enterprise AI adoption analysis and business insights</p>
              <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-state-of-ai" target="_blank" rel="noopener">Visit →</a>
            </div>
            <div className="resource-item">
              <h4>AI Engineering Book (Chip Huyen)</h4>
              <p>Comprehensive guide to building AI applications</p>
              <a href="https://www.oreilly.com/library/view/ai-engineering/9781098166298/" target="_blank" rel="noopener">Visit →</a>
            </div>
            <div className="resource-item">
              <h4>GitHub Copilot Research</h4>
              <p>Official productivity studies and research findings</p>
              <a href="https://github.blog/news-insights/research/" target="_blank" rel="noopener">Visit →</a>
            </div>
            <div className="resource-item">
              <h4>Chip Huyen's Website</h4>
              <p>AI engineering insights, blog posts, and practical guidance</p>
              <a href="https://huyenchip.com/" target="_blank" rel="noopener">Visit →</a>
            </div>
            <div className="resource-item">
              <h4>TechCrunch AI Coverage</h4>
              <p>Latest AI startup news, funding rounds, and industry developments</p>
              <a href="https://techcrunch.com/tag/artificial-intelligence/" target="_blank" rel="noopener">Visit →</a>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="resources-footer">
          <p>All sources verified with direct URLs | Last updated: October 2025</p>
        </div>
      </div>
    </div>
  );
};
