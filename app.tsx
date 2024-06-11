import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import {Dashboard} from "../my_webpage/Dashboard.tsx";

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <Dashboard />
    </NextUIProvider>
  );
}