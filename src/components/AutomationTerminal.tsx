import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, Send, Check } from 'lucide-react';
import { playTerminalKey, playTactileClick } from '../utils/sound';

interface AutomationTerminalProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const AutomationTerminal: React.FC<AutomationTerminalProps> = ({
  onOpenContact,
  onOpenResume,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'systemctl status automation-pipeline.service',
      output: '● automation-pipeline.service - Active (Running) | Latency: 18ms | Sync: Google Sheets + Node.js API Webhooks',
    },
    {
      cmd: 'run-cron --job=content-syndication',
      output: '[OK] Content verified for distribution across multi-channel endpoints without manual intervention.',
    },
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim().toLowerCase();
    if (!trimmed) return;

    playTerminalKey();

    let reply: string | React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        reply = 'COMMANDS: whoami, skills, projects, contact, hire, resume, clear, ping, date, stack';
        break;
      case 'whoami':
        reply = 'Balakrishna Kolla — Digital Marketer & Full Stack Web Developer (BCA 2025 Graduate, Vapi India).';
        break;
      case 'skills':
        reply = 'Active Stack: React, Next.js, Node.js, Express, Shopify Liquid, MongoDB, Flutter, Supabase, Technical SEO, Google Apps Script.';
        break;
      case 'projects':
        reply = '1. InstaPrice (Polymer Intel) | 2. Festylo (Shopify Kit Store) | 3. Ylomart (MERN) | 4. WebCrafty Solution | 5. LocalHub (Flutter). Type "contact" to build yours.';
        break;
      case 'hire':
      case 'contact':
        reply = 'Dispatching to contact terminal... [Routing to CONTACT.EXE]';
        onOpenContact();
        break;
      case 'resume':
      case 'cat resume.txt':
        reply = 'Mounting resume binary viewer... [Opening RESUME.PDF]';
        onOpenResume();
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'ping':
        reply = 'PONG! Server response time: 14ms (Direct SSL Ingress Asia-South).';
        break;
      case 'date':
        reply = new Date().toUTCString();
        break;
      case 'stack':
        reply = 'Core Stack: React 19 + TypeScript + Tailwind CSS v4 + Motion + Node.js.';
        break;
      default:
        reply = `Command not recognized: "${trimmed}". Type "help" for a list of available commands.`;
        break;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output: reply }]);
    setInputVal('');
  };

  return (
    <section className="retro-raised bg-[#ffebd4] p-5 sm:p-6 space-y-6 border border-[#727974]" id="automation">
      {/* Title Header */}
      <div className="bg-[#2f4d41] text-[#fff8f4] px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-4 h-4 text-[#e7e965]" />
          <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-wider">
            AUTOMATION.LAB — Real-time Terminal &amp; Automated Pipelines
          </span>
        </div>
        <span className="font-jetbrains text-[10px] text-[#e7e965] font-bold">
          EXEC_STATUS: RUNNING
        </span>
      </div>

      {/* Interactive Terminal Shell Window */}
      <div className="retro-sunken-dark bg-[#1b2924] p-4 sm:p-5 text-[#fff8f4] font-jetbrains text-xs rounded-none border border-[#2f4d41] space-y-3">
        <div className="text-[#a9b9b2] border-b border-[#2f4d41] pb-2 text-[11px] flex justify-between items-center">
          <span>BALAKRISHNA.OS SHELL — TYPE 'help' FOR COMMANDS</span>
          <button
            onClick={() => {
              playTactileClick();
              setHistory([]);
            }}
            className="hover:text-[#e7e965] underline"
          >
            [CLEAR]
          </button>
        </div>

        {/* Output History */}
        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-0.5">
              <p className="text-[#a9b9b2]">
                <span className="text-[#e7e965] font-bold">guest@balakrishna-os:~$</span> {item.cmd}
              </p>
              <div className="text-[#d6e6de] pl-2 border-l border-[#2f4d41] py-0.5">
                {item.output}
              </div>
            </div>
          ))}
        </div>

        {/* Input Line */}
        <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2 border-t border-[#2f4d41]">
          <span className="text-[#e7e965] font-bold">guest@balakrishna-os:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Try 'help', 'skills', 'projects', or 'contact'..."
            className="flex-1 bg-transparent text-[#fff8f4] font-jetbrains text-xs focus:outline-none placeholder:text-[#a9b9b2]/60"
          />
          <button
            type="submit"
            className="retro-btn bg-[#2f4d41] text-[#e7e965] px-2.5 py-1 text-[10px] font-bold"
          >
            ENTER ↵
          </button>
        </form>
      </div>

      {/* Visual Pipeline Lifecycle */}
      <div className="space-y-2.5">
        <h4 className="font-jetbrains text-xs font-bold text-[#18362b] uppercase tracking-wider">
          Automated Pipeline Lifecycle:
        </h4>
        <div className="flex flex-wrap items-center gap-2 font-jetbrains text-xs">
          <span className="retro-raised bg-[#fff1e4] px-3 py-1.5 text-[#18362b] font-bold border border-[#c1c8c3]">
            CONTENT IDEA
          </span>
          <span className="text-[#616200] font-bold">→</span>
          <span className="retro-raised bg-[#fff1e4] px-3 py-1.5 text-[#18362b] font-bold border border-[#c1c8c3]">
            AI PROCESSING
          </span>
          <span className="text-[#616200] font-bold">→</span>
          <span className="retro-raised bg-[#fff1e4] px-3 py-1.5 text-[#18362b] font-bold border border-[#c1c8c3]">
            CREATION ENGINE
          </span>
          <span className="text-[#616200] font-bold">→</span>
          <span className="retro-raised bg-[#fff1e4] px-3 py-1.5 text-[#18362b] font-bold border border-[#c1c8c3]">
            APPROVAL QUEUE
          </span>
          <span className="text-[#616200] font-bold">→</span>
          <span className="retro-raised bg-[#e7e965] text-[#18362b] px-3 py-1.5 font-bold border border-[#18362b]">
            AUTO PUBLISH
          </span>
          <span className="text-[#616200] font-bold">→</span>
          <span className="retro-raised bg-[#2f4d41] text-[#e7e965] px-3 py-1.5 font-bold border border-[#18362b]">
            ANALYTICS AUDIT
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-2 font-jetbrains text-[11px] text-[#414845] border-t border-[#c1c8c3]">
        <span>RUNTIME: Node.js API Webhooks</span>
        <span>•</span>
        <span>Google Apps Script</span>
        <span>•</span>
        <span>Google Sheets Headless DB</span>
        <span>•</span>
        <span>Autonomous LLM Micro-Agents</span>
      </div>
    </section>
  );
};
