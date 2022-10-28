import * as React from "react"
import "../styles/reset.css"
import "../styles/index.css"
import styled from "styled-components"
import BreakpointProvider from "../providers/BreakpointProvider"
import { Header } from "../components/Header"
import { StaticImage } from "gatsby-plugin-image"
import { Main } from "../components/Main"
import { Link, HeadFC } from "gatsby"

const HeroText = styled.div`
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  right: 10px;
  padding:  16px;
  line-height: 22px;
  box-shadow: 0px 0px 10px rgba(155,155,155,0.2);
  border: 1px solid rgba(155,155,155,0.22);
  @media (max-width: 768px) {
    position: relative;
    max-width: 100%;
    right: 0;
    bottom: 0;
  }
`

const Hero = styled.div`
  position: relative;
`

const Section = styled.section`
  width: 240px;
  box-shadow: 0px 0px 10px rgba(155,155,155,0.2);
  border: 1px solid rgba(155,155,155,0.15);
  cursor: pointer;
  @media (max-width: 420px) {
    width: 100%;
  }
  :hover {
    box-shadow: 0px 0px 10px rgba(155,155,155,0.45);
  }
`

const SectionText = styled.p`
  padding: 4px;
  text-align: center;
`

const Sections = styled.div`
  display: flex;
  padding: 16px;
  gap: 12px;
  justify-content: space-between;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`

const IndexPage = () => {
  return (
    <>
      <BreakpointProvider value={'large'}>
        <Header />
        <Main>
          <Hero>
            <StaticImage
              src="../images/hero.jpeg"
              alt="hero"
              aspectRatio={18 / 9}
              height={500}
            />
            <HeroText>
              The Dover Foundation is committed to supporting causes and programs that promote
              {' '}education and enhance the lives of Dover Company employees and their families.
              {' '}One such program is the Dover Scholars Program, which offers recurring/multi-year
              {' '}scholarships of up to $3,000 per year for a maximum of 4 years/$12,000 for undergraduate studies.
            </HeroText>
          </Hero>
          <Sections>
            <Section>
              <Link to="/programInformation">
                <StaticImage
                  src="../images/programInformation.jpeg"
                  alt="people celebrating around a meeting table"
                  layout="fullWidth"
                  objectFit="contain"
                />
                <SectionText>Program Information</SectionText>
              </Link>
            </Section>
            <Section>
              <Link to="/renewalProcess">
                <StaticImage
                  src="../images/renewalProcess.jpeg"
                  alt="people celebrating around a meeting table"
                  layout="fullWidth"
                  objectFit="contain"
                />
                <SectionText>Renewal Process</SectionText>
              </Link>
            </Section>
            <Section>
              <Link to="/news">
                <StaticImage
                  src="../images/scholarshipNews.jpeg"
                  alt="people celebrating around a meeting table"
                  layout="fullWidth"
                  objectFit="contain"
                />
                <SectionText>Scholarship News</SectionText>
              </Link>
            </Section>
            <Section>
              <Link to="/about">
                <StaticImage
                  src="../images/About.jpeg"
                  alt="people celebrating around a meeting table"
                  layout="fullWidth"
                  objectFit="contain"
                />
                <SectionText>About the Dover Foundation</SectionText>
              </Link>
            </Section>
          </Sections>
        </Main>
      </BreakpointProvider>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dover Foundation</title>
