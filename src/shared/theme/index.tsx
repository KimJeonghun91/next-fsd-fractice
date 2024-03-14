"use client"

import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import customPalette from "./palette";

export default function ThemeClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const themeMode = 'light';

    const customTheme: ThemeOptions = useMemo(
        () => ({
            palette: customPalette(themeMode)
        }),
        [themeMode]
    );

    const theme = createTheme(customTheme);

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
} 