import type { MetaFunction } from "@remix-run/node";
import Home from "../Pages/Home"

export const meta: MetaFunction = () => {
  return [
    { title: "CIYP" },
    { name: "description", content: "Official Website of Chocolate In Your Pocket" },
  ];
};

export default function Index() {
  return (
    <Home />
  );
}
