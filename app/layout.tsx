// src/app/layout.tsx
'use client';

import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config } from '../config';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B0E11] text-white font-sans antialiased">
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider 
              theme={darkTheme({
                accentColor: '#F0B90B', // 币安金
                accentColorForeground: 'black',
                borderRadius: 'none', // 机构感，不要圆角
              })}
            >
              <div className="min-h-screen flex flex-col">
                {/* 顶部导航 */}
                <header className="border-b border-gray-800 bg-[#0B0E11] sticky top-0 z-50">
                  <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#F0B90B] skew-x-[-12deg]"></div>
                      <span className="font-bold text-xl tracking-tighter">VENTURE CAP</span>
                    </div>
                    {/* 连接钱包按钮 - 自动适配移动端 */}
                    <w3m-button /> 
                    {/* 这里使用 RainbowKit 的 ConnectButton */}
                    <div className="scale-90 origin-right">
                        <import { ConnectButton } from '@rainbow-me/rainbowkit'; />
                         {/* 注意：实际代码中请直接使用 ConnectButton 组件，为了演示方便简写 */}
                    </div>
                  </div>
                </header>
                
                {children}
                
                {/* 底部机构背书 */}
                <footer className="border-t border-gray-800 py-8 mt-auto">
                   <div className="text-center text-gray-500 text-xs font-mono">
                      INSTITUTIONAL GRADE SECURITY • AUDITED BY CERTIK
                   </div>
                </footer>
              </div>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}