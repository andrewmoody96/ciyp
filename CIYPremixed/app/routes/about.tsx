import type { MetaFunction } from "@remix-run/node";
import About from "../Pages/About"

export const meta: MetaFunction = () => {
  return [
    { title: "CIYP | Music" },
    { name: "description", content: "Newest releases from Chocolate In Your Pocket" },
  ];
};

export default function Index() {
  return (
    <About />
  );
}
