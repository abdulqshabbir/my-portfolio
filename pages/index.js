import Container from "../components/Container";
import MainContainer from "../components/MainContainer";
import FlexHeader from "../components/FlexHeader";
import LinkText from "../components/LinkText";
import Link from "next/link";

import HamburgerHeader from "../components/Mobile/HamburgerHeader";
import Hamburger from "../components/Mobile/Hamburger";
import HamburgerLines from "../components/Mobile/HamburgerLines";
import LinkWrapper from "../components/Mobile/LinkWrapper";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";

import HeroSection from "../components/HeroSection";
import HeroText from "../components/HeroText";
import HeroImage from "../components/HeroImage";
import Section from "../components/Section";

import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";
import FooterText from "../components/FooterText";
import FooterImage from "../components/FooterImage";

import { ThemeProvider } from "styled-components";
import Store from "../components/Store";

export const theme = {
  green: "#24aa86",
  orange: "#ee6352",
  purple: "#673ab7",
  pageWidth: "1200px",
  gray: "#69777f",
  darkGray: "#444a51",
  fs_p: "1.125rem",
  fs_h1: "3.157rem",
  fs_h2: "2.369rem",
  fs_p_mobile: "0.8rem",
  fs_h1_mobile: "2rem",
  fs_h2_mobile: "1.2rem",
};

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
            <HeroSection>
              <HeroText>
                Hi, I'm Abdul. I make beautiful web applications.
              </HeroText>
              <HeroImage src="/photo.jpg"></HeroImage>
            </HeroSection>
            <Section>
              <Title color={theme.green}>About Me</Title>
              <Subtitle>Spoiler alert! I'm a geek.</Subtitle>
              <Button color={theme.green}>
                <Link href="/about">Learn more about me</Link>
              </Button>
            </Section>
            <Section>
              <Title color={theme.purple}>My Projects</Title>
              <Subtitle>Check out my cool stuff!</Subtitle>
              <Button color={theme.purple}>
                <Link href="/projects">See the projects</Link>
              </Button>
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
