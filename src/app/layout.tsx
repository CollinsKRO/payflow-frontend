import type { Metadata, Viewport } from "next";
import "./globals.css";
import { WalletProvider } from "@/lib/wallet";
import { WalletLayoutInner } from "@/components/WalletLayoutInner";
import { PAGES, metadataBase, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata(PAGES.home, { absoluteTitle: true }),
  // The template gives every page the site name; a page that already says
  // "Payflow" opts out of it with an absolute title.
  title: { default: PAGES.home.title, template: "%s · Payflow" },
  // Relative metadata URLs resolve against this, so the base path survives.
  metadataBase: metadataBase(),
};

export const viewport: Viewport = {
  themeColor: "#0b0e14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <WalletLayoutInner>{children}</WalletLayoutInner>
        </WalletProvider>
      </body>
    </html>
  );
}
