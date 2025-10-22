import type { SlideProps, DevTool } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { ToolType } from '../../components/ToolType/ToolType';
import { Check, X } from 'lucide-react';

export const Slide13_DevTools: React.FC<SlideProps> = ({ isActive }) => {
  const tools: DevTool[] = [
    {
      name: 'MCP',
      aiModel: 'Anthropic',
      type: 'Protocol',
      features: 'Tool connectivity, Context bridging',
      free: 'yes',
      link: 'https://modelcontextprotocol.io/',
    },
    {
      name: 'Claude Code',
      aiModel: 'Anthropic',
      type: 'CLI Agent',
      features: 'Autonomous coding, Terminal-native, IDE extension',
      free: 'no',
      link: 'https://docs.claude.com/claude-code',
    },
    {
      name: 'Aider',
      aiModel: 'GPT-4/Claude',
      type: 'CLI Agent',
      features: 'Git integration, Pair programming',
      free: 'partial',
      link: 'https://aider.chat/',
    },
    {
      name: 'Gemini CLI',
      aiModel: 'Gemini',
      type: 'CLI Agent',
      features: 'Autonomous coding, Terminal-native',
      free: 'partial',
      link: 'https://ai.google.dev/gemini-api/docs/cli',
    },
    {
      name: 'Continue',
      aiModel: 'Any/Local',
      type: 'IDE Extension',
      features: 'Local models, Custom prompts',
      free: 'yes',
      link: 'https://continue.dev/',
    },
    {
      name: 'Cline',
      aiModel: 'Any',
      type: 'VS Code Ext',
      features: 'File operations, Shell commands',
      free: 'yes',
      link: 'https://github.com/cline/cline',
    },
    {
      name: 'Windsurf',
      aiModel: 'Any',
      type: 'IDE',
      features: 'Cascade flows, Agent & chat modes',
      free: 'yes',
      link: 'https://codeium.com/windsurf',
    },
    {
      name: 'GitHub Copilot',
      aiModel: 'OpenAI',
      type: 'IDE Plugin',
      features: 'Inline suggestions, Chat interface',
      free: 'no',
      link: 'https://github.com/features/copilot',
    },
    {
      name: 'Ollama',
      aiModel: 'Local Models',
      type: 'Local Server',
      features: 'Privacy-first, No internet required',
      free: 'yes',
      link: 'https://ollama.com/',
    },
  ];

  return (
    <Slide isActive={isActive}>
      <h2 className="bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent text-[3.5em] font-black mb-10 text-center">AI Dev Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse my-5 shadow-[0_5px_15px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
          <thead className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
            <tr>
              <th className="p-4 text-left text-lg">Tool</th>
              <th className="p-4 text-left text-lg">AI Model</th>
              <th className="p-4 text-left text-lg">Type</th>
              <th className="p-4 text-left text-lg">Key Features</th>
              <th className="p-4 text-left text-lg">Free</th>
              <th className="p-4 text-left text-lg">Links</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b border-gray-200 text-base text-gray-600">
                  <strong>{tool.name}</strong>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-base text-gray-600">{tool.aiModel}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-base text-gray-600">
                  <ToolType type={tool.type} />
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-base text-gray-600">{tool.features}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-base text-gray-600">
                  {tool.free === 'yes' && <Check size={20} className="text-green-600 inline" />}
                  {tool.free === 'no' && <X size={20} className="text-red-600 inline" />}
                  {tool.free === 'partial' && (
                    <span className="flex items-center gap-1">
                      <Check size={20} className="text-green-600" />
                      <span className="text-sm">*</span>
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-base text-gray-600">
                  {tool.link && (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Visit
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-center flex items-center justify-center gap-4">
        <strong>Legend:</strong>
        <span className="flex items-center gap-1">
          <Check size={18} className="text-green-600" /> Free
        </span>
        <span className="flex items-center gap-1">
          <Check size={18} className="text-green-600" />* Free tier available
        </span>
        <span className="flex items-center gap-1">
          <X size={18} className="text-red-600" /> Paid only
        </span>
      </p>
    </Slide>
  );
};
