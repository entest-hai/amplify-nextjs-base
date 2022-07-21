import NextLink from "next/link";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
  View,
} from "@aws-amplify/ui-react";
import { MdChevronRight, MdArrowDownward } from "react-icons/md";
import {
  RiCloudWindyLine,
  RiDragDropLine,
  RiPencilRuler2Line,
} from "react-icons/ri";

import { useCustomRouter } from "./../../useCustomRouter";
import { CardLink } from "./../../CardLink";
import { FRAMEWORKS } from "./../../../data/frameworks";
import { FrameworkLogo } from "./../../Logo";
import { TerminalCommand } from "./../../InstallScripts";

export const HeroSection = () => {
  // const {
  //   query: { platform = "cdk" },
  // } = useCustomRouter();

  const platform = "cdk";

  const showEditor = useBreakpointValue({
    base: false,
    large: true,
  });

  const installScripts = {
    cdk: `cdk init app --language typescript`,
    react: `npm i @aws-amplify/ui-${platform} aws-amplify`,
    vue: `npm i @aws-amplify/ui-${platform} aws-amplify`,
    angular: `npm i @aws-amplify/ui-${platform} aws-amplify`,
    flutter: "flutter pub add amplify_authenticator",
  };
  const frameworkInstallScript = installScripts[platform.toString()];

  return (
    <View as="section" className="docs-hero">
      <Flex justifyContent="center" textAlign="center">
        <Flex
          direction="column"
          className="docs-home-subsection--thin"
          alignItems="center"
        >
          <Heading level={1} marginBlockEnd="0">
            Cloud Development Kit &mdash; <br />
            <strong>Infrastructure and Application Fusion</strong>
          </Heading>
          <Text
            fontSize={{
              base: "large",
              small: "xl",
            }}
          >
            CDK is a collection of AWS services{" "}
            <View as="span" display="inline-block">
              (and more!
              {FRAMEWORKS.map((framework) => (
                <NextLink
                  key={framework}
                  href={`/${framework}`}
                  scroll={false}
                >
                  <a>
                    <FrameworkLogo
                      framework={framework}
                      marginInlineStart="xxs"
                    />
                  </a>
                </NextLink>
              ))}
              )
            </View>{" "}
            constructs that enable architecting as code.
          </Text>
          {platform === "cdk" ? (
            <Grid
              gap="medium"
              templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
            >
              <CardLink
                variation="home"
                title="Object Oriented Programming"
                href="#authentication"
                icon={<RiCloudWindyLine />}
                desc="Architect via methods and properties"
              />
              <CardLink
                variation="home"
                title="Build Your Own Constructs"
                href="#figma"
                icon={<RiDragDropLine />}
                desc="Refactor and create re-usable constructs"
              />
              <CardLink
                variation="home"
                title="Deploy Stacks in Parallel"
                href="#themeable"
                icon={<RiPencilRuler2Line />}
                desc="Mange complex systems and deploy in parallel"
              />
            </Grid>
          ) : null}
          <TerminalCommand command={frameworkInstallScript} />
          <Flex direction="row">
            <Button
              size="large"
              variation="primary"
              className="docs-home-cta"
              as="a"
              href={`getting-started/introduction`}
            >
              Get started building
              <Icon ariaLabel="" as={MdChevronRight} fontSize="xl" />
            </Button>
            {platform === "cdk" && showEditor ? (
              <Button
                size="large"
                className="docs-home-cta"
                as="a"
                href="#"
              >
                Or try it out
                <Icon
                  ariaLabel=""
                  as={MdArrowDownward}
                  fontSize="xl"
                />
              </Button>
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
};
