import Container from "../components/Container";
import MainContainer from "../components/MainContainer";
import FlexHeader from "../components/FlexHeader";
import LinkText from "../components/LinkText";
import Link from "next/link";
import Footer from "../components/Footer";

import HamburgerHeader from "../components/Mobile/HamburgerHeader";
import Hamburger from "../components/Mobile/Hamburger";
import HamburgerLines from "../components/Mobile/HamburgerLines";
import LinkWrapper from "../components/Mobile/LinkWrapper";
import Store from "../components/Store";

import FooterSection from "../components/FooterSection";
import FooterText from "../components/FooterText";
import FooterImage from "../components/FooterImage";
import SectionImage from "../components/Projects/SectionImage";
import ButtonWrapper from "../components/Projects/ButtonWrapper";
import Button from "../components/Button";

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
      <Store>
        <MainContainer>
          <Container>
            {/* desktop only */}
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

            {/* mobile only */}
            <HamburgerHeader>
              <Hamburger>
                <HamburgerLines></HamburgerLines>
              </Hamburger>
            </HamburgerHeader>
            <LinkWrapper>
              <Link href="/">
                <LinkText color={theme.orange}>home</LinkText>
              </Link>
              <Link href="/about">
                <LinkText color={theme.green}>about</LinkText>
              </Link>
              <Link href="/projects">
                <LinkText color={theme.purple}>projects</LinkText>
              </Link>
            </LinkWrapper>
            <Section>
              <Link href="https://abdulqshabbir.github.io/path-finding-visualizer/">
                <SectionImage
                  src="path_finder.png"
                  cursor="pointer"
                ></SectionImage>
              </Link>
              <SectionText>
                <Title>Path-finding Visualizer</Title>
                <Subtitle style={{ marginBottom: "1em" }} color={theme.gray}>
                  React | Typescript | CSS
                </Subtitle>
                <Subtitle color={theme.purple}>
                  This was a result of my obsession with path-finding
                  algorithms. The program visualizes the shortest path between a
                  selected start node and end node.
                </Subtitle>
                <ButtonWrapper>
                  <Button color={"black"}>
                    <Link href="https://abdulqshabbir.github.io/path-finding-visualizer/">
                      Live Demo
                    </Link>
                  </Button>
                  <Button color={"black"}>
                    <Link href="https://github.com/abdulqshabbir/path-finding-visualizer">
                      Code
                    </Link>
                  </Button>
                </ButtonWrapper>
              </SectionText>
            </Section>
            <Section>
              <Link href="https://abdulqshabbir.github.io/algorithm-visualizer/">
                <SectionImage
                  src="sorting_visualizer.png"
                  cursor="pointer"
                ></SectionImage>
              </Link>
              <SectionText>
                <Title>Sorting Visualizer</Title>
                <Subtitle style={{ marginBottom: "1em" }} color={theme.gray}>
                  React | Javascript | CSS | Semantic UI
                </Subtitle>
                <Subtitle color={theme.purple}>
                  This program allows a user to randomly generate an array of
                  numbers that the user sees as green bars. Watch the green bars
                  as the computer sorts them from smallest to largest!
                </Subtitle>
                <ButtonWrapper>
                  <Button color={"black"}>
                    <Link href="https://abdulqshabbir.github.io/algorithm-visualizer/">
                      Live Demo
                    </Link>
                  </Button>
                  <Button color={"black"}>
                    <Link href="https://github.com/abdulqshabbir/algorithm-visualizer">
                      Code
                    </Link>
                  </Button>
                </ButtonWrapper>
              </SectionText>
            </Section>
          </Container>
          <Footer>
            <FooterSection color={theme.darkGray} minHeight="100px">
              <Link href="https://github.com/abdulqshabbir">
                <FooterImage src="github.svg"></FooterImage>
              </Link>
              <FooterText>Abdul Shabbir 2021</FooterText>
              <Link href="https://www.linkedin.com/in/abdul-shabbir-702881145/">
                <FooterImage src="linkedin.svg"></FooterImage>
              </Link>
            </FooterSection>
          </Footer>
        </MainContainer>
      </Store>
    </ThemeProvider>
  );
}
