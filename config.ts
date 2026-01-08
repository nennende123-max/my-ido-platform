import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc, mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Institutional Capital',
  projectId: 'YOUR_PROJECT_ID', // 这里的 ID 可以先不改，或者去 walletconnect.com 申请一个
  chains: [bsc, mainnet],
  ssr: true,
});