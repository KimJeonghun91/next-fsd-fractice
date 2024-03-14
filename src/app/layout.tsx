import "@/shared/styles/globals.css";
import React from 'react';
import type { Metadata, Viewport } from 'next';
import { StyledEngineProvider } from '@mui/material/styles';
import { Noto_Sans_KR } from "next/font/google";
import Box from '@mui/material/Box';
import { DRAWER_MENU_LIST } from "@/shared/constants/drawerMenuList";
import LayoutDrawer from "@/widgets/LayoutDrawer";

const defaultFont = Noto_Sans_KR({ subsets: ["latin"] });

// ! Support for defaultProps will be removed ... 경고 무시
// TODO: defaultProps 제거
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export const metadata: Metadata = {
  title: "Create Custom Next App",
  description: "커스텀 해서 사용하는 Next",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0,
  maximumScale: 1,
  userScalable: false,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledEngineProvider injectFirst>
        <html lang="ko">
          <body className={defaultFont.className}>
            <Box sx={{ display: 'flex' }}>
              <LayoutDrawer menuList={DRAWER_MENU_LIST} />

              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
              </Box>
            </Box>
          </body>
        </html>
    </StyledEngineProvider>
  );
}
