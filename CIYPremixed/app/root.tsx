import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Scripts,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./Reusable/Footer";
import styles from "../styles.css";

export const links: LinksFunction = () => [
  { type: "module", rel: "stylesheet", href: styles },
  {
    type: "module", rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  },
  { type: "module", rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    type: "module", rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    type: "module", rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Monoton&family=Bungee+Shade&display=swap",
  },
  {
    type: "module", rel: "stylesheet",
    href: styles,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="module"
          src="https://kit.fontawesome.com/8c50fad431.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
