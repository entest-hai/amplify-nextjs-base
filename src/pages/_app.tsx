import React from "react";
import type { AppProps } from "next/app";
import "@aws-amplify/ui-react/styles.css";
import "./../styles/index.scss";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { baseTheme } from "./../theme";
import { Header } from "../components/Layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [colorMode, setColorMode] = React.useState("dark");

  return (
    <>
      <div className={"docs-home"}>
        <ThemeProvider theme={baseTheme} colorMode={colorMode}>
          <Header
            expanded={expanded}
            setExpanded={setExpanded}
            colorMode={colorMode}
            setColorMode={setColorMode}
            platform={"react"}
          ></Header>

          <main className={"docs-main"}>
            <div
              className={
                ("docs-sidebar-spacer",
                expanded ? "expanded" : "collapsed")
              }
            >
              <Component></Component>
            </div>
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
