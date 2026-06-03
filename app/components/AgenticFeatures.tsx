'use client';

import { useState } from 'react';

export default function AgenticFeatures() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg shadow-xl mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🤖</div>
          <div>
            <h2 className="text-2xl font-bold">AI-Powered Agentic Features</h2>
            <p className="text-purple-100">Intelligent automation at your fingertips</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
        >
          {isExpanded ? '▼ Hide' : '▶ Learn More'}
        </button>
      </div>

      {isExpanded && (
        <div className="grid md:grid-cols-3 gap-4 mt-6 animate-fadeIn">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-lg mb-2">Auto-Generated Tests</h3>
            <p className="text-sm text-purple-100">
              Every feature comes with automatically generated unit and integration tests using Jest and React Testing Library.
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-bold text-lg mb-2">Smart Documentation</h3>
            <p className="text-sm text-purple-100">
              All code is automatically documented with JSDoc comments and API documentation is generated in real-time.
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold text-lg mb-2">Intelligent Routing</h3>
            <p className="text-sm text-purple-100">
              Tasks are automatically routed to specialized queues: code-generation, testing, debugging, and more.
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-bold text-lg mb-2">Auto-Refactoring</h3>
            <p className="text-sm text-purple-100">
              Code is continuously improved with automatic refactoring following best practices and design patterns.
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-bold text-lg mb-2">Security First</h3>
            <p className="text-sm text-purple-100">
              Automatic security checks including input validation, SQL injection prevention, and XSS protection.
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-bold text-lg mb-2">Real-Time Monitoring</h3>
            <p className="text-sm text-purple-100">
              Track resource usage, API calls, and performance metrics with automatic alerts and optimization.
            </p>
          </div>
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="font-semibold">Powered by:</span> Kiro AI + OpenAI GPT-4
          </div>
          <div className="flex gap-4 text-sm">
            <span>✅ 80% Test Coverage</span>
            <span>✅ Auto-Documentation</span>
            <span>✅ 24/7 Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  );
}
