import * as React from "react";

import {
  Icon,
  Heading,
  Link,
  Text,
  View,
  useTheme,
} from "@aws-amplify/ui-react";
import { SiW3C, SiReact } from "react-icons/si";

import { Sidebar } from "./SecondaryNav";
import { TableOfContents } from "../TableOfContents";
import { Footer } from "./Footer";

//import { GITHUB_REPO_FILE } from '@/data/links';
//import { DesignTokenIcon } from '@/components/DesignTokenIcon';

const canUseDOM = typeof window !== "undefined";
const useIsomorphicLayoutEffect = canUseDOM
  ? React.useLayoutEffect
  : React.useEffect;

const testHeadings = [
  {
    id: "1",
    label: "Guides",
    level: 1,
    top: 10,
  },
  {
    id: "2",
    label: "OverView",
    level: 1,
    top: 20,
  },
  {
    id: "3",
    label: "Contributing",
    level: 1,
    top: 30,
  },
];

export const MyLayout = ({ name }: { name: any }) => {
  return <Heading>This is a MDX layout {name}</Heading>;
};

export const MyMdx = () => {
  return <Heading>This is MDX</Heading>;
};

export const MyLayoutTest = ({
  children,
  frontmatter = {},
}: {
  children: any;
  frontmatter?: any;
}) => {
  const {
    title,
    description,
    hideToc = false,
    ariaPattern,
    themeSource,
    reactSource,
  } = frontmatter;
  const { tokens } = useTheme();
  const [headings, setHeadings] = React.useState([]);

  // TODO: is there a better way to do this?
  React.useEffect(() => {
    // const updateHeaders = debounce(() => {

    console.log(
      "query ",
      document.querySelector("#__next").querySelectorAll("h2[id]")
    );

    setHeadings(
      [
        ...document
          .querySelector("#__next")
          .querySelectorAll("h2[id]"),
      ].map((node: HTMLElement) => ({
        id: node.id,
        label: node.innerText,
        level: node.nodeName,
        top: node.offsetTop,
      }))
    );
  }, []);

  return (
    <>
      {/* <Sidebar /> */}
      <main className="docs-content">
        <section className="docs-content-body">
          <section className="docs-meta">
            <Heading level={1}>{title}</Heading>
            <Text
              fontSize={`${tokens.fontSizes.xl}`}
              className="docs-description"
            >
              {description}
            </Text>
            <View className="docs-component-links">
              {ariaPattern ? (
                <Link
                  className="docs-component-link"
                  href={ariaPattern}
                  isExternal
                >
                  <Icon
                    ariaLabel=""
                    as={SiW3C}
                    marginInlineEnd={tokens.space.xs}
                  />
                  ARIA pattern
                </Link>
              ) : null}
              {themeSource ? (
                <Link
                  className="docs-component-link"
                  href={"/"}
                  isExternal
                >
                  Theme source
                </Link>
              ) : null}
              {reactSource ? (
                <Link
                  className="docs-component-link"
                  href={"/"}
                  isExternal
                >
                  <Icon
                    ariaLabel=""
                    as={SiReact}
                    marginInlineEnd={tokens.space.xs}
                  />
                  React source
                </Link>
              ) : null}
            </View>
          </section>

          {children}
        </section>
        <Footer />
      </main>
      {hideToc ? null : (
        <TableOfContents title="Contents" headings={headings} />
      )}
    </>
  );
};
