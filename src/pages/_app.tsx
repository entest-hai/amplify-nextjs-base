import React from "react";
import type { AppProps } from "next/app";
import "@aws-amplify/ui-react/styles.css";
import "./../styles/index.scss";
import { ColorMode, ThemeProvider } from "@aws-amplify/ui-react";
import { baseTheme } from "./../theme";
import { Header } from "../components/Layout/Header";
import { useCustomRouter } from "../components/useCustomRouter";
import classNames from "classnames";

function MyApp({ Component, pageProps }: AppProps) {
  const {
    pathname,
    query: { platform = "react" },
  } = useCustomRouter();

  const isHomepage = pathname === "/" || pathname === "/[platform]";
  const [expanded, setExpanded] = React.useState(false);
  const [colorMode, setColorMode] = React.useState("light");

  return (
    <>
      <div className={isHomepage ? `docs-home` : ""}>
        <ThemeProvider
          theme={baseTheme}
          colorMode={colorMode as ColorMode}
        >
          <Header
            expanded={expanded}
            setExpanded={setExpanded}
            colorMode={colorMode}
            setColorMode={setColorMode}
            platform={"react"}
          ></Header>

          <main className={"docs-main"}>
            <div
              className={classNames(
                "docs-sidebar-spacer",
                expanded ? "expanded" : "collapsed"
              )}
            />

            <Component
              {...pageProps}
              setExpanded={setExpanded}
              colorMode={colorMode}
            />
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
