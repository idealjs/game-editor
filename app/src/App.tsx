import clsx from "clsx";

import { appStyle } from "./App.css";
import { lightTheme } from "./components/styles";
import Layout from "./features/Layout";
import Menubar from "./features/Menubar";

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
      <Layout />
    </div>
  );
};

export default App;
