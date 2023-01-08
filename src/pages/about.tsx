import * as React from "react"
import { HeadFC } from "gatsby"
import BreakpointProvider from "../providers/BreakpointProvider"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "../styles/reset.css"
import "../styles/index.css"
import Footer from "../components/Footer"
import Section from "../components/Section"

const HeroText = styled.div`
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  right: 10px;
  padding:  8px;
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

const renewalProcess = () => {
  return (
    <BreakpointProvider value={'large'}>
      <Header />
      <Main>
        <Hero>
          <StaticImage
            src="../images/about.jpeg"
            alt="hero"
            layout="fullWidth"
          />
        </Hero>
        <Section>
            <h3>Mission Statement and Background</h3>
            <p>The Dover Foundation's mission is to assist our companies and their employees in their efforts to become active members in communities in which we operate. We will accomplish this mission by supporting not-for-profit organizations, causes and/or projects that benefit the community, the environment, and complement the business interests of Dover and its Operating Companies. We will also assist our employees by providing educational scholarship opportunities for their children.</p>

            <p>The Dover Foundation was established in 2011. The Foundation is tax exempt under Section 501 (c)(3) of the Internal Revenue Code. In addition to awarding scholarships to qualified children of Dover employees, contributions are made only to qualified organizations. Contributions are not made to: religious organizations for religious purposes; for any form of political activity; to non-qualified military veteran organizations, fraternal orders or labor groups; for loans of any kind; or for trips, tours, dinners, tickets or advertising. The Foundation does not have and is not able to donate equipment or products.</p>
            <h3>Public Disclosures and Forms</h3>
            <a href="../../pdf/Form990PF.pdf">Form 990PF</a><br/>
            <a href="../../pdf/Form4720.pdf">Form 4720</a><br/>
            <a href="../../pdf/Form1023ApplicationForRecognitionOfExemption.pdf">501(c)3 Letter</a>
        </Section>
      </Main>
      <Footer />
    </BreakpointProvider>
  )
}

export default renewalProcess

export const Head: HeadFC = () => <title>About the Dover Foundation</title>