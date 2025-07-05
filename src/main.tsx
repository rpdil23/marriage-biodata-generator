import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://eb269bac7cedf2235ef727d1ec8eed65@o4509614733656064.ingest.us.sentry.io/4509614734573568",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// createRoot(document.getElementById("root")!).render(<App />);
