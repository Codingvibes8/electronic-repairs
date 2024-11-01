import { Roboto } from 'next/font/google'
import "./globals.css";
import {ThemeProvider} from '@/components/theme-provider'

import {Metadata} from "next";
import {ReactNode} from "react";

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})
export const metadata: Metadata = {
    title: {
        template: '%s | Electronics Repair Shop',
        default: 'Electronics Repair Shop',
    },
    description: "Hyper Electronics Repair Shop",
    applicationName: "Repair Shop"
};


export default function RootLayout({ children }: {children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={roboto.className}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
      {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
