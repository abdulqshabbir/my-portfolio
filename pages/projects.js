import Container from "../components/Container";
import MainContainer from "../components/MainContainer";
import FlexHeader from "../components/FlexHeader";
import LinkText from "../components/LinkText";
import Link from "next/link";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";
import FooterText from "../components/FooterText";
import FooterImage from "../components/FooterImage";
import SectionImage from "../components/Projects/SectionImage";
import { ThemeProvider } from "styled-components";
import { theme } from "./index";

// components below borrowed from About page
import Section from "../components/About/Section";
import SectionText from "../components/About/SectionText";
import Title from "../components/About/Title";
import Subtitle from "../components/About/Subtitle";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Container>
          <FlexHeader>
            <Link href="/">
              <LinkText color={theme.orange}>home</LinkText>
            </Link>
            <Link href="/about">
              <LinkText color={theme.green}>about</LinkText>
            </Link>
            <Link href="/projects">
              <LinkText color={theme.purple}>projects</LinkText>
            </Link>
          </FlexHeader>
          <Section>
            <Link href="https://abdulqshabbir.github.io/path-finding-visualizer/">
              <SectionImage
                src="path_finder.png"
                cursor="pointer"
              ></SectionImage>
            </Link>
            <SectionText>
              <Title>Path-finding Visualizer</Title>
              <Subtitle style={{ marginBottom: "1em" }}>
                React | Typescript | CSS
              </Subtitle>
              <Subtitle>
                This was a result of my obsession with path-finding algorithms.
                The program visualizes the shortest path between a selected
                start node and end node.
              </Subtitle>
            </SectionText>
          </Section>
        </Container>
        <Footer>
          <FooterSection color={theme.gray} minHeight="75px">
            <FooterImage src="github.svg"></FooterImage>
            <FooterImage src="at.svg"></FooterImage>
            <FooterImage src="linkedin.svg"></FooterImage>
          </FooterSection>
          <FooterSection color={theme.darkGray} minHeight="40px">
            <FooterText>Abdul Shabbir 2021</FooterText>
          </FooterSection>
        </Footer>
      </MainContainer>
    </ThemeProvider>
  );
}
