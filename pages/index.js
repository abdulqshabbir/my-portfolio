import Container from "../components/Container";
import FlexHeader from "../components/Header";
import LinkText from "../components/LinkText";
import Link from "next/link";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";

import HeroSection from "../components/HeroSection";
import Section from "../components/Section";

import { ThemeProvider } from "styled-components";
import HeroText from "../components/HeroText";
import HeroImage from "../components/HeroImage";

const theme = {
  green: "#24aa86",
  orange: "#ee6352",
  purple: "#673ab7",
  pageWidth: "1200px",
  gray: "#69777f",
  fs_p: "1.125rem",
  fs_h1: "3.157rem",
  fs_h2: "2.369rem",
};

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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
        <HeroSection>
          <HeroText>Hi, I'm Abdul. I make beautiful web applications.</HeroText>
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
            <Link href="/about">Learn more about me</Link>
          </Button>
        </Section>
      </Container>
    </ThemeProvider>
  );
}
