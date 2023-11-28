import { lightTheme } from "@idealjs/camphora-styled";
import clsx from "clsx";

import { appStyle } from "./App.css";
import Layout from "./features/Layout";
import Menubar from "./features/Menubar";
import Workspace from "./features/Workspace";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
      className={clsx(appStyle, lightTheme)}
    >
      <Menubar />
      <Workspace />
      {/* <Layout /> */}
    </div>
  );
};

export default App;
