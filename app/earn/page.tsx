// src/app/earn/page.tsx
import { Server, Cpu, Database } from 'lucide-react';

export default function EarnPage() {
  const nodes = [
    { name: "H100 Cluster A1", apy: "185%", min: "500", icon: <Cpu /> },
    { name: "A100 Tensor Core", apy: "120%", min: "200", icon: <Server /> },
    { name: "RTX 4090 Farm", apy: "65%", min: "50", icon: <Database /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Compute Node Staking</h1>
      <p className="text-gray-400 text-sm mb-8">Stake USDT to rent GPU computing power and earn daily rewards.</p>

      <div className="grid gap-4">
        {nodes.map((node, i) => (
          <div key={i} className="bg-[#1E2329] border border-gray-800 p-5 flex items-center justify-between hover:border-[#F0B90B] transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center text-[#F0B90B] border border-gray-700 group-hover:text-white group-hover:bg-[#F0B90B] transition-all">
                {node.icon}
              </div>
              <div>
                <h3 className="font-bold font-mono text-lg">{node.name}</h3>
                <div className="text-xs text-gray-500">Min. Entry: {node.min} USDT</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-xs text-gray-400">Target APY</div>
              <div className="text-[#0ECB81] font-bold font-mono text-xl">{node.apy}</div>
              <button className="mt-2 bg-gray-800 hover:bg-[#F0B90B] hover:text-black text-white text-xs px-4 py-1.5 transition-all uppercase font-bold">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}