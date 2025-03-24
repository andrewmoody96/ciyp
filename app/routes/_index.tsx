import type { MetaFunction } from "@remix-run/node";
import Default from "../components/PageComponents/HomePage/default";

export const meta: MetaFunction = () => {
  return [
    { title: "CIYP" },
    {
      name: "description",
      content: "Chocolate In Your Pocket's official website.",
    },
  ];
};

// -------------------------INDEX PAGE-------------------------------
// Loads 'Default' homepage unless code is added to render a different view.
// If we have any reason to alter the home page, this is the easy way to make sure we can render an alternative view and return to default easily.
// Render different homepages via variables, for specific timeframes, etc.
// ------------------------------------------------------------------

export default function Index() {
  const homeView = () => {
    return <Default />;
  };

  return (
    <>
      <div className="container h-[100vh] absolute top-0 flex flex-col items-center">
        {homeView()} {/* renders appropriate home page */}
      </div>
    </>
  );
}
