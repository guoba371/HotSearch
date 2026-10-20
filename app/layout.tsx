import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "砺选 | 行业选题雷达",
  description: "面向家装代运营团队的证据型选题工作台",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
