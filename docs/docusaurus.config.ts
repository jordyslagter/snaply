import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Snaply",
  tagline: "Elke dag een nieuwe foto-opdracht!",
  favicon: "img/snaply_favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://jordyslagter.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/snaply/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "slagter", // Usually your GitHub org/user name.
  projectName: "snaply", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jordyslagter/snaply/edit/main/docs/",
        },
        blog: {
          showReadingTime: false,
          path: "reports",
          routeBasePath: "reports",
          blogTitle: "Reports",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jordyslagter/snaply/edit/main/docs/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/snaply_logo_opaque.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Snaply",
      logo: {
        alt: "My Site Logo",
        src: "img/snaply_logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/reports", label: "Reports", position: "left" },
        {
          href: "https://jordyslagter.github.io/snaply/snaply-api/index.html",
          label: "API Reference",
          position: "left",
        },
        {
          href: "https://github.com/jordyslagter/snaply",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting started",
              to: "/docs",
            },
            {
              label: "Design documentation",
              to: "/docs/category/design-documentation",
            },
            {
              label: "System documentation",
              to: "/docs/category/system-documentation",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Reports",
              to: "/reports",
            },
            {
              label: "GitHub",
              href: "https://github.com/jordyslagter/snaply",
            },
          ],
        },
      ],
      copyright: `Copyright Jordy Slagter © ${new Date().getFullYear()} Snaply - MIT License`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
