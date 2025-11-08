import { hoodi } from "@wagmi/core/chains";
import { createConfig, createStorage, http, injected } from "@wagmi/core";
import { walletConnect } from "wagmi/connectors";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const projectId = process.env.NEXT_PUBLIC_KEY!;

const connector = walletConnect({
  projectId,
  metadata: {
    name: "wagmi",
    description: "hoodi Testnet Example",
    url: "https://spectum-dapp.vercel.app",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
});

export const config = createConfig({
  chains: [hoodi],
  storage: createStorage({
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  }),
  transports: {
    [hoodi.id]: http("https://rpc.hoodi.ethpandaops.io"),
  },
  connectors: [injected(), walletConnect({ projectId }), connector]
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
         {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}