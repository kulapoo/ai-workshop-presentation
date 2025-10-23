import type { SlideProps } from '../../types';
import { Slide } from '../../components/layout/Slide/Slide';
import { Network, Download, Wrench, MessageSquare } from 'lucide-react';

export const Slide14_MCP: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2 className="bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent text-[3.5em] font-black mb-8 text-center">
        MCP - Model Context Protocol
      </h2>

      {/* What is MCP */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">What is MCP?</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-bold text-lg text-[#667eea] mb-2">Model</div>
              <p className="text-sm text-gray-600">GPT, Anthropic, Gemini</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-bold text-lg text-[#764ba2] mb-2">Context</div>
              <p className="text-sm text-gray-600">Extra information for better decisions</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-bold text-lg text-[#667eea] mb-2">Protocol</div>
              <p className="text-sm text-gray-600">Set of rules (like HTTP over TCP)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Problems & Solutions */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-red-700">Problems</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Lack of recent knowledge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Limited context windows (expensive tokens)</span>
            </li>
          </ul>
        </div>
        <div className="bg-green-50 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-green-700">Solution</h3>
          <p className="text-gray-700">
            MCP standardizes how to give <strong>Context</strong> to models efficiently and programmatically
          </p>
        </div>
      </div>

      {/* MCP Primitives */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">MCP Primitives</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-5 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Download size={24} className="text-blue-600" />
              <h4 className="font-bold text-lg text-gray-800">Resources</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2">Similar to <code className="bg-white px-2 py-1 rounded">GET</code> in HTTP</p>
            <p className="text-sm text-gray-600">Retrieve relevant context available to the LLM</p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-5 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Wrench size={24} className="text-purple-600" />
              <h4 className="font-bold text-lg text-gray-800">Tools</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2">Similar to <code className="bg-white px-2 py-1 rounded">POST</code> in HTTP</p>
            <p className="text-sm text-gray-600">Executable functions (send email, fetch data, modify DB)</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-5 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare size={24} className="text-indigo-600" />
              <h4 className="font-bold text-lg text-gray-800">Prompts</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2">Reusable prompt templates & workflows</p>
            <p className="text-sm text-gray-600"><strong>User-controlled</strong> - explicitly selected by users</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
