import { ThemeProvider } from "styled-components";
import Container from "../components/Container";
import MainContainer from "../components/MainContainer";
import FlexHeader from "../components/FlexHeader";
import Link from "next/link";
import LinkText from "../components/LinkText";

import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";
import FooterText from "../components/FooterText";
import FooterImage from "../components/FooterImage";

import { theme } from "../pages/index";

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
