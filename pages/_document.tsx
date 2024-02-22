import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "../components/home/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Main />
          <NextScript />
          <Analytics />
        </ThemeProvider>
      </body>
    </Html>
  );
}
