import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from '../components/ThemeProvider'

import {Metadata} from "next";
import {ReactNode} from "react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
