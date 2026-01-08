'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import { MoveRight, ShieldCheck, Zap, TrendingUp, Users, Lock } from 'lucide-react';

export default function Home() {
  const [amount, setAmount] = useState('');

  // 模拟数据 - 让界面看起来很真实
  const progress = 68; 
  const raised = "8,500,200";
  const hardCap = "12,500,000";

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 w-full">
      
      {/* 1. 顶部滚动行情条 (Ticker Tape) */}
      <div className="mb-8 flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
        {['BTC $98,200 (+2.4%)', 'ETH $3,800 (+1.2%)', 'BNB $620 (+0.8%)', 'SOL $145 (+3.1%)', 'AI_INDEX $1,203 (+5.5%)'].map((item, i) => (
          <div key={i} className="whitespace-nowrap bg-[#1E2329] px-3 py-1 text-xs font-mono text-[#0ECB81] border-l-2 border-[#0ECB81] shadow-sm">
            {item}
          </div>
        ))}
      </div>

      {/* 2. 核心内容区域 */}
      <div className="grid md:grid-cols-12 gap-8">
        
        {/* 左侧：项目详细信息 */}
        <div className="md:col-span-7 space-y-8">
          
          {/* 项目头部 */}
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-black border border-gray-700 flex items-center justify-center shadow-lg">
               <Zap className="text-[#F0B90B]" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-mono tracking-tight text-white">NEXUS AI <span className="text-gray-500 text-lg font-normal">(NXS)</span></h1>
              <div className="flex gap-2 mt-3">
                <span className="bg-[#1E2329] text-[#F0B90B] text-[10px] px-2 py-1 border border-[#F0B90B]/30 font-bold tracking-wider">KYC VERIFIED</span>
                <span className="bg-[#1E2329] text-blue-400 text-[10px] px-2 py-1 border border-blue-400/30 font-bold tracking-wider">AUDITED BY CERTIK</span>
                <span className="bg-[#1E2329] text-purple-400 text-[10px] px-2 py-1 border border-purple-400/30 font-bold tracking-wider">VESTING</span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm border-l-2 border-gray-700 pl-4">
            The decentralized GPU computing power infrastructure for Artificial Intelligence model training. 
            NEXUS AI aggregates idle GPU resources globally to provide low-cost rendering and training services.
            Backed by top-tier Web3 institutions.
          </p>
          
          {/* 数据统计卡片 */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#1E2329] p-4 border border-gray-800">
                <div className="text-gray-500 text-xs mb-1 flex items-center gap-1"><TrendingUp size={12}/> ATH ROI</div>
                <div className="text-[#0ECB81] font-mono font-bold text-xl">2,400%</div>
            </div>
            <div className="bg-[#1E2329] p-4 border border-gray-800">
                <div className="text-gray-500 text-xs mb-1 flex items-center gap-1"><Users size={12}/> Participants</div>
                <div className="text-white font-mono font-bold text-xl">42,102</div>
            </div>
             <div className="bg-[#1E2329] p-4 border border-gray-800">
                <div className="text-gray-500 text-xs mb-1 flex items-center gap-1"><Lock size={12}/> Lock-up</div>
                <div className="text-white font-mono font-bold text-xl">180 Days</div>
            </div>
          </div>

          {/* 进度条区域 */}
          <div className="bg-[#1E2329] p-6 border border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={60} />
            </div>
            <div className="flex justify-between text-sm mb-2 font-mono relative z-10">
              <span className="text-gray-400">Total Raised</span>
              <span className="text-white font-bold">{raised} / {hardCap} USDT</span>
            </div>
            <div className="h-4 bg-black w-full overflow-hidden relative border border-gray-700">
              <div className="h-full bg-[#F0B90B] relative transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}>
                 <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
              </div>
            </div>
            <div className="flex justify-between text-[10px] mt-2 text-gray-500 font-mono relative z-10">
              <span>0%</span>
              <span className="text-[#F0B90B]">SOFT CAP REACHED</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* 右侧：交易面板 (手机端会堆叠在下面) */}
        <div className="md:col-span-5">
          <div className="bg-[#1E2329] border-t-4 border-[#F0B90B] p-6 shadow-2xl relative">
            
            {/* 状态头 */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
              <h2 className="text-xl font-bold text-white font-mono">PUBLIC POOL</h2>
              <div className="text-xs text-[#0ECB81] flex items-center gap-2 bg-[#0ECB81]/10 px-2 py-1 rounded">
                <span className="w-2 h-2 bg-[#0ECB81] rounded-full animate-pulse"></span>
                LIVE NOW
              </div>
            </div>

            {/* 倒计时 */}
            <div className="flex gap-2 mb-6 font-mono text-center">
              {['02', '14', '35', '12'].map((num, i) => (
                <div key={i} className="flex-1 bg-black py-2 border border-gray-700 text-[#F0B90B] text-xl font-bold rounded-sm">
                  {num}<span className="text-[10px] text-gray-600 block font-normal mt-1">
                    {['DAYS', 'HRS', 'MINS', 'SECS'][i]}
                  </span>
                </div>
              ))}
            </div>

            {/* 输入区域 */}
            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-gray-400 mb-1 block uppercase tracking-wider">Commit Amount (USDT)</label>
                <div className="flex bg-black border border-gray-700 p-3 items-center focus-within:border-[#F0B90B] transition-colors">
                  <input 
                    type="number" 
                    placeholder="Min 100"
                    className="bg-transparent w-full outline-none text-white font-mono text-lg placeholder-gray-700"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <span className="text-[#F0B90B] font-bold ml-2 text-sm cursor-pointer hover:text-white">MAX</span>
                </div>
                <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-gray-500">Balance: 0.00 USDT</span>
                    <span className="text-[10px] text-gray-500">Rate: 1 USDT = 50 NXS</span>
                </div>
              </div>

              {/* 连接/购买按钮逻辑 */}
              <div className="w-full pt-2">
                <ConnectButton.Custom>
                  {({ account, chain, openConnectModal, mounted }) => {
                    const ready = mounted;
                    const connected = ready && account && chain;
                    
                    if (!connected) {
                      return (
                        <button onClick={openConnectModal} className="w-full py-4 bg-[#F0B90B] hover:bg-[#d9a507] text-black font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(240,185,11,0.2)]">
                          Connect Wallet
                        </button>
                      );
                    }
                    return (
                      <button className="w-full py-4 bg-[#F0B90B] hover:bg-[#d9a507] text-black font-bold uppercase tracking-wider transition-all flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(240,185,11,0.2)]">
                        Commit Capital <MoveRight size={18} />
                      </button>
                    );
                  }}
                </ConnectButton.Custom>
              </div>
            </div>
          </div>
          
          {/* 底部安全提示 */}
          <div className="mt-6 border border-gray-800 bg-black/20 p-3 flex items-start gap-3 rounded">
             <ShieldCheck size={16} className="text-gray-500 mt-1 shrink-0" /> 
             <p className="text-[10px] text-gray-500 leading-tight">
                <strong>Risk Warning:</strong> Early-stage investments involve high risks. The smart contract has been audited, but please conduct your own research (DYOR) before participating.
             </p>
          </div>
        </div>
      </div>
    </main>
  );
}