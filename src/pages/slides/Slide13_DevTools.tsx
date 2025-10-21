import type { SlideProps, DevTool } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { ToolType } from '../../components/ToolType/ToolType';
import './Slide13_DevTools.css';

export const Slide13_DevTools: React.FC<SlideProps> = ({ isActive }) => {
  const tools: DevTool[] = [
    {
      name: 'MCP',
      aiModel: 'Anthropic',
      type: 'Protocol',
      features: 'Tool connectivity, Context bridging',
      free: '✅',
    },
    {
      name: 'Claude Code',
      aiModel: 'Anthropic',
      type: 'CLI Agent',
      features: 'Autonomous coding, Terminal-native',
      free: '❌',
    },
    {
      name: 'Aider',
      aiModel: 'GPT-4/Claude',
      type: 'CLI Agent',
      features: 'Git integration, Pair programming',
      free: '✅*',
    },
    {
      name: 'Continue',
      aiModel: 'Any/Local',
      type: 'IDE Extension',
      features: 'Local models, Custom prompts',
      free: '✅',
    },
    {
      name: 'Cline',
      aiModel: 'Any',
      type: 'VS Code Ext',
      features: 'File operations, Shell commands',
      free: '✅',
    },
    {
      name: 'Windsurf',
      aiModel: 'Any',
      type: 'IDE',
      features: 'Cascade flows, Agent & chat modes',
      free: '✅',
    },
    {
      name: 'GitHub Copilot',
      aiModel: 'OpenAI',
      type: 'IDE Plugin',
      features: 'Inline suggestions, Chat interface',
      free: '❌',
    },
    {
      name: 'Ollama',
      aiModel: 'Local Models',
      type: 'Local Server',
      features: 'Privacy-first, No internet required',
      free: '✅',
    },
  ];

  return (
    <Slide isActive={isActive}>
      <h2 className="slide-title">AI Dev Tools</h2>
      <div style={{ overflowX: 'auto' }}>
        <table className="dev-tools-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>AI Model</th>
              <th>Type</th>
              <th>Key Features</th>
              <th>Free</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={index}>
                <td>
                  <strong>{tool.name}</strong>
                </td>
                <td>{tool.aiModel}</td>
                <td>
                  <ToolType type={tool.type} />
                </td>
                <td>{tool.features}</td>
                <td>{tool.free}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        <strong>Legend:</strong> ✅ Free | ✅* Free tier available | ❌ Paid only
      </p>
    </Slide>
  );
};
