import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import { DesignSystem } from "./pages/design-system/demo";

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: pageLoader(() => import("./WELCOME.md"))
  }, 
  {
    path: '/pages/about.md',
    title: "About the Foundation",
    content: pageLoader(() => import("./pages/about.md"))
  },
  {
    title: 'Logo',
    pages: [
      {
      path: '/pages/logo-overview.md',
      title: "Overview",
      content: pageLoader(() => import("./pages/logo-overview.md"))
      },
      {
      path: '/pages/logo-versions.md',
      title: "Versions",
      content: pageLoader(() => import("./pages/logo-versions.md"))
      },
      {
      path: '/pages/logo-usage.md',
      title: "Usage",
      content: pageLoader(() => import("./pages/logo-usage.md"))
      }
    ]
  },
  {
    path: '/pages/colors.md',
    title: "Colors",
    content: pageLoader(() => import("./pages/colors.md"))
  },
  {
    path: '/pages/fonts.md',
    title: "Fonts",
    content: pageLoader(() => import("./pages/fonts.md"))
  },
  {
    title: 'Design System',
    pages: [
      {
        path: '/pages/design-system/getting-started.md',
        title: "Getting Started",
        content: pageLoader(() => import("./pages/design-system/getting-started.md"))
      },
      {
      path: '/pages/design-system/demo.js',
      title: "Demo Components",
      content: pageLoader(() => import("./pages/design-system/demo.js"))
      },
      {
        path: '/pages/design-system/text-styles.js',
        title: "Text Styles",
        content: pageLoader(() => import("./pages/design-system/text-styles.js"))
      },      
      {
        path: '/pages/design-system/buttons.js',
        title: "Buttons",
        content: pageLoader(() => import("./pages/design-system/buttons.js"))
      },
      {
        path: '/pages/design-system/effects.js',
        title: "Effects",
        content: pageLoader(() => import("./pages/design-system/effects.js"))
      },
      {
        path: '/pages/design-system/icons.js',
        title: "Icons",
        content: pageLoader(() => import("./pages/design-system/icons.js"))
      },
      {
        path: '/pages/design-system/avatars.js',
        title: "Avatars",
        content: pageLoader(() => import("./pages/design-system/avatars.js"))
      },
      {
        path: '/pages/design-system/cards.js',
        title: "Cards",
        content: pageLoader(() => import("./pages/design-system/cards.js"))
      },
      {
        path: '/pages/design-system/navigation.js',
        title: "Navigation",
        content: pageLoader(() => import("./pages/design-system/navigation.js"))
      },
      {
        path: '/pages/design-system/footer.js',
        title: "Footer",
        content: pageLoader(() => import("./pages/design-system/footer.js"))
      },
      {
        path: '/pages/design-system/banners.js',
        title: "Banners",
        content: pageLoader(() => import("./pages/design-system/banners.js"))
      },
      {
        path: '/pages/design-system/alerts.js',
        title: "Alerts",
        content: pageLoader(() => import("./pages/design-system/alerts.js"))
      },
    ]
  }
];

ReactDOM.render(
  <Catalog title="Brand Guidelines" 
  pages={pages} 
  logoSrc="OpenInfrastructureFoundation-logo-RGB-horiz3.svg"
  theme={{
      textColor: "#161616",
      sidebarColorText: "#161616",
      sidebarColorTextActive: "#28a4db",
      brandColor: "#161616",
      background: "#ffffff",
      linkColor: "#28a4db",
      pageHeadingBackground: "#161616",
      pageHeadingTextColor: "#ffffff",
      navBarBackground: "#eaeaea",
      navBarTextColor: "#000102",
      fontFamily: "'Roboto', 'Helvetica', sans-serif",
      fontHeading: "'Roboto bold', 'Helvetica bold', sans-serif",
      fontMono: "'Source Code Pro', monospace",    
    }} 
  />,
  document.getElementById("catalog")
);
