# Setup Amplify NextJS Project 

## Create a NextJS project  
```bash 
npx create-next-app@latest --typescript
```

add amplify and amplify-ui
```bash 
npm i @aws-amplify/ui-react aws-amplify
```

add sass, react-icons, docsearch 
```bash 
npm i react-icons @docsearch/react sass 
```

## Project structure 
```
|--amplify-nextjs-demo
|--|--public 
|--|--|--fonts
|--|--|--|--Inter-Regular.woff
|--|--|--svg
|--|--|--|--grid.svg
|--|--src
|--|--|--components 
|--|--|--|--home
|--|--|--|--|--HeroSection.tsx
|--|--|--|--Layout
|--|--|--|--|--Header.tsx
|--|--|--|--|--Footer.tsx
|--|--|--|--|--Sidebar.tsx 
|--|--|--|--|Logo.tsx
|--|--|--data 
|--|--|--|--links.tsx
|--|--|--pages
|--|--|--|--_app.tsx
|--|--|--|--index.tsx
|--|--|--styles
|--|--|--|--components
|--|--|--|--docs
|--|--|--|--primitives
|--|--|--|--index.scss
|--|--|--utils
|--|--|--theme.ts
|--|--package.json
|--|--package-lock.json
|--|--.prettierrc
|--|--tsconfig.json
|--|--next.config.js

```

index page 
```tsx
import { HeroSection } from "../components/home/sections/HeroSection";

export default function Home() {
  return <HeroSection></HeroSection>;
}

```

_app.tsx setting
```tsx
import React from "react";
import type { AppProps } from "next/app";
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
```