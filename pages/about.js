import Container from "../components/Container";
import MainContainer from "../components/MainContainer";
import FlexHeader from "../components/FlexHeader";
import LinkText from "../components/LinkText";
import Link from "next/link";

import HamburgerHeader from "../components/Mobile/HamburgerHeader";
import Hamburger from "../components/Mobile/Hamburger";
import HamburgerLines from "../components/Mobile/HamburgerLines";
import LinkWrapper from "../components/Mobile/LinkWrapper";

import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";
import FooterText from "../components/FooterText";
import FooterImage from "../components/FooterImage";

import Section from "../components/About/Section";
import SectionImage from "../components/About/SectionImage";
import { SectionImageNoBoxShadow } from "../components/About/SectionImage";
import SectionText from "../components/About/SectionText";
import Title from "../components/About/Title";
import Subtitle from "../components/About/Subtitle";

import { ThemeProvider } from "styled-components";
import { theme } from "./index";
import Store from "../components/Store";

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
              <SectionImage src="photo.jpg" rotate="8deg" />
              <SectionText>
                <Title>Hello, I'm Abdul</Title>
                <Subtitle color={theme.green}>
                  I want to build cool web applications for you.
                </Subtitle>
              </SectionText>
            </Section>
            <Section>
              <SectionImage src="cat_programming.jpg" rotate="-20deg" />
              <SectionText>
                <Title>I taught myself to code</Title>
                <Subtitle color={theme.green}>
                  It was the best decision I've ever made.
                </Subtitle>
              </SectionText>
            </Section>
            <Section>
              <SectionImage src="code.png" rotate="5deg" />
              <SectionText>
                <Title>I love to learn new things about the web</Title>
                <Subtitle color={theme.green}>
                  I know HTML/CSS/Javascript, Typescript, React, Redux, NodeJS,
                  Express, MongoDB, GraphQL, Git, Python, Semantic UI &
                  Bootstrap, Unit Testing with Jest, REST.
                </Subtitle>
              </SectionText>
            </Section>
            <Section>
              <SectionImage src="princey.jpg" rotate="-8deg" />
              <SectionText>
                <Title>I'm a proud pet parent</Title>
                <Subtitle color={theme.green}>
                  This is Prince looking off into the distance.
                </Subtitle>
              </SectionText>
            </Section>
            <Section>
              <SectionImage src="chinese.svg" rotate="10deg" />
              <SectionText>
                <Title>I enjoy learning languages</Title>
                <Subtitle color={theme.green}>
                  Right now I'm learning Mandarin!
                </Subtitle>
              </SectionText>
            </Section>
            <Section>
              <SectionImageNoBoxShadow src="rubik.png" rotate="0" />
              <SectionText>
                <Title>I'm a geek</Title>
                <Subtitle color={theme.green}>
                  I can solve a Rubik's cube in under one minute.
                </Subtitle>
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
