import type { ReactNode } from "react";

export default function CTHubLandingLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#0f0f0f', color: '#fff' }}>
      {children}
    </div>
  );
}