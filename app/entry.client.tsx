/**
 * By default, React Router will handle hydrating your app on the client for you.
 * For more information, see https://reactrouter.com/explanation/special-files#entry-client
 */

import { HydratedRouter } from "react-router/dom";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
