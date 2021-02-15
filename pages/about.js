import Container from "../components/Container";
import MainContainer from "../components/MainContainer";
import FlexHeader from "../components/FlexHeader";
import LinkText from "../components/LinkText";
import Link from "next/link";

import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";
import FooterText from "../components/FooterText";
import FooterImage from "../components/FooterImage";

import Section from "../components/About/Section";
import SectionImage from "../components/About/SectionImage";
import SectionText from "../components/About/SectionText";
import Title from "../components/About/Title";
import Subtitle from "../components/About/Subtitle";

import { ThemeProvider } from "styled-components";
import { theme } from "./index";

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
            <SectionImage src="photo.jpg" rotate="0" />
            <SectionText>
              <Title>Hello, I'm Abdul</Title>
              <Subtitle>
                I want to build cool web applications for you.
              </Subtitle>
            </SectionText>
          </Section>
          <Section>
            <SectionImage src="cat_programming.jpg" rotate="0" />
            <SectionText>
              <Title>I taught myself to code</Title>
              <Subtitle>It was the best decision I've ever made.</Subtitle>
            </SectionText>
          </Section>
          <Section>
            <SectionImage src="code.png" rotate="0" />
            <SectionText>
              <Title>I love to learn new things about the web</Title>
              <Subtitle>
                I know HTML/CSS/Javascript, Typescript, React, Redux, NodeJS,
                Express, MongoDB, GraphQL, Git, Python, Semantic UI & Bootstrap,
                Unit Testing with Jest, REST
              </Subtitle>
            </SectionText>
          </Section>
          <Section>
            <SectionImage src="chinese.svg" rotate="0" />
            <SectionText>
              <Title>I enjoy learning languages.</Title>
              <Subtitle>Right now I'm learning Mandarin!</Subtitle>
            </SectionText>
          </Section>
          <Section>
            <SectionImage src="rubik.png" rotate="0" />
            <SectionText>
              <Title>I'm a geek</Title>
              <Subtitle>
                I can solve a Rubik's cube in under one minute.
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

/*

    Title: Hello, I'm Abdul
    Subtitle: I want to build cool web applications for you.
    Photo: Image of me


    Title: I taught myself to code in 2016
    Subtitle:  It was the best decision I ever made
    Photo: cat_programming.png

    Title: I love to learn new things about the web
    Subtitle: I know HTML/CSS/Javascript, Typescript, React, Redux, NodeJS, Express, MongoDB, GraphQL, Git, Python, Semantic UI & Bootstrap, Unit Testing with Jest, REST
    photo: code.png


    Title: I'm a proud pet parent of this furball
    Subtitle:  He's not so happy with me right now...
    photo: princey.jpg

    Title: I love learning new languages (the other kind)
    Subtitle: Right now I'm learning Mandarin!
    photo: chinese.svg

    Title: I'm a geek.
    Subtitle: I can solve a Rubik's cube in under one minute.
    photo:
*/
