"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.host,
        },
        // Other options
      }}
    >
      {children}
    </MetaMaskProvider>
  );
}
