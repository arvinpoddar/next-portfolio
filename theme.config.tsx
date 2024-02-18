import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/arvinpoddar",
  },
  search: {
    placeholder: "Search blog...",
    // component: () => null,
  },
  docsRepositoryBase: "https://github.com/arvinpoddar",
  chat: {
    link: "https://linkedin.com/in/arvinpoddar",
    icon: <Linkedin />,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (!(asPath === "/" || asPath.startsWith("/#"))) {
      return {
        titleTemplate: "%s | Arvin Poddar",
      };
    } else {
      return {
        title: "Arvin Poddar",
      };
    }
  },
  logo: (
    <Image
      src="/logo/logo.png"
      className="object-contain aspect-square"
      alt=""
      height={24}
      width={24}
    />
  ),
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Software engineer" />
        <meta name="og:description" content="Software engineer." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://arvinpoddar.com/og.jpeg" />
        <meta name="twitter:site:domain" content="arvinpoddar.com" />
        <meta name="twitter:url" content="https://arvinpoddar.com" />
        <meta name="og:title" content={title} />
        <meta name="og:image" content="https://arvinpoddar.com/og.jpeg" />
        <meta name="apple-mobile-web-app-title" content="Arvin Poddar" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </>
    );
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} Arvin Poddar
        </p>
      </div>
    ),
  },
  themeSwitch: {
    component: () => null,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  toc: {
    backToTop: true,
  },
};

export default config;
